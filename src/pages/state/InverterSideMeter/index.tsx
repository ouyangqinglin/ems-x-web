/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-16 11:29:44
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\pcs\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import { Col, Row } from 'antd';
import Run from '@/components/Device/Run';
import { useModel, useRequest } from 'umi';
import { getDeviceData } from '@/services/device';
import { baseInfoItems, statusItems, eleInfoItems } from './helper';

const InverterSideMeter: React.FC = () => {
  const { config } = useModel('config');
  const { data: realTimeData, run } = useRequest(getDeviceData, {
    manual: true,
    pollingInterval: config.refreshTime * 1000,
  });

  return (
    <>
      <div className="p24">
        <Card className="h-full">
          <Run
            realTimeData={realTimeData}
            groupData={baseInfoItems}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
        <Card className="h-full">
          <Run
            realTimeData={realTimeData}
            groupData={statusItems}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
        <Card>
          <Run realTimeData={realTimeData}
            groupData={eleInfoItems}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
      </div>
    </>
  );
};

export default InverterSideMeter;
