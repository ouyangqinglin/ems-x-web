/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-06-03 11:24:19
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\System-Optical\index.tsx
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
import { message } from 'antd';
import moment from 'moment';

const Pcs: React.FC = () => {
  const { config, dispatch } = useModel('config');
  const { realTimeData } = useDeviceData({ isInterval: false });

  const beforeSubmit = useCallback((data) => {
    if (!isEmpty(data.dataRefreshTime)) {
      dispatch({ payload: { refreshTime: data.dataRefreshTime } });
      message.success('保存成功');
      return true;
    } else if (data[11252]) {
      data[11252] = moment(data[11252]).format('YYYY-MM-DD HH:mm:ss');
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
