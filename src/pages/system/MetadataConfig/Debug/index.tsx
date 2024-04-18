/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-04-18 09:34:56
 * @LastEditTime: 2024-04-18 14:38:27
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\system\MetadataConfig\Debug\index.tsx
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import DetailDialog from '@/components/DetailDialog';
import { DebugMode, baseInfoItems, debugAddressItems, debugDataItems } from './helper';
import { DebugDataType } from '../typing';
import {
  Button,
  Input,
  InputRef,
  Space,
  message,
  Timeline,
  Empty,
  Typography,
  Descriptions,
} from 'antd';
import { useRequest } from 'umi';
import { debugMetadata } from '@/services/system';
import Detail, { DetailItem } from '@/components/Detail';
import styles from './index.less';
import { useBoolean } from 'ahooks';
import Card from '@/components/Card';
import moment from 'moment';

type DebugType = {
  open?: boolean;
  onCancel?: () => void;
  debugInfo?: DebugDataType;
};

const Debug: React.FC<DebugType> = (props) => {
  const { open, onCancel, debugInfo } = props;

  const [debugData, setDebugData] = useState<Record<string, any>[]>([]);
  const containRef = useRef<HTMLElement>(null);
  const [error, { setFalse, setTrue }] = useBoolean(false);
  const [value, setValue] = useState<string>();
  const { run, loading } = useRequest(debugMetadata, {
    manual: true,
  });

  const onClick = useCallback(
    (mode: DebugMode) => {
      if (value || mode == DebugMode.Red) {
        setFalse();
        run({
          id: debugInfo?.pointId,
          mode,
          value,
        }).then((data) => {
          if (data) {
            message.success('操作成功');
            data.mode = mode;
            data.dateTime = moment().format('YYYY-MM-DD HH:mm:ss');
            setDebugData((prevData) => {
              return [...prevData, data];
            });
          }
        });
      } else {
        setTrue();
      }
    },
    [debugInfo, value],
  );

  const valueItems = useMemo(() => {
    const result: DetailItem[] = [
      {
        label: '值',
        field: 'wa',
        span: 3,
        showPlaceholder: false,
        labelStyle: { lineHeight: '32px' },
        format: () => {
          return (
            <>
              <Space>
                <Input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="请输入"
                  status={error ? 'error' : ''}
                />
                <Button type="primary" onClick={() => onClick(DebugMode.Red)} loading={loading}>
                  读
                </Button>
                <Button type="primary" onClick={() => onClick(DebugMode.Write)} loading={loading}>
                  写
                </Button>
              </Space>
            </>
          );
        },
      },
    ];
    return result;
  }, [onClick, loading, error, value]);

  const timeItems = useMemo(() => {
    const result: React.ReactNode[] = [];
    debugData?.forEach?.((item) => {
      result.push(
        <Timeline.Item
          dot={item.mode == DebugMode.Red ? '读操作' : '写操作'}
          color={item.mode == DebugMode.Red ? 'blue' : 'green'}
        >
          <div className="ml20 pt2 pb12">{item.dateTime}</div>
          <Card>
            <Detail
              className={styles.detail}
              title={`request：${item.request}`}
              items={item.mode == DebugMode.Red ? debugAddressItems : debugDataItems}
              data={item.requestBody}
              layout="vertical"
              column={8}
              bordered
              size="small"
            />
            <Detail
              className={`mt12 ${styles.detail}`}
              title={`response：${item.response}`}
              items={debugDataItems}
              data={item.responseBody}
              layout="vertical"
              column={8}
              bordered
              size="small"
            />
          </Card>
        </Timeline.Item>,
      );
    });
    return result;
  }, [debugData]);

  useEffect(() => {
    if (open) {
      setDebugData([]);
      setValue('');
    }
  }, [open]);

  useEffect(() => {
    containRef?.current?.scrollTo?.(0, containRef?.current?.scrollHeight);
  }, [debugData]);

  return (
    <>
      <DetailDialog
        title="调试"
        width={'80%'}
        open={open}
        onCancel={onCancel}
        centered
        detailProps={{
          items: baseInfoItems,
          data: debugInfo,
          column: 3,
        }}
        append={
          <>
            <Detail className="mt12" items={valueItems} data={{}} />
            <div ref={containRef} className={styles.timeline}>
              {timeItems.length ? (
                <Timeline>{timeItems}</Timeline>
              ) : (
                <div className="tx-center pt20">
                  <Empty />
                </div>
              )}
            </div>
          </>
        }
      />
    </>
  );
};

export default Debug;
