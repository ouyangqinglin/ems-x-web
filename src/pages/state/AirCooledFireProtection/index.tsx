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
import Run from '@/components/Device/Run';
import { baseInfoItems, statusItems } from './helper';
import { useDeviceData } from '@/hooks';
import RefreshData from '@/components/Device/RefreshData';
import SystemAlarm from '@/components/SystemAlarm';

const AirCooledFireProtection: React.FC = () => {
  const { realTimeData, run } = useDeviceData();

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} />
      <div className="p24">
        <Card className="h-full">
          <Run
            realTimeData={realTimeData}
            groupData={baseInfoItems}
            detailProps={{
              column: 5,
            }}
          />
        </Card>
        <Card className="h-full mt20">
          <Run
            realTimeData={realTimeData}
            groupData={statusItems}
            detailProps={{
              column: 5,
            }}
          />
        </Card>
        <div className="mt16">
          <SystemAlarm modelType="fireFight" deviceType={1} realTimeData={realTimeData} />
        </div>
      </div>
    </>
  );
};

export default AirCooledFireProtection;
