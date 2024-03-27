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
  spontaneousSelfUseItems,
  peakShavingValleyFillingItems,
  manualModeItems,
  elePriceItems,
} from './helper';
import Control from '@/components/Device/Control';
import { useDeviceData } from '@/hooks';

const EnergyManagementPv: React.FC = () => {
  const { realTimeData } = useDeviceData();

  return (
    <>
      <div className="p24">
      <Card className="my20">
          <Control groupData={spontaneousSelfUseItems} realTimeData={realTimeData} detailProps={{
            column: 4,
          }} />
        </Card>
        <Card className="my20">
          <Control groupData={peakShavingValleyFillingItems} realTimeData={realTimeData} detailProps={{
            column: 4,
          }} />
        </Card>
        <Card className="my20">
          <Control groupData={manualModeItems} realTimeData={realTimeData} detailProps={{
            column: 4,
          }} />
        </Card>
        <Card className="my20">
          <Control groupData={elePriceItems} realTimeData={realTimeData} detailProps={{
            column: 3,
          }} />
        </Card>
      </div>
    </>
  );
};

export default EnergyManagementPv;
