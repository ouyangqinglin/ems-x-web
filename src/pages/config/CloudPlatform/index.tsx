/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-18 14:34:17
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\PcsSess\index.tsx
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Card from '@/components/Card';
import { commInterfaceWiFiItems, commInterfaceLAN1Items, commInterfaceLAN2Items, commInterface4GItems, cloudApiSoftwareItems, yotaiComApiItems } from './helper';
import Control from '@/components/Device/Control';
import RefreshData from '@/components/Device/RefreshData';
import { useDeviceData } from '@/hooks';

const CloudPlatform: React.FC = () => {
  const { realTimeData, run } = useDeviceData();
  const [groupData, setGroupData] = useState([]);

  useMemo(() => {
    switch (realTimeData["50019"]) {
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
  }, [realTimeData["50019"]]);

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

export default CloudPlatform;


// {
//   "code": 200,
//   "data": {
//       "50019": "1",
//       "50020": "asdas1222",
//       "50036": "123456",
//       "50051": "1",
//       "50052": "192.168.3.16",
//       "50054": "4278583295",
//       "50056": "16777343",
//       "50058": "16845057",
//       "50062": "222",
//       "50063": "0",
//       "50066": "8869",
//       "50068": "admin",
//       "50084": "123456",
//       "50100": "123sss",
//       "50110": "MODWEL1",
//       "50128": "192.169.3.53",
//       "50143": "192.168.3.1",
//       "50209": "666",
//       "50229": "0",
//       "50230": "184789184",
//       "50232": "0",
//       "50234": "0",
//       "50236": "0",
//       "50238": "2",
//       "50239": "0.0.0.0",
//       "50241": "0",
//       "50243": "0",
//       "50245": "0"
//   },
//   "msg": "查询成功"
// }