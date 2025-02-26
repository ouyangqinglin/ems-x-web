/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2023-12-29 09:58:34
 * @LastEditTime: 2024-03-28 11:46:49
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\components\Device\Run\index.tsx
 */

import Button from '@/components/CollectionModal/Button';
import Detail, { DetailItem, DetailProps, GroupItem } from '@/components/Detail';
import Meter from '@/components/Meter';
import { GridItemType } from '@/components/Meter/helper';
import { useAuthority } from '@/hooks';
import { DeviceDataType } from '@/services/equipment';
import {
  DeviceModelAuthorityType,
  DeviceModelDescribeType,
  DeviceModelType,
  DeviceServiceModelType,
} from '@/types/device';
import {
  DeviceModelDescribeTypeEnum,
  DeviceModelShowTypeEnum,
  formatModelValue,
  getPropsFromTree,
  isEmpty,
} from '@/utils';
import { Empty, Spin } from 'antd';
import React, { Suspense, lazy, memo, useCallback, useMemo, useState } from 'react';
import styles from './index.less';

export type RunType = {
  deviceData?: DeviceDataType;
  realTimeData?: Record<string, any>;
  groupData?: DeviceModelDescribeType[];
  detailProps?: Omit<DetailProps, 'items' | 'data'>;
};

const Run: React.FC<RunType> = (props) => {
  const { deviceData, realTimeData, groupData, detailProps } = props;

  const [collectionInfo, setCollectionInfo] = useState({
    title: '',
    collection: '',
    originCollection: '',
    deviceId: '',
  });

  const components = useMemo<
    Record<string, React.LazyExoticComponent<React.ComponentType<any>>>
  >(() => {
    const ids = getPropsFromTree(
      groupData,
      'id',
      'children',
      (item) =>
        item.type == DeviceModelDescribeTypeEnum.Component &&
        (item.id != 'ParallelMachine' || !isEmpty(deviceData?.masterSlaveMode)),
    );
    return ids.reduce((result, item) => {
      return {
        ...result,
        [item]: lazy(() => import('@/components/Device/module/' + item)),
      };
    }, {});
  }, [groupData, deviceData]);

  const onClick = useCallback((item: DetailItem) => {
    if (item?.field) {
      const fieldArr = item?.field?.split?.('.');
      setCollectionInfo({
        title: item.label as any,
        originCollection: item?.field,
        collection: item?.deviceId ? fieldArr[fieldArr.length - 1] : item.field,
        deviceId: item?.deviceId,
      });
    }
  }, []);

  const authorityCodes = useMemo(() => {
    const result: string[] = [];
    const authoritys = getPropsFromTree<DeviceModelDescribeType, DeviceModelAuthorityType[]>(
      groupData,
      'authority',
    );
    authoritys?.forEach?.((item) => {
      item?.forEach?.((child) => {
        if (child.detail) {
          result.push(child.detail);
        }
      });
    });
    return result;
  }, [groupData]);

  const { authorityMap } = useAuthority(authorityCodes);

  const passAuthority = useCallback(
    (authoritys?: DeviceModelAuthorityType[]) => {
      const codes: string[] = [];
      authoritys?.forEach?.((item) => {
        if (item?.detail) {
          codes.push(item.detail);
        }
      });
      const passCodes = codes?.some?.((item) => authorityMap.get(item));
      if (!codes?.length || passCodes) {
        return true;
      } else {
        return false;
      }
    },
    [authorityMap],
  );

  const getDetailItems = useCallback((service: DeviceServiceModelType[]) => {
    const result: DetailItem[] = [];
    service?.forEach?.((item, index) => {
      if (item.showType == DeviceModelShowTypeEnum.Line) {
        result[result?.length - 1].span =
          4 - (result.reduce((sum, col) => sum + (col.span ?? 1), 0) % 3);
        result.push({
          className: styles.line,
          span: 3,
          showPlaceholder: false,
          showExtra: false,
        });
      } else if (item.showType != DeviceModelShowTypeEnum.HideName) {
        result.push({
          field: item?.id || '',
          label: item?.name,
          span: item.span,
          deviceId: item?.deviceId,
          unit: item?.dataType?.specs?.unit,
          valueInterceptor: (_, data) => {
            if (item?.deviceId) {
              const realField = item?.id?.split?.('.') || [];
              return data?.[item?.deviceId || '']?.[realField?.[realField?.length - 1]];
            } else {
              return data?.[item?.id || ''];
            }
          },
          format: (value) => formatModelValue(value, item?.dataType || {}),
        });
      }
    });
    if (result.length > 1) {
      result[result?.length - 1].span =
        4 - (result.reduce((sum, item) => sum + (item.span ?? 1), 0) % 3);
    }
    return result;
  }, []);

  const getGridComponent = useCallback(
    (group?: DeviceModelDescribeType[], columns = 5) => {
      const grid: GridItemType[] = [];
      group?.forEach?.((item) => {
        if (passAuthority(item?.authority)) {
          grid.push({
            title: item?.name,
            icon: item?.icon,
            width: 100 / columns + '%',
            item: item?.children?.map?.((child) => ({
              label: child?.name,
              field: child?.id,
            })),
          });
        }
      });
      return (data: any) => (
        <Meter
          items={grid}
          data={data}
          detailProps={{
            colon: false,
            valueStyle: { flex: 1, textAlign: 'right' },
          }}
        />
      );
    },
    [passAuthority],
  );

  const getGroupItems = useCallback(
    (modelDescribeItem: DeviceModelDescribeType) => {
      const result: GroupItem[] = [];
      switch (modelDescribeItem.type) {
        case DeviceModelDescribeTypeEnum.Group:
        case DeviceModelDescribeTypeEnum.PropertyGroup:
          if (passAuthority(modelDescribeItem?.authority)) {
            if (modelDescribeItem.showType != DeviceModelShowTypeEnum.HideName) {
              result.push({
                label: <Detail.Label title={modelDescribeItem.name} />,
              });
            }
            if (modelDescribeItem.showType == DeviceModelShowTypeEnum.Grid) {
              result.push({
                component: getGridComponent(modelDescribeItem.children, modelDescribeItem?.columns),
              });
            } else {
              if (modelDescribeItem?.children?.[0]?.type == DeviceModelDescribeTypeEnum.Property) {
                result.push({
                  items: getDetailItems(modelDescribeItem?.children),
                });
              } else {
                modelDescribeItem?.children?.forEach?.((item) => {
                  if (passAuthority(item?.authority)) {
                    result.push(...getGroupItems(item));
                  }
                });
              }
            }
          }
          break;
        case DeviceModelDescribeTypeEnum.Tab:
          const tabItems: GroupItem['tabItems'] = [];
          modelDescribeItem?.children?.forEach?.((item) => {
            if (passAuthority(item?.authority)) {
              if (item?.type == DeviceModelDescribeTypeEnum.TabItem) {
                const tabGroupItems: GroupItem[] = [];
                (item as DeviceModelDescribeType)?.children?.forEach?.((tabGroupItem) => {
                  tabGroupItems.push(...getGroupItems(tabGroupItem));
                });
                tabItems.push({
                  key: item.id || '',
                  label: item.name,
                  groupItems: tabGroupItems,
                });
              }
            }
          });
          result.push({
            tabItems,
          });
          break;
        case DeviceModelDescribeTypeEnum.Component:
          if (modelDescribeItem.id) {
            const Component = components[modelDescribeItem.id];
            !!Component &&
              result.push({
                component: (
                  <Suspense
                    fallback={
                      <div className="tx-center">
                        <Spin />
                      </div>
                    }
                  >
                    <Component deviceId={deviceData?.deviceId} />
                  </Suspense>
                ),
              });
          }
          break;
        default:
      }
      return result;
    },
    [deviceData, getDetailItems, passAuthority, getGridComponent, components],
  );

  const groupsItems = useMemo(() => {
    const result: GroupItem[] = [];
    groupData?.forEach?.((item) => {
      result.push(...getGroupItems(item));
    });
    return result;
  }, [groupData, getGroupItems, authorityMap, collectionInfo]);

  return (
    <>
      {groupsItems.length ? (
        <Detail.Group
          data={realTimeData}
          items={groupsItems}
          detailProps={{
            labelStyle: { width: 140 },
            unitInLabel: true,
            ...detailProps,
          }}
        />
      ) : (
        <Empty className="mt20" />
      )}
    </>
  );
};

export default memo(Run);
