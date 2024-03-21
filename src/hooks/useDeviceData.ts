/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-20 11:47:05
 * @LastEditTime: 2024-03-20 15:16:32
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\hooks\useDeviceData.ts
 */

import { useModel, useRequest } from 'umi';
import useLocation from './useLocation';
import { getDeviceData } from '@/services/device';
import { useEffect } from 'react';
import { arrayToMap, getPropsFromTree } from '@/utils';

type UseDeviceDataType = {
  manual?: boolean;
  isInterval?: boolean;
};

const useDeviceData = (options?: UseDeviceDataType) => {
  const { manual, isInterval = true } = options || {};

  const location = useLocation();
  const { initialState } = useModel('@@initialState');
  const { config } = useModel('config');

  const { data: realTimeData, run } = useRequest(getDeviceData, {
    manual: true,
    pollingInterval: isInterval ? config.refreshTime * 1000 : 0,
    formatResult(res) {
      const data = res?.data;
      res.data = {
        refreshTime: data.refreshTime,
        ...arrayToMap(data as any, 'id', 'value'),
      };
      return res.data;
    },
  });

  const runRequest = () => {
    const sourceIds = getPropsFromTree(
      initialState?.antMenus as any,
      'sourceId',
      'children',
      (item) => item.key == location.pathname,
    );
    if (sourceIds.length) {
      return run(sourceIds[0]);
    }
  };

  useEffect(() => {
    if (!manual) {
      runRequest();
    }
  }, [manual]);

  return {
    realTimeData,
    run: runRequest,
  };
};

export default useDeviceData;
