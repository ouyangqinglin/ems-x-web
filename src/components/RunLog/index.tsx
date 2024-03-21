import React from 'react';
import { useState } from 'react';

import YTProTable from '@/components/YTProTable';
import { columns } from './config';
import type { RunLogDataType } from './config';
import { ExportOutlined } from '@ant-design/icons';
import { Button, Modal, Card } from 'antd';
import { formatMessage } from '@/utils';
import { exportTemp } from './service';
import Detail from '@/components/Detail';
// import { getytOrder } from '@/services/equipment';

//mock
const mockDataSource = [
  {
    time: '2023-12-23 17:16',
    fileName: '2023-10-23.log',
  },
  {
    time: '2023-12-24 17:16:20',
    fileName: '2023-10-23.log',
  },
];

const RunLog: React.FC = () => {
  const [selection, setSelection] = useState([]);
  // const handleRequest = (params: any) => {
  //   return getytOrder({
  //     ...params,
  //   });
  // };
  return (
    <Card>
      <Detail.Label title="运行日志" className="mt16" />
      <YTProTable<RunLogDataType>
        columns={columns}
        // request={handleRequest}
        scroll={{ y: 'auto' }}
        rowKey={(record) => `${record.time}-${record.fileName}`}
        dataSource={mockDataSource}
        rowSelection={{
          type: 'checkbox', // 设置选择类型为单选
          onChange: (_, selectedRows: any) => {
            setSelection(selectedRows);
          },
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="add"
            onClick={() => {
              Modal.confirm({
                title: formatMessage({ id: 'common.export', defaultMessage: '导出' }),
                content: formatMessage({
                  id: 'common',
                  defaultMessage: '确定要导出日志吗？',
                }),
                okText: formatMessage({ id: 'common.confirm', defaultMessage: '确认' }),
                cancelText: formatMessage({ id: 'common.cancel', defaultMessage: '取消' }),
                onOk: () => {
                  exportTemp();
                },
              });
            }}
          >
            <ExportOutlined />
            {formatMessage({ id: 'common', defaultMessage: '导出日志' })}
          </Button>,
        ]}
      />
    </Card>
  );
};
export default RunLog;
