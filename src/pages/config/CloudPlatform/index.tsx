/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-04-10 15:29:06
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\CloudPlatform\index.tsx
 */

import React, { useMemo, useState } from 'react';
import Card from '@/components/Card';
import {
  commInterfaceWiFiItems,
  commInterfaceLAN1Items,
  commInterfaceLAN2Items,
  commInterface4GItems,
  cloudApiSoftwareItems,
} from './helper';
import Control from '@/components/Device/Control';
import { useDeviceData } from '@/hooks';

const CloudPlatform: React.FC = () => {
  const { realTimeData, run } = useDeviceData({ isInterval: false });
  const [groupData, setGroupData] = useState([]);

  useMemo(() => {
    switch (realTimeData['50019']) {
      case '1':
        setGroupData(commInterfaceWiFiItems);
        break;
      case '2':
        setGroupData(commInterfaceLAN1Items);
        break;
      case '3':
        setGroupData(commInterfaceLAN2Items);
        break;
      case '4':
        setGroupData(commInterface4GItems);
        break;
    }
  }, [realTimeData['50019']]);

  return (
    <>
      <div className="p24">
        <Card>
          <Control
            groupData={groupData}
            realTimeData={realTimeData}
            detailProps={{ column: 3 }}
            onSuccess={() => run?.()}
          />
        </Card>
        {/* <Card className="my20">
          <Control groupData={yotaiComApiItems} realTimeData={realTimeData} />
        </Card> */}
        <Card className="my20">
          <Control groupData={cloudApiSoftwareItems} realTimeData={realTimeData} />
        </Card>
      </div>
    </>
  );
};

export default CloudPlatform;
