import { Request, Response } from 'express';

export default {
  'GET /api/screen/weather/1': {
    msg: '操作成功',
    code: 200,
    data: {
      weather: '晴',
    },
  },
  'GET /api/screen/pvinverter/dcin': {
    msg: '操作成功',
    code: 200,
    rows: [
      {
        id: 1,
        loop: 'PV1',
        voltage: 40,
        current: 6,
      },
    ],
  },
  'GET /api/product/models': {
    msg: '操作成功',
    code: 200,
    data: [
      { label: '型号1', value: 1 },
      { label: '型号2', value: 2 },
    ],
  },
  'GET /api/product/types': {
    msg: '操作成功',
    code: 200,
    data: [
      { label: '类型1', value: 1 },
      { label: '类型2', value: 2 },
    ],
  },
  'POST /api/screen/energy/community': {
    msg: '操作成功',
    code: 200,
  },
  'GET /api/screen/energy/community': {
    msg: '操作成功',
    code: 200,
    data: {
      account: 'waha',
      secret: '123456',
    },
  },
  'GET /api/screen/gateways': {
    msg: '操作成功',
    code: 200,
    data: [
      { label: '网关1', value: 1 },
      { label: '网关2', value: 2 },
    ],
  },
  'GET /api/screen/alarms': {
    msg: '操作成功',
    code: 200,
    rows: [
      {
        id: 1,
        content: 'A相电压越限',
        source: '平台告警',
        createdTime: '2023-4-12 12:00:00',
        recoverTime: '2023-5-4 12:00:00',
      },
    ],
    total: 2,
  },
  'GET /api/screen/logs': {
    msg: '操作成功',
    code: 200,
    rows: [
      {
        id: 1,
        operator: '王欢喜',
        params: '系统停止',
        value: '1',
        createdTime: '2023-4-12 12:00:00',
      },
    ],
    total: 2,
  },
  'GET /api/screen/device/1': {
    msg: '操作成功',
    code: 200,
    data: {
      online: 0,
      code: '12345',
      model: 'Ener Smart 215-P100A',
      sn: '123456',
      name: '1#储能',
      type: '工商业家储',
      childSystem: '储能',
      createdTime: '2023-4-26 16:25:00',
      activeTime: '2023-4-26 16:25:00',
      onlineTime: '2023-4-26 16:25:00',
      creator: '王某某',
      onlineHour: '1天22h',
      station: '光储充示范站',
      product: {
        model: 'YTEDC1',
        type: '充电桩',
        company: ' 永泰数能',
        desc: 'YTEDC1为全新一代一体式电动汽车直流恒功率快速充电桩。系统内置30/40kW恒功率充电模块，最高输出电压1000V，满足各类车辆充电需求。模块采用隔离风道灌胶设计，可靠性高，可应用干各类恶劣环境的场景。系统兼容60~320kW功率配置兼容单枪双枪及功率分配, 兼容多桩环网方案，可广泛应用于各类公共及专用充电场站。',
      },
      run: {
        ems: {
          systemTime: '2023-4-26 16:25:00',
          status: {
            pcsCommunicate: 0,
            bmsCommunicate: 1,
            elecCommunicate: 0,
            emsSystem: 1,
            systemModel: 0,
            bmsContactor: 1,
            aerosolSingle: 0,
            a: 0,
            b: 1,
            c: 0,
          },
          setting: {
            a: 0,
            b: 3.62,
            c: 2.9,
            d: 3.62,
            e: 2.9,
            f: '00:00-06:00',
            g: -50,
            h: '00:00-06:00',
            i: -50,
            j: '00:00-06:00',
            k: -50,
            l: '00:00-06:00',
            m: -50,
            n: '00:00-06:00',
            o: -50,
            p: '00:00-06:00',
            q: -50,
          },
        },
        pcs: {
          status: {
            a: 0,
            b: 1,
            c: 0,
            d: 1,
            e: 0,
            f: 1,
            g: 0,
            h: 1,
            i: 0,
            j: 1,
          },
          measure: {
            a: 380,
            b: 380,
            c: 380,
            d: 220,
            e: 220,
            f: 220,
            g: 10,
            h: 10,
            i: 10,
            j: 10,
            k: 10,
            l: 10,
            m: 50,
            n: '',
            o: 100,
            p: 100,
            q: 100,
            r: 100,
            s: 100,
            t: 100,
            u: 100,
            v: 100,
            w: 100,
            x: 100,
            y: 100,
            z: 100,
            aa: 0.98,
            ab: 800,
            ac: 800,
            ad: 800,
            ae: 800,
            af: 10,
            ag: 7,
            ah: 30,
            ai: 30,
          },
        },
        bms: {
          status: {
            field: [
              { label: '主接触器状态', field: 'a' },
              { label: '预充接触器状态', field: 'b' },
              { label: '直流断路器状态', field: 'c' },
              { label: '交流断路器状态', field: 'd' },
              { label: '门禁状态', field: 'e' },
              { label: '充放电指示', field: 'f' },
              { label: 'BMU1风扇', field: 'g' },
              { label: 'BMU2风扇', field: 'h' },
              { label: 'BMU3风扇', field: 'i' },
              { label: 'BMU4风扇', field: 'j' },
              { label: 'BMU5风扇', field: 'k' },
              { label: 'BMU6风扇', field: 'l' },
              { label: 'BMU7风扇', field: 'm' },
              { label: 'BMU8风扇', field: 'n' },
              { label: 'BMU9风扇', field: 'o' },
              { label: 'BMU10风扇', field: 'p' },
              { label: 'BMU1-10通信状态', field: 'q' },
              { label: '对外故障', field: 'r' },
              { label: '一级报警', field: 's' },
              { label: '二级报警', field: 't' },
              { label: '三级报警', field: 'u' },
            ],
            value: {
              a: { value: '闭合', type: 'success' },
              b: { value: '断开', type: 'error' },
            },
          },
          measure: {
            field: [
              { label: '电池总电压', field: 'a' },
              { label: '电池总电流', field: 'b' },
              { label: '预充总压', field: 'c' },
              { label: 'SOC', field: 'd' },
              { label: 'SOH', field: 'e' },
            ],
            value: {
              a: { value: '800V' },
              b: { value: '10A' },
              c: { value: '800V' },
              d: { value: '50%' },
              e: { value: '100%' },
            },
          },
        },
        air: {
          status: {
            field: [
              { label: '室内风机开关', field: 'a' },
              { label: '压缩机开关', field: 'b' },
              { label: '电加热开关', field: 'c' },
              { label: '公告告警开关', field: 'd' },
              { label: '制冷状态', field: 'e' },
            ],
            value: {
              a: { value: '输出', type: 'success' },
              b: { value: '停止', type: 'error' },
            },
          },
          measure: {
            field: [
              { label: '回风湿度', field: 'a' },
              { label: '送风温度', field: 'b' },
              { label: '冷凝温度', field: 'c' },
              { label: '蒸发温度', field: 'd' },
              { label: '回风温度', field: 'e' },
            ],
            value: {
              a: { value: '60%' },
              b: { value: '30℃' },
              c: { value: '30℃' },
              d: { value: '30℃' },
              e: { value: '30℃' },
            },
          },
        },
        electric: {
          measure: {
            field: [
              { label: 'A相功率', field: 'a' },
              { label: 'B相功率', field: 'b' },
              { label: 'C相功率', field: 'c' },
              { label: '总有功功率', field: 'd' },
              { label: '今日用电量', field: 'e' },
            ],
            value: {
              a: { value: '100KW' },
              b: { value: '100KW' },
              c: { value: '100KW' },
              d: { value: '100KW' },
              e: { value: '100KWH' },
            },
          },
        },
        charge: {
          field: [
            { label: '实时充电功率', field: 'a' },
            { label: '今日充电量', field: 'b' },
            { label: 'A枪状态', field: 'c' },
            { label: 'B枪状态', field: 'd' },
            { label: 'C枪状态', field: 'e' },
          ],
          value: {
            a: { value: '100KW' },
            b: { value: '100KW' },
            c: { value: '占用', type: 'success' },
            d: { value: '空闲', type: 'success' },
            e: { value: '空闲', type: 'error' },
          },
        },
        ytCharge: {
          field: [
            { label: '累计充电量', field: 'a' },
            { label: '实时充电功率', field: 'b' },
            { label: '今日充电量', field: 'c' },
            { label: 'A枪状态', field: 'd' },
            { label: 'B枪状态', field: 'e' },
          ],
          value: {
            a: { value: '100KW' },
            b: { value: '100KW' },
            c: { value: '100KW' },
            d: { value: '占用', type: 'success' },
            e: { value: '空闲', type: 'success' },
          },
        },
        gateway: {
          field: [{ label: '通讯状态', field: 'a' }],
          value: {
            a: { value: '正常', type: 'success' },
          },
        },
        electricTerminal: {
          field: [
            { label: 'A相电压', field: 'a' },
            { label: 'AB线电压', field: 'b' },
            { label: 'A相电流', field: 'c' },
            { label: 'B相电压', field: 'd' },
            { label: 'BC线电压', field: 'e' },
          ],
          value: {
            a: { value: '100KW' },
            b: { value: '100KW' },
            c: { value: '100KW' },
            d: { value: '10A' },
            e: { value: '100KW' },
          },
        },
        electricMeter: {
          field: [
            { label: 'A相电压', field: 'a' },
            { label: 'AB线电压', field: 'b' },
            { label: 'A相电流', field: 'c' },
            { label: 'B相电压', field: 'd' },
            { label: 'BC线电压', field: 'e' },
          ],
          value: {
            a: { value: '100KW' },
            b: { value: '100KW' },
            c: { value: '100KW' },
            d: { value: '10A' },
            e: { value: '100KW' },
          },
        },
      },
    },
  },
  'GET /api/site/2': {
    msg: '操作成功',
    code: 200,
    data: {
      id: 2,
      sn: 'NE=33681036',
      name: '华为云平台站点',
      voltageclass: 0.0,
      transformerCapacity: 0.0,
      photovoltaicInstalledcapacity: 0.0,
      energystorageCapacitystorage: 0.0,
      energyStorageCapacityOutput: 0.0,
      chargingstationCapacity: 0.0,
      address: '',
    },
  },
  'GET /api/screen/charging/station': {
    msg: '操作成功',
    code: 200,
    data: {
      chargingPower: '100kW',
      chargingCapacityToday: '100kWh',
      gunIdle: '8',
      gunInUse: '4',
      earningsToday: '100元',
    },
  },
  'GET /api/screen/energy/storage': {
    msg: '操作成功',
    code: 200,
    data: {
      realtimeStatus: 1,
      chargingAndDischargingPower: '100kW',
      soc: '33.33%',
      soh: '99.33%',
    },
  },
  'GET /api/oss/device/list': {
    msg: '操作成功',
    code: 200,
    data: [
      {
        subsystemName: '储能系统',
        productName: '矩形单体电压',
        productId: 4,
        number: 1,
        subsystemId: 2,
      },
    ],
  },
  'GET /api/oss/site/economicAndSocialStatistics': {
    msg: '操作成功',
    code: 200,
    data: {
      cumulativeTree: '0',
      conserveEnergyReduceEmissions: '2408752',
      monthEconomicPerformance: '',
      yearEconomicPerformance: '2.41600',
      cumulativeEconomicPerformance: '2.41600',
      siteId: 1,
      todayEconomicPerformance: '2.41600',
    },
  },
};
