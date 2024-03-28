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
import { baseInfoItems, statusItems, eleInfoItems } from './helper';
import { useDeviceData } from '@/hooks';
import RefreshData from '@/components/Device/RefreshData';

const InverterSideMeter: React.FC = () => {
  const { realTimeData, run, loading } = useDeviceData();

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} loading={loading} />
      <div className="p24">
        <Card className="h-full">
          <Run
            realTimeData={realTimeData}
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
        <Card className="h-full mt20">
          <Run
            realTimeData={realTimeData}
            groupData={eleInfoItems}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
      </div>
    </>
  );
};

export default InverterSideMeter;
