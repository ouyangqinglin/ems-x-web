/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-18 14:34:17
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\PcsSess\index.tsx
 */

import React, { useMemo, useState } from 'react';
import Card from '@/components/Card';
import { commInterfaceWiFiItems, commInterfaceLAN1Items, commInterfaceLAN2Items, commInterface4GItems, cloudApiSoftwareItems, yotaiComApiItems } from './helper';
import Control from '@/components/Device/Control';
import RefreshData from '@/components/Device/RefreshData';
import { useDeviceData } from '@/hooks';

const CloudPlatformPv: React.FC = () => {
  const { realTimeData, run } = useDeviceData();
  const [groupData, setGroupData] = useState([]);

  useMemo(() => {
    switch (realTimeData["11600"]) {
      case "1":
        setGroupData(commInterfaceWiFiItems);
        break;
      case "2":
        setGroupData(commInterfaceLAN1Items);
        break;
      case "3":
        setGroupData(commInterfaceLAN2Items);
        break;
      case "4":
        setGroupData(commInterface4GItems)
        break;
    }
  }, [realTimeData["11600"]]);

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} />
      <div className="p24">
        <Card>
          <Control groupData={groupData} realTimeData={realTimeData} detailProps={{ column: 3 }} />
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

export default CloudPlatformPv;