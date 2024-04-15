/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-04-15 11:09:02
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\state\LiquidCooler\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import Run from '@/components/Device/Run';
import { baseInfoItems, statusItems } from './helper';
import RefreshData from '@/components/Device/RefreshData';
import useDeviceData from '@/hooks/useDeviceData';
import SystemAlarm from '@/components/SystemAlarm';

const LiquidCooler: React.FC = () => {
  const { realTimeData, run, loading } = useDeviceData();

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} loading={loading} />
      <div className="p24">
        <Card className="h-full">
          <Run
            realTimeData={{
              ...realTimeData,
              s1: 2400,
              s2: 5000,
              s3: 2350,
              s4: 2000,
            }}
            groupData={baseInfoItems}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
        <Card className="h-full mt20">
          <Run
            realTimeData={realTimeData}
            groupData={statusItems}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
        <div className="mt16">
          <SystemAlarm modelType="wetCooler" deviceType={2} realTimeData={realTimeData} />
        </div>
      </div>
    </>
  );
};

export default LiquidCooler;
