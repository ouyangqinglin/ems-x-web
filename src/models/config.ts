/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 17:19:48
 * @LastEditTime: 2024-03-15 17:19:59
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\models\area copy.ts
 */
import React, { useReducer } from 'react';

export type ConfigType = {
  refreshTime: number;
};

const useStationModel = () => {
  const initState: ConfigType = {
    refreshTime: 5,
  };

  const reducer = (config: ConfigType, action: { payload: ConfigType; type?: string }) => {
    if (action.payload) {
      return action.payload;
    } else {
      return config;
    }
  };

  const [config, dispatch] = useReducer(reducer, initState);

  return {
    config,
    dispatch,
  };
};

export default useStationModel;
