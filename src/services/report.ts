import request from '@/utils/request';

export const getDeviceData = () => {
  return request(`/v1/home/deviceData`, {
    method: 'POST',
  });
};

export const chartPowerData = () => {
  return request(`/v1/home/chartPowerData`, {
    method: 'POST',
  });
};

export const chartElectricData = () => {
  return request(`/v1/home/chartElectricData`, {
    method: 'POST',
  });
};
