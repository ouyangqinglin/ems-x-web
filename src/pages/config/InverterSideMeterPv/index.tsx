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
import { baseInfoItems, inverterSidMetParamsItems } from './helper';
import Control from '@/components/Device/Control';
import { useDeviceData } from '@/hooks';


const InverterSideMeterPv: React.FC = () => {
  const { realTimeData } = useDeviceData({ isInterval: false });

  return (
    <>
      <div className="p24">
        <Card>
          <Control
            groupData={baseInfoItems}
            realTimeData={realTimeData}
            detailProps={{
              column: 3,
            }}
          />
        </Card>
        <Card className="my20">
          <Control groupData={inverterSidMetParamsItems} realTimeData={realTimeData} />
        </Card>
      </div>
    </>
  );
};

export default InverterSideMeterPv;
