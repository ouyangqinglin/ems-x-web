/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-20 11:47:05
 * @LastEditTime: 2024-03-26 11:46:03
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\hooks\useDeviceData.ts
 */

import { useModel, useRequest } from 'umi';
import { getDeviceData } from '@/services/device';
import { useCallback, useEffect, useState } from 'react';
import { RequestCode } from '@/utils/dictionary';
import useSourceId from './useSourceId';

type UseDeviceDataType = {
  manual?: boolean;
  isInterval?: boolean;
  interval?: number;
};

const useDeviceData = (options?: UseDeviceDataType) => {
  const { manual, isInterval = true, interval } = options || {};

  const { data: page } = useModel('page');
  const { sourceId } = useSourceId();
  const { config } = useModel('config');
  const [realTimeData, setRealTimeData] = useState<
    Record<string, any> & {
      refreshTime?: string;
    }
  >({});

  const { run } = useRequest(getDeviceData, {
    manual: true,
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

  const runRequest = useCallback(
    (params?: any) => {
      if (sourceId) {
        return run(sourceId, params);
      }
    },
    [sourceId],
  );

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (!manual && sourceId && page?.isVisible) {
      runRequest();
      if (isInterval && config.refreshTime) {
        timer = setInterval(() => {
          runRequest();
        }, interval || config.refreshTime * 1000);
      }
    }
    return () => {
      clearInterval(timer);
    };
  }, [runRequest, config.refreshTime, page?.isVisible]);

  return {
    realTimeData,
    run: runRequest,
  };
};

export default useDeviceData;
