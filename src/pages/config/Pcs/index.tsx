/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-20 14:50:55
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Pcs\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';
import { baseInfoItems, pcsParamsItems } from './helper';
import Control from '@/components/Device/Control';
import { useDeviceData } from '@/hooks';

const Pcs: React.FC = () => {
  const { realTimeData } = useDeviceData({ isInterval: false });
  return (
    <>
      <div className="p24">
        <Card>
          <Control
            groupData={baseInfoItems}
            realTimeData={realTimeData}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
        <Card className="my20">
          <Control groupData={pcsParamsItems} realTimeData={realTimeData} />
        </Card>
      </div>
    </>
  );
};

export default Pcs;
