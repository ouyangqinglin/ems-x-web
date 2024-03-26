/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-03-16 11:29:44
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\help\Help\index.tsx
 */

import React from 'react';
import { useDeviceData } from '@/hooks';
import RefreshData from '@/components/Device/RefreshData';

const Help: React.FC = () => {
  const { realTimeData, run } = useDeviceData();

  return (
    <>
      <RefreshData run={run} time={realTimeData?.refreshTime} />
      <div className="p24"></div>
    </>
  );
};

export default Help;
