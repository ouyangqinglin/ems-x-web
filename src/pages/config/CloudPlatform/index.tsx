/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-18 14:34:17
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\PcsSess\index.tsx
 */

import React, { useEffect, useMemo, useState } from 'react';
import Card from '@/components/Card';
import { commInterfaceWiFiItems, commInterfaceLAN1Items, commInterfaceLAN2Items, cloudApiSoftwareItems, yotaiComApiItems } from './helper';
import Control from '@/components/Device/Control';
import RefreshData from '@/components/Device/RefreshData';
import { useDeviceData } from '@/hooks';

const CloudPlatform: React.FC = () => {
  const { realTimeData, run } = useDeviceData();
  const [groupData, setGroupData] = useState([]);

  useMemo(() => {
    if (realTimeData?.id === "50019") {
      // 0: "WiFi", 默认
      // 1: "LAN1",
      // 2: "LAN2",
      // 3: "4G"
      switch (realTimeData?.value) {
        case "LAN1":
          setGroupData(commInterfaceLAN1Items);
          break; 
        case "LAN2":
          setGroupData(commInterfaceLAN2Items);
          break; 
        case "4G":
          setGroupData([])
          break;
      }
    }
  }, [realTimeData?.id]);

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} />
      <div className="p24">
        <Card>
          <Control groupData={groupData} realTimeData={realTimeData} detailProps={{ column: 3 }} />
        </Card>
        <Card className="my20">
          <Control groupData={yotaiComApiItems} realTimeData={realTimeData} />
        </Card>
        <Card className="my20">
          <Control groupData={cloudApiSoftwareItems} realTimeData={realTimeData} />
        </Card>
      </div>
    </>
  );
};

export default CloudPlatform;
