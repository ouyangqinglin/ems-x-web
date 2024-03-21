/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-18 14:34:17
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\PcsSess\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import { Col, Row } from 'antd';
import Run from '@/components/Device/Run';
import { useModel, useRequest } from 'umi';
import { getDeviceData } from '@/services/device';
import {
  spontaneousSelfUseItems,
  peakShavingValleyFillingItems,
  backupModeItems,
  manualModeItems,
  elePriceItems,
} from './helper';
import Control from '@/components/Device/Control';

const EnergyManagement: React.FC = () => {
  const { config } = useModel('config');
  const { data: realTimeData, run } = useRequest(getDeviceData, {
    manual: true,
    pollingInterval: config.refreshTime * 1000,
  });

  return (
    <>
      <div className="p24">
        <Card>
          <Control groupData={spontaneousSelfUseItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control groupData={peakShavingValleyFillingItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control groupData={backupModeItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control groupData={manualModeItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control groupData={elePriceItems} realTimeData={realTimeData} />
        </Card>
      </div>
    </>
  );
};

export default EnergyManagement;
