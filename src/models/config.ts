/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 17:19:48
 * @LastEditTime: 2024-05-28 15:49:10
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\models\config.ts
 */
import { isEmpty } from '@/utils';
import React, { useReducer } from 'react';

export type ConfigType = {
  refreshTime: number;
};

const useStationModel = () => {
  let refreshTime = parseInt(localStorage.getItem('refreshTime') || '5');
  if (isNaN(refreshTime)) {
    refreshTime = 5;
  }

  const initState: ConfigType = {
    refreshTime,
  };

  const reducer = (config: ConfigType, action: { payload: ConfigType; type?: string }) => {
    if (action.payload) {
      if (!isEmpty(action.payload.refreshTime)) {
        localStorage.setItem('refreshTime', action.payload.refreshTime + '');
      }
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
