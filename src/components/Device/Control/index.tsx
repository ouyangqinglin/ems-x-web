/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2023-11-27 14:38:35
 * @LastEditTime: 2024-05-21 17:53:28
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\components\Device\Control\index.tsx
 */
import React, {
  Suspense,
  lazy,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type {
  DeviceArrayType,
  DeviceDoubleType,
  DeviceEnumType,
  DeviceModelAuthorityType,
  DeviceModelDescribeType,
  DeviceServiceModelType,
  DeviceServiceType,
  DeviceStructType,
} from '@/types/device';
import Detail from '@/components/Detail';
import type { DetailItem, DetailProps, GroupItem } from '@/components/Detail';
import {
  DeviceModelDescribeTypeEnum,
  DeviceModelShowTypeEnum,
  DeviceModelTypeEnum,
  formatMessage,
  formatModelValue,
  getPropsFromTree,
  isEmpty,
  parseToArray,
  parseToObj,
} from '@/utils';
import ConfigModal from '../ConfigModal';
import type { ProFormColumnsType } from '@ant-design/pro-components';
import { getColumnsLength, timeRangeColumn, validatorTime } from './helper';
import { merge, mergeWith } from 'lodash';
import { Button, Modal, Spin, message, Typography, Switch } from 'antd';
import { useBoolean } from 'ahooks';
import { TimeRangePicker, DateStamp } from '@/components/Time';
import type { DeviceDataType } from '@/services/equipment';
import { DeviceMasterMode, OnlineStatusEnum } from '@/utils/dictionary';
import Authority from '@/components/Authority';
import useAuthority, { AuthorityModeEnum } from '@/hooks/useAuthority';
import RadioButton from '@/components/RadioButton';
import { useRequest } from 'umi';
import styles from './index.less';
import { useDeviceData, useSourceId } from '@/hooks';
import { EditOutlined, RedoOutlined } from '@ant-design/icons';
import DeviceContext, { RefreshRequestParams } from '../Context/DeviceContext';
import { editDeviceData } from '@/services/device';

export type ControlType = {
  deviceId?: string;
  groupData?: DeviceModelDescribeType[];
  realTimeData?: Record<string, any>;
  deviceData?: DeviceDataType;
  onLoadChange?: () => void;
  detailProps?: Omit<DetailProps, 'items' | 'data'>;
  onSuccess?: (data: any) => void;
  beforeSubmit?: (data: Record<string, any>) => void | boolean | any;
  beforeRefresh?: (data: Record<string, any>) => any;
};

const singleFieldName = 'arryField';

const Control: React.FC<ControlType> = memo((props) => {
  const {
    deviceId,
    deviceData,
    groupData,
    realTimeData: allRealTimeData,
    onLoadChange,
    detailProps,
    onSuccess,
    beforeSubmit,
    beforeRefresh,
  } = props;

  const [realTimeData, setRealTimeData] = useState<Record<string, any>>({});
  const { sourceId } = useSourceId();
  const [transformData, setTransformData] = useState({});
  const [openForm, { set, setTrue }] = useBoolean(false);
  const { run: refreshDeviceData, realTimeData: partRealTimeData } = useDeviceData({
    manual: true,
    isInterval: false,
  });
  const [currentFormInfo, setCurrentFormInfo] = useState<{
    service?: DeviceServiceType;
    columns?: ProFormColumnsType[];
    width?: string;
  }>({});
  const { loading, run } = useRequest(editDeviceData, {
    manual: true,
  });

  const components = useMemo<
    Record<string, React.LazyExoticComponent<React.ComponentType<any>>>
  >(() => {
    const ids = getPropsFromTree(
      groupData,
      'id',
      'children',
      (item) => item.type == DeviceModelDescribeTypeEnum.Component,
    );
    return ids.reduce((result, item) => {
      return {
        ...result,
        [item]: lazy(() => import('@/components/Device/module/' + item)),
      };
    }, {});
  }, [groupData]);

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
        if (child.edit) {
          result.push(child.edit);
        }
      });
    });
    return result;
  }, [groupData]);

  const { authorityMap } = useAuthority(authorityCodes);

  const onClick = useCallback(
    (service: DeviceServiceType, columns: ProFormColumnsType[], columnsLength: number) => {
      setCurrentFormInfo({
        service,
        columns,
        width: columnsLength < 3 ? '552px' : '816px',
      });
      setTrue();
    },
    [],
  );

  const btnClick = useCallback(
    (field: DeviceServiceModelType, value: any) => {
      Modal.confirm({
        title: field?.name,
        content: formatMessage({
          id: 'device.whetherExecuteCurrentParameter',
          defaultMessage: '是否执行当前参数下发',
        }),
        okText: formatMessage({ id: 'common.confirm', defaultMessage: '确认' }),
        cancelText: formatMessage({ id: 'common.cancel', defaultMessage: '取消' }),
        onOk: () =>
          run({ [field.id || '']: value, sourceId }).then((data: any) => {
            if (data) {
              message.success(
                formatMessage({ id: 'device.issueSuccess', defaultMessage: '下发成功' }),
              );
              onSuccess?.(data);
            }
          }),
      });
    },
    [deviceData?.deviceId, sourceId, onSuccess],
  );

  const onRefresh = useCallback(
    (service?: DeviceServiceType | DeviceServiceModelType, showTip = true) => {
      const ids = getPropsFromTree([service || {}]);
      const refreshParams = {
        data: ids,
      };
      const result = beforeRefresh?.(refreshParams);
      refreshDeviceData?.(result || refreshParams)?.then?.((data) => {
        if (data.code == '200' && showTip) {
          message.success(
            formatMessage({ id: 'device.refreshSuccess', defaultMessage: '刷新成功' }),
          );
        }
      });
    },
    [refreshDeviceData, deviceId, beforeRefresh],
  );

  const passAuthority = useCallback(
    (authoritys?: DeviceModelAuthorityType[], type?: 'detail' | 'edit') => {
      const codes: string[] = [];
      authoritys?.forEach?.((item) => {
        if (type == 'edit') {
          if (item?.edit) {
            codes.push(item.edit);
          }
        } else {
          if (item?.detail) {
            codes.push(item.detail);
          }
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

  const getFieldItem = useCallback(
    (field: DeviceServiceModelType) => {
      const detailItems: DetailItem[] = [];
      const columns: ProFormColumnsType[] = [];
      let valueType: ProFormColumnsType['valueType'] = 'text';
      switch (field?.dataType?.type) {
        case DeviceModelTypeEnum.Array:
          const specsItem = (field?.dataType as DeviceArrayType)?.specs?.item || {};
          if (specsItem?.type == DeviceModelTypeEnum.Struct) {
          } else {
            if (field.dataType.specs) {
              (field.dataType.specs as any) = {
                originalItem: specsItem,
                item: {
                  type: 'struct',
                  specs: [
                    {
                      id: singleFieldName,
                      name:
                        specsItem?.type == DeviceModelTypeEnum.TimeRange
                          ? formatMessage({ id: 'common.periodTime', defaultMessage: '时段' })
                          : '',
                      dataType: specsItem,
                    },
                  ],
                },
              };
            }
          }
          const column: ProFormColumnsType = merge(
            {
              dataIndex: field.id,
              formItemProps: {
                rules:
                  field?.required === false
                    ? []
                    : [
                        {
                          required: true,
                          message: formatMessage(
                            { id: 'common.pleaseEnterSentence', defaultMessage: '请输入' },
                            {
                              content: field?.name,
                            },
                          ),
                        },
                      ],
              },
              fieldProps: {
                creatorButtonProps: {
                  creatorButtonText: formatMessage(
                    { id: 'common.addSentence', defaultMessage: '新增' },
                    {
                      content: field?.name,
                    },
                  ),
                },
              },
            },
            timeRangeColumn,
          );
          const specsLength = (specsItem as DeviceStructType)?.specs?.length || 0;
          (specsItem as DeviceStructType)?.specs?.forEach?.((structField) => {
            structField.parentId = field?.id;
            const { cols } = getFieldItem(structField);
            cols[0].colProps = { span: specsLength < 3 ? 24 / specsLength : 8 };
            (column?.columns as any)?.[0]?.columns?.push?.(...cols);
          });
          columns.push(column);

          let fieldValue = parseToArray(realTimeData?.[field?.id || '']);
          if (field?.deviceId) {
            const realField = field?.id?.split?.('.') || [];
            fieldValue = parseToArray(
              realTimeData?.[field?.deviceId || '']?.[realField?.[realField?.length - 1]],
            );
          }
          const items: DetailItem[] = [];
          const detailData: Record<string, any> = {};
          const formData = fieldValue?.map?.((value, index) => {
            const specs = (specsItem as DeviceStructType)?.specs;
            let transformValue = value;
            if (typeof transformValue != 'object' || Array.isArray(transformValue)) {
              transformValue = {
                [singleFieldName]: transformValue,
              };
            }
            specs?.forEach?.((item, itemFieldIndex) => {
              items.push({
                field: (item?.id || '') + index,
                label: (item?.name ?? '') + (itemFieldIndex ? '' : index + 1),
                span: item?.span,
                unit: item?.dataType?.specs?.unit,
                valueInterceptor: (_, data) => {
                  if (item?.deviceId) {
                    const realField = item?.id?.split?.('.') || [];
                    return data?.[item?.deviceId || '']?.[
                      realField?.[realField?.length - 1] + index
                    ];
                  } else {
                    return data?.[(item?.id || '') + index];
                  }
                },
                format: (formatValue) => formatModelValue(formatValue, item?.dataType || {}),
              });
              detailData[(item?.id || '') + index] = transformValue[item?.id || ''];
            });
            if (items.length > 1 && specs?.length) {
              items[items.length - 1].span = 4 - specs.length;
            }
            return transformValue;
          });
          if (!items?.length) {
            items.push({
              field: 'arrayxxx',
              label: (specsItem as DeviceStructType)?.specs?.[0]?.name + '1',
            });
          }
          detailItems.push(...items);
          setTransformData((prevData: any) => {
            const mergedData = merge({}, prevData, detailData);
            return {
              ...mergedData,
              [field?.id || '']: formData,
            };
          });
          break;
        case DeviceModelTypeEnum.TimeRange:
          columns.push({
            title: field?.name,
            dataIndex: field?.id,
            valueType: 'timeRange',
            formItemProps: ({ getFieldValue }) => {
              return {
                rules: [
                  ...(field?.required === false
                    ? []
                    : [
                        {
                          required: true,
                          message: formatMessage(
                            { id: 'common.pleaseSelectSentence', defaultMessage: '请选择' },
                            {
                              content: field?.name,
                            },
                          ),
                        },
                      ]),
                  {
                    validator: (rule, value) => {
                      return validatorTime(rule, value, field?.parentId || '', getFieldValue);
                    },
                  },
                ],
              };
            },
            renderFormItem: () => <TimeRangePicker />,
          });
          detailItems.push?.({
            field: field?.id || '',
            label: field?.name,
            span: field?.span,
            unit: field?.dataType?.specs?.unit,
            valueInterceptor: (_, data) => {
              if (field?.deviceId) {
                const realField = field?.id?.split?.('.') || [];
                return data?.[field?.deviceId || '']?.[realField?.[realField?.length - 1]];
              } else {
                return data?.[field?.id || ''];
              }
            },
            format: (value) => formatModelValue(value, field?.dataType || {}),
            extral: (
              <>
                {field?.buttons?.includes?.('refresh') && (
                  <RedoOutlined
                    className={`cl-primary cursor ${styles.refresh}`}
                    onClick={() => onRefresh(field)}
                    title="刷新"
                  />
                )}
                {field?.buttons?.includes?.('edit') && (
                  <EditOutlined
                    className={`cl-primary cursor ${styles.refresh}`}
                    onClick={() =>
                      onClick(
                        { ...field },
                        columns.map((item) => ({ ...item, colProps: { span: 24 } })),
                        1,
                      )
                    }
                    title="编辑"
                  />
                )}
              </>
            ),
          });
          break;
        case DeviceModelTypeEnum.Enum:
        case DeviceModelTypeEnum.Boolean:
          const enumSpecs = parseToObj((field?.dataType as DeviceEnumType)?.specs || {});
          switch (field.showType) {
            case DeviceModelShowTypeEnum.Switch:
              detailItems.push?.({
                field: field?.id || '',
                label: field?.name,
                showPlaceholder: false,
                span: field?.span,
                unit: field?.dataType?.specs?.unit,
                labelStyle: {
                  width: '145px',
                  marginTop: '4px',
                },
                format: (value, data) => {
                  let formatValue = value;
                  if (field?.deviceId) {
                    const realField = field?.id?.split?.('.') || [];
                    formatValue =
                      data?.[field?.deviceId || '']?.[realField?.[realField?.length - 1]];
                  } else {
                    formatValue = data?.[field?.id || ''];
                  }
                  return (
                    <Switch
                      checked={!!formatValue}
                      disabled={
                        deviceData?.networkStatus === OnlineStatusEnum.Offline ||
                        !passAuthority(field?.authority, 'edit')
                      }
                      loading={loading}
                      onClick={() => btnClick(field, !!formatValue ? 1 : 0)}
                    />
                  );
                },
              });
              break;
            case DeviceModelShowTypeEnum.RadioButton:
            case DeviceModelShowTypeEnum.Button:
              const options = Object.entries(enumSpecs).map(([value, label]) => ({
                value: isEmpty(value) ? '' : value + '',
                label,
              }));
              detailItems.push?.({
                field: field?.id || '',
                label: field?.name,
                showPlaceholder: false,
                span: field?.span,
                unit: field?.dataType?.specs?.unit,
                labelStyle: {
                  width: '145px',
                  marginTop: '4px',
                },
                format: (value, formatData) => {
                  let data;
                  let childData;
                  let formatValue = value;
                  if (field?.deviceId) {
                    const realField = field?.id?.split?.('.') || [];
                    childData = formatData?.[field?.deviceId || ''];
                    formatValue = childData?.[realField?.[realField?.length - 1]];
                  } else {
                    data = formatData;
                    formatValue = data?.[field?.id || ''];
                  }
                  let fieldDisabled = false;
                  if (field?.disabled) {
                    try {
                      const evalResult = eval(field?.disabled?.replace?.(/\$data/g, 'data'));
                      if (typeof evalResult == 'boolean') {
                        fieldDisabled = evalResult;
                      }
                    } catch {}
                  }
                  return (
                    <>
                      <RadioButton
                        options={options}
                        type={field.showType == DeviceModelShowTypeEnum.Button ? 'button' : 'radio'}
                        value={isEmpty(formatValue) ? '' : formatValue + ''}
                        disabled={
                          deviceData?.networkStatus === OnlineStatusEnum.Offline ||
                          fieldDisabled ||
                          !passAuthority(field?.authority, 'edit')
                        }
                        onChange={(btnValue) => btnClick(field, btnValue)}
                        loading={loading}
                      />
                      {!!field?.tip && (
                        <div>
                          <Typography.Text type="secondary">{field?.tip}</Typography.Text>
                        </div>
                      )}
                    </>
                  );
                },
              });
              break;
            default:
              columns.push({
                title: field?.name,
                dataIndex: field?.id,
                valueType: 'select',
                fieldProps: {
                  options: Object.entries(enumSpecs)?.map?.(([value, label]) => ({
                    value: isEmpty(value) ? '' : value + '',
                    label,
                  })),
                  placeholder: formatMessage({
                    id: 'common.pleaseSelect',
                    defaultMessage: '请选择',
                  }),
                },
                convertValue: (value) => (isEmpty(value) ? '' : value + ''),
                formItemProps: {
                  rules:
                    field?.required === false
                      ? []
                      : [
                          {
                            required: true,
                            message: formatMessage(
                              { id: 'common.pleaseSelectSentence', defaultMessage: '请选择' },
                              {
                                content: field?.name,
                              },
                            ),
                          },
                        ],
                },
              });
              detailItems.push?.({
                field: field?.id || '',
                label: field?.name,
                span: field?.span,
                unit: field?.dataType?.specs?.unit,
                valueInterceptor: (_, data) => {
                  if (field?.deviceId) {
                    const realField = field?.id?.split?.('.') || [];
                    return data?.[field?.deviceId || '']?.[realField?.[realField?.length - 1]];
                  } else {
                    return data?.[field?.id || ''];
                  }
                },
                format: (value) => formatModelValue(value, field?.dataType || {}),
                extral: (
                  <>
                    {field?.buttons?.includes?.('refresh') && (
                      <RedoOutlined
                        className={`cl-primary cursor ${styles.refresh}`}
                        onClick={() => onRefresh(field)}
                        title="刷新"
                      />
                    )}
                    {field?.buttons?.includes?.('edit') && (
                      <EditOutlined
                        className={`cl-primary cursor ${styles.refresh}`}
                        onClick={() =>
                          onClick(
                            { ...field },
                            columns.map((item) => ({ ...item, colProps: { span: 24 } })),
                            1,
                          )
                        }
                        title="编辑"
                      />
                    )}
                  </>
                ),
              });
              break;
          }
          break;
        case DeviceModelTypeEnum.TimeStamp:
          columns.push({
            title: field?.name,
            dataIndex: field?.id,
            formItemProps: {
              validateTrigger: 'submit',
              rules:
                field?.required === false
                  ? []
                  : [
                      {
                        required: true,
                        message: formatMessage(
                          { id: 'common.pleaseSelectSentence', defaultMessage: '请选择' },
                          {
                            content: field?.name,
                          },
                        ),
                      },
                    ],
            },
            renderFormItem: () => <DateStamp />,
          });
          detailItems.push?.({
            field: field?.id || '',
            label: field?.name,
            span: field?.span,
            unit: field?.dataType?.specs?.unit,
            valueInterceptor: (_, data) => {
              if (field?.deviceId) {
                const realField = field?.id?.split?.('.') || [];
                return data?.[field?.deviceId || '']?.[realField?.[realField?.length - 1]];
              } else {
                return data?.[field?.id || ''];
              }
            },
            format: (value) => formatModelValue(value, field?.dataType || {}),
            extral: (
              <>
                {field?.buttons?.includes?.('refresh') && (
                  <RedoOutlined
                    className={`cl-primary cursor ${styles.refresh}`}
                    onClick={() => onRefresh(field)}
                    title="刷新"
                  />
                )}
                {field?.buttons?.includes?.('edit') && (
                  <EditOutlined
                    className={`cl-primary cursor ${styles.refresh}`}
                    onClick={() =>
                      onClick(
                        { ...field },
                        columns.map((item) => ({ ...item, colProps: { span: 24 } })),
                        1,
                      )
                    }
                    title="编辑"
                  />
                )}
              </>
            ),
          });
          break;
        case DeviceModelTypeEnum.Int:
        case DeviceModelTypeEnum.Double:
        case DeviceModelTypeEnum.Long:
          valueType = 'digit';
        case DeviceModelTypeEnum.String:
        default:
          const doubleSpecs = (field?.dataType as DeviceDoubleType)?.specs;
          columns.push({
            title: field?.name,
            dataIndex: field?.id,
            valueType: valueType,
            fieldProps: {
              ...(valueType == 'digit'
                ? {
                    min: (doubleSpecs?.enable && doubleSpecs?.min) || Number.MIN_SAFE_INTEGER,
                    max: (doubleSpecs?.enable && doubleSpecs?.max) || Number.MAX_SAFE_INTEGER,
                  }
                : {}),
              ...(doubleSpecs?.unit
                ? {
                    addonAfter: doubleSpecs?.unit,
                  }
                : {}),
            },
            formItemProps: {
              rules:
                field?.required === false
                  ? []
                  : [
                      {
                        required: true,
                        message: formatMessage(
                          { id: 'common.pleaseEnterSentence', defaultMessage: '请输入' },
                          {
                            content: field?.name,
                          },
                        ),
                      },
                    ],
            },
          });
          detailItems.push?.({
            field: field?.id || '',
            label: field?.name,
            span: field?.span,
            unit: field?.dataType?.specs?.unit,
            valueInterceptor: (_, data) => {
              if (field?.deviceId) {
                const realField = field?.id?.split?.('.') || [];
                return data?.[field?.deviceId || '']?.[realField?.[realField?.length - 1]];
              } else {
                return data?.[field?.id || ''];
              }
            },
            format: (value) => formatModelValue(value, field?.dataType || {}),
            extral: (
              <>
                {field?.buttons?.includes?.('refresh') && (
                  <RedoOutlined
                    className={`cl-primary cursor ${styles.refresh}`}
                    onClick={() => onRefresh(field)}
                    title="刷新"
                  />
                )}
                {field?.buttons?.includes?.('edit') && (
                  <EditOutlined
                    className={`cl-primary cursor ${styles.refresh}`}
                    onClick={() =>
                      onClick(
                        { ...field },
                        columns.map((item) => ({ ...item, colProps: { span: 24 } })),
                        1,
                      )
                    }
                    title="编辑"
                  />
                )}
              </>
            ),
          });
      }
      return {
        items: detailItems,
        cols: columns,
      };
    },
    [realTimeData, deviceData, btnClick, loading, passAuthority, onClick, onRefresh],
  );

  const getServiceItem = useCallback(
    (service: DeviceServiceType) => {
      const detailItems: DetailItem[] = [];
      const columns: ProFormColumnsType[] = [];
      service?.children?.forEach?.((field) => {
        if (passAuthority(field.authority)) {
          field.serviceId = service.id;
          field.queryId = service.queryId;
          const { items, cols } = getFieldItem(field);
          if (field.dataType?.type == DeviceModelTypeEnum.Array) {
            if (detailItems.length > 1) {
              detailItems[detailItems?.length - 1].span = 4 - (detailItems.length % 3);
            }
          }
          detailItems.push(...items);
          columns.push(...cols);
        }
      });
      const columnsLength = getColumnsLength(columns);
      if (columns.length < 3) {
        columns.forEach((item) => {
          item.colProps = {
            span: 24 / columns.length,
          };
        });
      }
      if (detailItems?.length == 2) {
        detailItems[1].span = 2;
      }
      const groupItem: GroupItem = {
        className: styles.btnDetail,
        items: detailItems,
      };
      if (service.showType != DeviceModelShowTypeEnum.HideName) {
        groupItem.label = (
          <Detail.Label
            title={
              <>
                {service?.name}
                {!!service?.tip && (
                  <Typography.Text className={styles.tip} type="secondary">
                    ({service?.tip})
                  </Typography.Text>
                )}
              </>
            }
          >
            <Authority
              code={service?.authority?.map?.((item) => item.edit)?.join?.(',')}
              mode={AuthorityModeEnum.Within}
            >
              {service?.buttons?.includes?.('refresh') && (
                <RedoOutlined
                  className={`cl-primary cursor ${styles.refresh}`}
                  onClick={() => onRefresh(service)}
                  title="刷新"
                />
              )}
              {service?.buttons?.includes?.('edit') && (
                <EditOutlined
                  className={`cl-primary cursor ml12`}
                  onClick={() => onClick(service, columns, columnsLength)}
                  disabled={deviceData?.networkStatus === OnlineStatusEnum.Offline}
                  title="编辑"
                />
              )}
            </Authority>
          </Detail.Label>
        );
      }
      return groupItem;
    },
    [deviceData, getFieldItem, onClick, onRefresh, passAuthority],
  );

  const getGroupItems = useCallback(
    (modelDescribeItem: DeviceModelDescribeType) => {
      const result: GroupItem[] = [];
      if (passAuthority(modelDescribeItem?.authority)) {
        switch (modelDescribeItem.type) {
          case DeviceModelDescribeTypeEnum.Group:
            if (
              modelDescribeItem.children &&
              (modelDescribeItem.children.length > 1 ||
                modelDescribeItem.children?.[0]?.showType == DeviceModelShowTypeEnum.HideName)
            ) {
              result.push({
                label: (
                  <Detail.Label
                    title={
                      <>
                        {modelDescribeItem?.name}
                        {!!modelDescribeItem?.tip && (
                          <Typography.Text className={styles.tip} type="secondary">
                            ({modelDescribeItem?.tip})
                          </Typography.Text>
                        )}
                      </>
                    }
                  />
                ),
              });
            }
            modelDescribeItem?.children?.forEach?.((item) => {
              if (passAuthority(item?.authority)) {
                result.push(...getGroupItems(item));
              }
            });
            break;
          case DeviceModelDescribeTypeEnum.PropertyGroup:
          case DeviceModelDescribeTypeEnum.Service:
            result.push(getServiceItem(modelDescribeItem));
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
      }
      return result;
    },
    [realTimeData, deviceData, getServiceItem, passAuthority, components],
  );

  const groupsItems = useMemo(() => {
    const result: GroupItem[] = [];
    if (deviceData?.masterSlaveMode != DeviceMasterMode.Slave) {
      groupData?.forEach?.((item) => {
        result.push(...getGroupItems(item));
      });
    } else {
      const childrens = getPropsFromTree<DeviceModelDescribeType, DeviceModelDescribeType[]>(
        [{ children: groupData }],
        'children',
      );
      childrens.forEach((item) => {
        item.forEach((childItem) => {
          if (childItem.id == 'RemoteUpgrade') {
            result.push(...getGroupItems(childItem));
          }
        });
      });
    }
    return result;
  }, [groupData, deviceData, getGroupItems, realTimeData, authorityMap]);

  useEffect(() => {
    onLoadChange?.();
  }, [groupsItems]);

  useEffect(() => {
    setRealTimeData((prevData) => {
      return mergeWith({}, prevData, allRealTimeData, (_, newValue) => {
        if (Array.isArray(newValue)) {
          return newValue;
        }
      });
    });
  }, [allRealTimeData]);

  useEffect(() => {
    setRealTimeData((prevData) => {
      return mergeWith({}, prevData, partRealTimeData, (_, newValue) => {
        if (Array.isArray(newValue)) {
          return newValue;
        }
      });
    });
  }, [partRealTimeData]);

  return (
    <>
      {!!groupsItems?.length && (
        <>
          <Detail.Group
            data={{ ...merge({}, realTimeData, transformData) }}
            items={groupsItems}
            detailProps={{
              labelStyle: { width: 140 },
              contentStyle: { width: 50 },
              unitInLabel: true,
              ...detailProps,
            }}
          />
          <ConfigModal
            width={currentFormInfo?.width || '816px'}
            open={openForm}
            onOpenChange={set}
            title={currentFormInfo?.service?.name || ''}
            deviceId={currentFormInfo?.service?.deviceId || deviceId}
            realTimeData={{
              ...merge({}, realTimeData, transformData),
            }}
            columns={currentFormInfo?.columns || []}
            showClickButton={false}
            colProps={{
              span: currentFormInfo?.service?.form?.span || 8,
            }}
            onSuccess={(data) => {
              onRefresh(currentFormInfo?.service, false);
              onSuccess?.(data);
            }}
            beforeSubmit={beforeSubmit}
          />
        </>
      )}
    </>
  );
});

export default Control;
