/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-20 11:47:05
 * @LastEditTime: 2024-03-21 15:56:44
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\hooks\useDeviceData.ts
 */

import { useModel } from 'umi';
import { getDeviceData } from '@/services/device';
import { useEffect, useState, useCallback } from 'react';
import { RequestCode } from '@/utils/dictionary';
import useSourceId from './useSourceId';

type UseDeviceDataType = {
  manual?: boolean;
  isInterval?: boolean;
  interval?: number;
};

const useDeviceData = (options?: UseDeviceDataType) => {
  const { manual, isInterval = true, interval } = options || {};

  const { sourceId } = useSourceId();
  const { config } = useModel('config');

  useState;
  const [timer, setTimer] = useState<any>(null);
  const [realTimeData, setRealTimeData] = useState<
    Record<string, any> & {
      refreshTime?: string;
    }
  >({});
  const requestDeviceData = (id: string, params: any) => {
    getDeviceData(id, params).then((res) => {
      if (res.code == RequestCode.Success) {
        setRealTimeData(res.data);
      }
    });
  };

  const run = useCallback(
    (id, params) => {
      // if (timer)  clearInterval(timer)
      if (isInterval) {
        return setInterval(() => {
          requestDeviceData(id, params);
        }, interval || config.refreshTime * 1000);
      } else {
        return requestDeviceData(id, params);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [interval, isInterval, config.refreshTime],
  );

  const runRequest = (params?: any) => {
    if (sourceId) {
      return run(sourceId, params);
    }
  };

  useEffect(() => {
    if (!manual) {
      runRequest();
    }
  }, [manual, sourceId]);

  return {
    realTimeData,
    run: runRequest,
  };
};

export default useDeviceData;
