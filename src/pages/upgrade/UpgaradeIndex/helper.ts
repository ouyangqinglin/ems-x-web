export const systemInfo: any = [
  {
    id: 'a',
    name: '系统信息',
    type: 'group',
    children: [
      {
        id: 'emsSn',
        name: 'EMS SN',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'emsModel',
        name: 'EMS型号',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'emsHardwareVersion',
        name: 'EMS硬件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
      {
        id: 'emsSoftwareVersion',
        name: 'EMS软件版本',
        type: 'property',
        dataType: {
          type: 'string',
        },
      },
    ],
  },
];
