/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-04-18 09:34:56
 * @LastEditTime: 2024-04-18 10:31:30
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\system\MetadataConfig\Debug\index.tsx
 */

import React, { useCallback, useMemo, useRef } from 'react';
import DetailDialog from '@/components/DetailDialog';
import { DebugMode, baseInfoItems } from './helper';
import { DebugDataType } from '../typing';
import { Button, Input, InputRef, Space } from 'antd';
import { useRequest } from 'umi';
import { debugMetadata } from '@/services/system';

type DebugType = {
  open?: boolean;
  onCancel?: () => void;
  debugInfo?: DebugDataType;
};

const Debug: React.FC<DebugType> = (props) => {
  const { open, onCancel, debugInfo } = props;

  const inputRef = useRef<InputRef>(null);
  const { run, data: debugData } = useRequest(debugMetadata, {
    manual: true,
  });

  const onRead = useCallback(() => {
    const value = inputRef.current?.input?.value;
    run({
      id: debugInfo?.pointId,
      mode: DebugMode.Red,
    });
  }, [debugInfo]);

  const detailItems = useMemo(() => {
    const result = [...baseInfoItems];
    result.push({
      label: '值',
      field: 'wa',
      span: 3,
      showPlaceholder: false,
      format: () => {
        return (
          <>
            <Space>
              <Input ref={inputRef} />
              <Button onClick={onRead}>读</Button>
              <Button>写</Button>
            </Space>
          </>
        );
      },
    });
    return result;
  }, []);

  return (
    <>
      <DetailDialog
        width={'80%'}
        open={open}
        onCancel={onCancel}
        detailProps={{
          items: detailItems,
          data: debugInfo,
          column: 3,
        }}
        append={<></>}
      />
    </>
  );
};

export default Debug;
