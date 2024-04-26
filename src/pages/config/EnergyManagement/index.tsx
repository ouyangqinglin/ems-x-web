/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-04-26 14:36:53
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\EnergyManagement\index.tsx
 */

import React, { useCallback } from 'react';
import Card from '@/components/Card';
import {
  peakShavingValleyFillingItems,
  manualModeItems,
  elePriceItems,
  backupModeItems,
  timeRangeFieldConfig,
} from './helper';
import Control from '@/components/Device/Control';
import { useDeviceData } from '@/hooks';
import { isEmpty } from '@/utils';
import { isEmpty as lodashIsEmpty } from 'lodash';

type ChargeModeType = {
  time?: string;
  mode?: string;
  power?: string;
};

const formatResult = (data: any) => {
  const chargeMode: ChargeModeType[] = Array.from({ length: 10 });
  timeRangeFieldConfig.forEach((item, index) => {
    chargeMode[index] = {};
    if (data[item.mode] != 10) {
      if (data[item.start] && data[item.end]) {
        chargeMode[index].time = `${data[item.start]}-${data[item.end]}`;
      }
      if (!isEmpty(data[item.mode])) {
        chargeMode[index].mode = data[item.mode];
      }
      if (!isEmpty(data[item.power])) {
        chargeMode[index].power = data[item.power];
      }
    }
  });
  for (let i = 9; i >= 0; i--) {
    if (lodashIsEmpty(chargeMode[i])) {
      chargeMode.splice(i, 1);
    } else {
      break;
    }
  }
  data.chargeMode = chargeMode;
};

const EnergyManagement: React.FC = () => {
  const { realTimeData, run } = useDeviceData({
    isInterval: false,
    formatResult,
  });

  const beforeSubmit = useCallback((formData) => {
    (formData?.chargeMode as ChargeModeType[])?.forEach?.((item, index) => {
      if (item.time) {
        formData[timeRangeFieldConfig[index].start] = item.time.split('-')[0];
        formData[timeRangeFieldConfig[index].end] = item.time.split('-')[1];
      }
      if (item.mode) {
        formData[timeRangeFieldConfig[index].mode] = item.mode;
      }
      if (item.power) {
        formData[timeRangeFieldConfig[index].power] = item.power;
      }
    });
    for (let i = formData?.chargeMode?.length || 0; i < 10; i++) {
      formData[timeRangeFieldConfig[i].mode] = '10';
    }
  }, []);

  const beforeRefresh = useCallback((params) => {
    if (params?.data?.includes?.('chargeMode')) {
      const chargeModeIds: string[] = [];
      timeRangeFieldConfig.forEach((item) => {
        chargeModeIds.push(item.start, item.end, item.mode, item.power);
      });
      params.data.push(...chargeModeIds);
    }
  }, []);

  return (
    <>
      <div className="p24">
        <Card className="my20">
          <Control
            groupData={peakShavingValleyFillingItems}
            realTimeData={realTimeData}
            detailProps={{
              column: 3,
            }}
            beforeSubmit={beforeSubmit}
            beforeRefresh={beforeRefresh}
            onSuccess={() => run?.()}
          />
        </Card>
        <Card className="my20">
          <Control
            groupData={manualModeItems}
            realTimeData={realTimeData}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
        <Card className="my20">
          <Control
            groupData={backupModeItems}
            realTimeData={realTimeData}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
        {/* <Card className="my20">
          <Control groupData={elePriceItems} realTimeData={realTimeData} detailProps={{
            column: 3,
          }} />
        </Card> */}
      </div>
    </>
  );
};

export default EnergyManagement;
