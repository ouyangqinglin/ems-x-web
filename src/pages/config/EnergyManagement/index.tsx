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
import {
  peakShavingValleyFillingItems,
  manualModeItems,
  elePriceItems,
} from './helper';
import Control from '@/components/Device/Control';
import RefreshData from '@/components/Device/RefreshData';
import { useDeviceData } from '@/hooks';

const EnergyManagement: React.FC = () => {
  const { realTimeData, run } = useDeviceData();

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} />
      <div className="p24">
        <Card className="my20">
          <Control groupData={peakShavingValleyFillingItems} realTimeData={realTimeData} />
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
