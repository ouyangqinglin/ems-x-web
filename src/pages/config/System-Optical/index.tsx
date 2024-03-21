/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-16 11:35:13
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Pcs\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import { useModel, useRequest } from 'umi';
import { getDeviceData } from '@/services/device';
import {
  baseInfoItems,
  systemParamsItems,
  otherParamsItems,
  timeSetItems,
  systemEnableItems,
} from './helper';
import Control from '@/components/Device/Control';

const Pcs: React.FC = () => {
  const { config } = useModel('config');
  const { data: realTimeData, run } = useRequest(getDeviceData, {
    manual: true,
    pollingInterval: config.refreshTime * 1000,
  });

  return (
    <>
      <div className="p24">
        <Card>
          <Control groupData={baseInfoItems} realTimeData={realTimeData} />
        </Card>
        <Card>
          <Control groupData={systemEnableItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control groupData={systemParamsItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control groupData={otherParamsItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control groupData={timeSetItems} realTimeData={realTimeData} />
        </Card>
      </div>
    </>
  );
};

export default Pcs;
