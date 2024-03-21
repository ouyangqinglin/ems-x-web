import request from '@/utils/request';
import { downLoadXlsx } from '@/utils/downloadfile';

export const exportTemp = () => {
  return downLoadXlsx(`/iot/device/exportDeviceTemplate`, {}, '设备导入模版.xlsx', 'GET');
};