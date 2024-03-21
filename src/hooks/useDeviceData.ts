/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-20 11:47:05
 * @LastEditTime: 2024-03-21 11:30:46
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\hooks\useDeviceData.ts
 */

import { useModel, useRequest } from 'umi';
import useLocation from './useLocation';
import { getDeviceData } from '@/services/device';
import { useEffect, useState } from 'react';
import { arrayToMap, getPropsFromTree } from '@/utils';
import { RequestCode } from '@/utils/dictionary';

type UseDeviceDataType = {
  manual?: boolean;
  isInterval?: boolean;
  interval?: number;
};

const useDeviceData = (options?: UseDeviceDataType) => {
  const { manual, isInterval = true, interval } = options || {};

  const location = useLocation();
  const { initialState } = useModel('@@initialState');
  const { config } = useModel('config');
  const [realTimeData, setRealTimeData] = useState<
    Record<string, any> & {
      refreshTime?: string;
    }
  >({});

  const { run } = useRequest(getDeviceData, {
    manual: true,
    pollingInterval: isInterval ? (interval ? interval : config.refreshTime * 1000) : 0,
    formatResult(response) {
      const res = response || {};
      res.data = {
        code: res.code,
        ...res?.data,
      };
      if (res.code == RequestCode.Success) {
        setRealTimeData(res.data);
      }
      return res.data;
    },
  });

  const runRequest = (params?: any) => {
    const sourceIds = getPropsFromTree(
      initialState?.antMenus as any,
      'sourceId',
      'children',
      (item) => item.key == location.pathname,
    );
    if (sourceIds.length) {
      return run(sourceIds[0], params);
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
