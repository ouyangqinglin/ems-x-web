/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-26 11:40:45
 * @LastEditTime: 2024-03-26 11:40:45
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\models\config copy.ts
 */
import React, { useReducer } from 'react';

export type ConfigType = {
  isVisible: boolean;
};

const usePageModel = () => {
  const initState: ConfigType = {
    isVisible: true,
  };

  const reducer = (config: ConfigType, action: { payload: ConfigType; type?: string }) => {
    if (action.payload) {
      return action.payload;
    } else {
      return config;
    }
  };

  const [data, dispatch] = useReducer(reducer, initState);

  return {
    data,
    dispatch,
  };
};

export default usePageModel;
