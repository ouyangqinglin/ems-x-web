/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-16 11:35:13
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Pcs\index.tsx
 */

import React, { useCallback } from 'react';
import Card from '@/components/Card';
import {
  baseInfoItems,
  systemParamsItems,
  otherParamsItems,
  timeSetItems,
  systemEnableItems,
} from './helper';
import Control from '@/components/Device/Control';
import { useDeviceData } from '@/hooks';
import { useModel } from 'umi';
import { isEmpty } from '@/utils';

const Pcs: React.FC = () => {
  const { config, dispatch } = useModel('config');
  const { realTimeData } = useDeviceData({ isInterval: false });

  const beforeSubmit = useCallback((data) => {
    if (!isEmpty(data.dataRefreshTime)) {
      dispatch({ payload: { refreshTime: data.dataRefreshTime } });
    }
  }, []);

  return (
    <>
      <div className="p24">
        <Card>
          <Control groupData={baseInfoItems} realTimeData={realTimeData} />
        </Card>
        <Card>
          <Control groupData={systemEnableItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control groupData={systemParamsItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control
            groupData={otherParamsItems}
            realTimeData={{ ...realTimeData, dataRefreshTime: config.refreshTime }}
            beforeSubmit={beforeSubmit}
          />
        </Card>
        <Card className="my20">
          <Control groupData={timeSetItems} realTimeData={realTimeData} />
        </Card>
      </div>
    </>
  );
};

export default Pcs;
