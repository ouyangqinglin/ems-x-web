/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-04-17 15:11:54
 * @LastEditTime: 2024-04-17 17:42:58
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\system\MetadataConfig\index.tsx
 */

import React, { useCallback, useRef, useState } from 'react';
import YTProTable from '@/components/YTProTable';
import { columns } from './helper';
import { getMetadataPage } from '@/services/system';
import { ActionType } from '@ant-design/pro-components';
import PageTree from './PageTree';
import styles from './index.less';
import { useBoolean } from 'ahooks';
import Debug from './Debug';

const MetadataConfig: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [sourceId, setSourceId] = useState<number>();
  const [openDebug, { setFalse, setTrue }] = useBoolean(false);
  const [debugData, setDebugData] = useState<Record<string, any>>({});

  const requestPage = useCallback(
    (params) => {
      return getMetadataPage({ ...params, sourceId });
    },
    [sourceId],
  );

  const onSelect = useCallback((id) => {
    setSourceId(id);
    actionRef.current?.reset?.();
  }, []);

  const onEvent = useCallback((eventName, params) => {
    setDebugData(params);
    setTrue();
  }, []);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.tree}>
          <PageTree onSelect={onSelect} />
        </div>
        <YTProTable
          actionRef={actionRef}
          toolBarRender={() => []}
          columns={columns}
          request={requestPage}
          manualRequest
          resizable={true}
          onEvent={onEvent}
        />
        <Debug open={openDebug} onCancel={() => setFalse()} debugInfo={debugData} />
      </div>
    </>
  );
};

export default MetadataConfig;
