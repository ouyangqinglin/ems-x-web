/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-04-17 15:11:54
 * @LastEditTime: 2024-04-17 15:11:54
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\system\MetadataConfig\index.tsx
 */

import React, { useCallback, useRef, useState } from 'react';
import YTProTable from '@/components/YTProTable';
import { columns } from './helper';
import { getMetadataPage } from '@/services/system';
import { ActionType } from '@ant-design/pro-components';

const MetadataConfig: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [sourceId, setSourceId] = useState<number>();

  const requestPage = useCallback(
    (params) => {
      return getMetadataPage({ ...params, sourceId });
    },
    [sourceId],
  );

  return (
    <>
      <div>
        <YTProTable
          actionRef={actionRef}
          columns={columns}
          toolBarRender={() => [<></>]}
          request={requestPage}
          manualRequest
          resizable={true}
        />
      </div>
    </>
  );
};

export default MetadataConfig;
