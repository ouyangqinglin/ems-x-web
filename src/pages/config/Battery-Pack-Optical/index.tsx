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
import { baseInfoItems, batteryParamsItems, batteryPackEnableItems } from './helper';
import Control from '@/components/Device/Control';
import { useDeviceData } from '@/hooks';

const Pcs: React.FC = () => {
  const { realTimeData } = useDeviceData({ isInterval: false });

  return (
    <>
      <div className="p24">
        <Card>
          <Control groupData={baseInfoItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control groupData={batteryPackEnableItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control
            groupData={batteryParamsItems}
            realTimeData={realTimeData}
            detailProps={{
              column: 2,
            }}
          />
        </Card>
      </div>
    </>
  );
};

export default Pcs;
