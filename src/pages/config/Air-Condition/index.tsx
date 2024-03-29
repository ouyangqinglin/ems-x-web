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
import { baseInfoItems, runValueItems, runTimeSetItems } from './helper';
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
          <Control
            groupData={runValueItems}
            realTimeData={realTimeData}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
        <Card className="my20">
          <Control
            groupData={runTimeSetItems}
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
