/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-04-10 15:49:22
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\System\index.tsx
 */

import React, { useCallback } from 'react';
import Card from '@/components/Card';
import { baseInfoItems, systemParamsItems, otherParamsItems, timeSetItems } from './helper';
import Control from '@/components/Device/Control';
import { useDeviceData } from '@/hooks';
import moment from 'moment';

const Pcs: React.FC = () => {
  const { realTimeData } = useDeviceData({ isInterval: false });

  const beforeSubmit = useCallback((data) => {
    data[50000] = moment(data[50000]).format('YYYY-MM-DD HH:mm:ss');
  }, []);

  return (
    <>
      <div className="p24">
        <Card>
          <Control groupData={baseInfoItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control groupData={systemParamsItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control groupData={otherParamsItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control
            groupData={timeSetItems}
            realTimeData={realTimeData}
            beforeSubmit={beforeSubmit}
          />
        </Card>
      </div>
    </>
  );
};

export default Pcs;
