/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:40:51
 * @LastEditTime: 2024-05-22 09:48:36
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\EnergyManagementPv\index.tsx
 */

import React, { useCallback } from 'react';
import Card from '@/components/Card';
import {
  spontaneousSelfUseItems,
  peakShavingValleyFillingItems,
  manualModeItems,
  elePriceItems,
  timeRangeFieldConfig,
  priceTimeRangeFieldConfig,
  ConfigType,
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

const formatResult = (data: any, config: ConfigType[], field: string) => {
  const chargeMode: ChargeModeType[] = Array.from({ length: 10 });
  config.forEach((item, index) => {
    chargeMode[index] = {};
    if (isEmpty(data[item.mode]) || data[item.mode] != 0) {
      if (data[item.start] && data[item.end]) {
        chargeMode[index].time = `${data[item.start]}-${data[item.end]}`;
      }
      if (!isEmpty(data[item.mode])) {
        chargeMode[index].mode = data[item.mode];
      }
      if (item.power && !isEmpty(data[item.power])) {
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
  data[field] = chargeMode;
};

const EnergyManagementPv: React.FC = () => {
  const { realTimeData, run } = useDeviceData({
    isInterval: false,
    formatResult: (data) => {
      formatResult(data, timeRangeFieldConfig, 'chargeMode');
      formatResult(data, priceTimeRangeFieldConfig, 'priceMode');
    },
  });

  const beforeSubmit = useCallback((formData, config, field) => {
    (formData?.[field] as ChargeModeType[])?.forEach?.((item, index) => {
      if (item.time) {
        formData[config[index].start] = item.time.split('-')[0];
        formData[config[index].end] = item.time.split('-')[1];
      }
      if (item.mode) {
        formData[config[index].mode] = item.mode;
      }
      if (item.power) {
        formData[config[index].power] = item.power;
      }
    });
    for (let i = formData?.[field]?.length || 0; i < 10; i++) {
      formData[config[i].mode] = '0';
    }
  }, []);

  const beforeRefresh = useCallback((params, config: ConfigType[], field) => {
    if (params?.data?.includes?.(field)) {
      const chargeModeIds: string[] = [];
      config.forEach((item) => {
        chargeModeIds.push(item.start, item.end, item.mode);
        if (item.power) {
          chargeModeIds.push(item.power);
        }
      });
      params.data.push(...chargeModeIds);
    }
  }, []);

  return (
    <>
      <div className="p24">
        <Card className="my20">
          <Control
            groupData={spontaneousSelfUseItems}
            realTimeData={realTimeData}
            detailProps={{
              column: 4,
            }}
          />
        </Card>
        <Card className="my20">
          <Control
            groupData={peakShavingValleyFillingItems}
            realTimeData={realTimeData}
            detailProps={{
              column: 3,
            }}
            beforeSubmit={(data) => beforeSubmit(data, timeRangeFieldConfig, 'chargeMode')}
            beforeRefresh={(data) => beforeRefresh(data, timeRangeFieldConfig, 'chargeMode')}
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
            groupData={elePriceItems}
            realTimeData={realTimeData}
            detailProps={{
              column: 3,
            }}
            beforeSubmit={(data) => beforeSubmit(data, priceTimeRangeFieldConfig, 'priceMode')}
            beforeRefresh={(data) => beforeRefresh(data, priceTimeRangeFieldConfig, 'priceMode')}
            onSuccess={() => run?.()}
          />
        </Card>
      </div>
    </>
  );
};

export default EnergyManagementPv;
