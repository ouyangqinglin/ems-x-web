/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-04-15 11:33:50
 * @LastEditTime: 2024-04-15 11:34:01
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\models\config copy.ts
 */
import React, { useReducer } from 'react';

export type ConfigType = {
  status: number;
};

const useDeviceModel = () => {
  const initState: ConfigType = {
    status: 0,
  };

  const reducer = (deviceData: ConfigType, action: { payload: ConfigType; type?: string }) => {
    if (action.payload) {
      return action.payload;
    } else {
      return deviceData;
    }
  };

  const [deviceData, dispatch] = useReducer(reducer, initState);

  return {
    deviceData,
    dispatch,
  };
};

export default useDeviceModel;
