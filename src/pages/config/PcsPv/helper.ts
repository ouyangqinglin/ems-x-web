/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-16 09:42:18
 * @LastEditTime: 2024-03-16 11:40:33
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\config\Pcs\helper.ts
 */

import { DeviceModelDescribeType } from '@/types/device';

export const baseInfoItems: any = [
  {
    id: 'a',
    name: '基本信息',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '基本信息',
        type: 'service',
        buttons: ['refresh'],
        children: [
          {
            id: '2610',
            name: '变流器SN',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2630',
            name: '变流器型号',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
          {
            id: '2620',
            name: '变流器厂商',
            type: 'property',
            buttons: ['refresh'],
            dataType: {
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];

export const pcsParamsItems: any = [
  {
    id: 'a',
    name: '变流器参数设置',
    type: 'group',
    children: [
      {
        id: 'a',
        name: '变流器参数设置',
        type: 'service',
        buttons: ['refresh', 'edit'],
        children: [
          {
            id: '11901',
            name: '安规代码',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                0: 'VDE4105',
                1: 'CQC',
                2: 'MEA',
                3: 'CEI021',
                4: 'PEA',
                5: 'G59_3',
                6: 'VDE0126',
                7: 'AS4777',
                8: 'G83_2',
                9: 'UTE',
                10: 'JET',
                11: 'America',
                12: 'EN50438_IR',
                13: 'IEC61727',
                14: 'IEE1547',
                15: 'G83_1',
                16: 'EN50438_SE',
                17: 'Default',
                18: 'Warehouse',
                19: 'Default2',
                20: 'SouthAfrica',
                21: 'NewZealand',
                22: 'Default_60',
                23: 'Australia_A',
                24: 'Australia_B',
                25: 'Australia_C',
                26: 'Poland',
                27: 'EN50549',
                28: 'Austria',
                29: 'Czech',
              },
              type: 'enum',
            },
          },
          {
            id: '11902',
            name: '并网点功率设置值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: 'kW',
              },
              type: 'string',
            },
          },
          {
            id: '11904',
            name: '电池类型设置值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                1: '铅酸电池',
                2: '磷酸铁锂电池',
              },
              type: 'enum',
            },
          },
          {
            id: '11905',
            name: '电池模块SOC上限保护值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: '%',
              },
              type: 'string',
            },
          },
          {
            id: '11906',
            name: '电池模块SOC离网下限保护值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: '%',
              },
              type: 'string',
            },
          },
          {
            id: '11907',
            name: '电池模块SOC并网下限保护值',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              specs: {
                unit: '%',
              },
              type: 'string',
            },
          },
          {
            id: '11900',
            name: '设备modbus地址',
            type: 'property',
            buttons: ['refresh', 'edit'],
            dataType: {
              type: 'string',
            },
          },
        ],
      },
    ],
  },
];
