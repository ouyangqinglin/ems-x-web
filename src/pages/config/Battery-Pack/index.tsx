/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-04-11 13:40:58
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Battery-Pack\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import { baseInfoItems, batteryParamsItems } from './helper';
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
            groupData={batteryParamsItems}
            realTimeData={realTimeData}
            detailProps={{
              column: 2,
              labelStyle: {
                width: '280px',
              },
            }}
          />
        </Card>
      </div>
    </>
  );
};

export default Pcs;
