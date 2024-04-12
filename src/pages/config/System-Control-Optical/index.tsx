/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-04-12 15:43:11
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\System-Control-Optical\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import { baseInfoItems, batteryModeItems } from './helper';
import Control from '@/components/Device/Control';
import { useDeviceData } from '@/hooks';

const Pcs: React.FC = () => {
  const { realTimeData, run } = useDeviceData({ isInterval: false });

  return (
    <>
      <div className="p24">
        <Card>
          <Control
            groupData={baseInfoItems}
            realTimeData={realTimeData}
            onSuccess={() => run?.()}
          />
        </Card>
        <Card className="my20">
          <Control
            groupData={batteryModeItems}
            realTimeData={realTimeData}
            onSuccess={() => run?.()}
          />
        </Card>
      </div>
    </>
  );
};

export default Pcs;
