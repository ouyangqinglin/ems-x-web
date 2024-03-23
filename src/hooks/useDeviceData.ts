/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-20 11:47:05
 * @LastEditTime: 2024-03-21 18:04:43
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

  const { sourceId } = useSourceId();
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

  const runRequest = useCallback(
    (params?: any) => {
      if (sourceId) {
        return run(sourceId, params);
      }
    },
    [sourceId],
  );

  useEffect(() => {
    // location.reload()
  }, [config.refreshTime]);

  useEffect(() => {
    if (!manual) {
      runRequest();
    }
  }, [manual, runRequest]);

  return {
    realTimeData,
    run: runRequest,
  };
};

export default useDeviceData;
