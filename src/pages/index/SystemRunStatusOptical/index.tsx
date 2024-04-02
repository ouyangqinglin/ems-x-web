import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { getSystemRunStatus } from '@/services/device';
import IconOff from '@/assets/image/station/overview/icon_off.svg';
import IconOn from '@/assets/image/station/overview/icon_on.svg';
import IconUpperComputer from '@/assets/image/station/overview/icon_upper_computer.svg';
import IconYtCloud from '@/assets/image/station/overview/icon_yt_cloud.svg';
import IconLampPanel from '@/assets/image/station/overview/icon_lamp_panel.svg';
import IconGridMeter from '@/assets/image/station/overview/icon_grid_side_meter.svg';
import IconInverterMeter from '@/assets/image/station/overview/icon_inverter_side_meter.svg';
import IconFireFighting from '@/assets/image/station/overview/icon_fire_fighting.svg';
import IconAir from '@/assets/image/station/overview/icon_air.svg';
import IconBattery from '@/assets/image/station/overview/icon_battery.svg';
import IconConverter from '@/assets/image/station/overview/icon_converter.svg';
import IconWeb from '@/assets/image/station/overview/icon_web.svg';
import IconEms from '@/assets/image/station/overview/icon_ems.svg';
const communityMethods = {
  0: 'RS485',
  1: '未知',
};
const communityOtherMethods = {
  0: '以太网',
  1: 'CAN',
  2: '485',
};
const communityStatus = {
  0: '正常',
  1: '失联',
};

const Index: React.FC = (props) => {
  const { data } = props;
  const [status, setStatus] = useState(0);
  useEffect(() => {
    getSystemRunStatus().then((res) => {
      console.log('=====>', res);
      setStatus(+res?.data?.status);
    });
  }, []);
  return (
    <>
      <div className={styles.energy}>
        <div style={{ fontWeight: 600 }}>系统运行状态</div>
        <div className={styles.imgBox}>
          <img className={styles.centerImg} src={IconEms} alt="" />
          {/*上位机 对称*/}
          <img className={styles.oneImg} src={IconUpperComputer} alt="" />
          {status ? (
            <img className={styles.oneStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.oneStatus} src={IconOff} alt="" />
          )}
          <span className={styles.oneName}>上位机</span>
          <span className={styles.one} style={{ backgroundColor: status ? '#00B42A' : '' }}>
            {/*{communityMethods[data?.[179]]}*/}
            {/*{status && ''}*/}
          </span>
          <img className={styles.sixImg} src={IconFireFighting} alt="" />
          {+data?.[194] === 0 ? (
            <img className={styles.sixStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.sixStatus} src={IconOff} alt="" />
          )}
          <span className={styles.sixName}>消防</span>
          <span
            className={styles.six}
            style={{ backgroundColor: +data?.[194] === 0 ? '#00B42A' : '' }}
          >
            {/*{communityMethods[data?.[195]]}({communityStatus[data?.[194]]})*/}
          </span>
          <img className={styles.twoImg} src={IconYtCloud} alt="" />
          {+data?.[1102] === 0 ? (
            <img className={styles.twoStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.twoStatus} src={IconOff} alt="" />
          )}
          <span className={styles.twoName}>永泰云</span>
          <span
            className={styles.two}
            style={{ backgroundColor: +data?.[1102] === 0 ? '#00B42A' : '' }}
          >
            {/*{communityMethods[data?.[183]]}({communityStatus[data?.[1102]]})*/}
          </span>
          <img className={styles.sevenImg} src={IconAir} alt="" />
          {+data?.[1106] === 0 ? (
            <img className={styles.sevenStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.sevenStatus} src={IconOff} alt="" />
          )}
          <span className={styles.sevenName}>空调</span>
          <span
            className={styles.seven}
            style={{ backgroundColor: +data?.[1106] === 0 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[5533]]}({communityStatus[data?.[1106]]})*/}
          </span>
          <img className={styles.threeImg} src={IconLampPanel} alt="" />
          {+data?.[1103] === 0 ? (
            <img className={styles.threeStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.threeStatus} src={IconOff} alt="" />
          )}
          <span className={styles.threeName}>灯板</span>
          <span
            className={styles.three}
            style={{ backgroundColor: +data?.[1103] === 0 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[185]]}({communityStatus[data?.[1103]]})*/}
          </span>
          <img className={styles.eightImg} src={IconBattery} alt="" />
          {+data?.[1105] === 0 ? (
            <img className={styles.eightStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.eightStatus} src={IconOff} alt="" />
          )}
          <span className={styles.eightName}>电池</span>
          <span
            className={styles.eight}
            style={{ backgroundColor: +data?.[1105] === 0 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[3031]]}({communityStatus[data?.[1105]]})*/}
          </span>
          <img className={styles.fourImg} src={IconGridMeter} alt="" />
          {+data?.[1108] === 0 ? (
            <img className={styles.fourStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.fourStatus} src={IconOff} alt="" />
          )}
          <span className={styles.fourName}>电网侧电表</span>
          <span
            className={styles.four}
            style={{ backgroundColor: +data?.[1108] === 0 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[5014]]}({communityStatus[data?.[1108]]})*/}
          </span>
          <img className={styles.nineImg} src={IconConverter} alt="" />
          {+data?.[1104] === 0 ? (
            <img className={styles.nineStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.nineStatus} src={IconOff} alt="" />
          )}
          <span className={styles.nineName}>变流器</span>
          <span
            className={styles.nine}
            style={{ backgroundColor: +data?.[1104] === 0 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[2642]]}({communityStatus[data?.[1104]]})*/}
          </span>
          <img className={styles.fiveImg} src={IconInverterMeter} alt="" />
          {+data?.[1109] === 0 ? (
            <img className={styles.fiveStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.fiveStatus} src={IconOff} alt="" />
          )}
          <span className={styles.fiveName}>逆变侧电表</span>
          <span
            className={styles.five}
            style={{ backgroundColor: +data?.[1109] === 0 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[5007]]}({communityStatus[data?.[1109]]})*/}
          </span>
          <img className={styles.tenImg} src={IconWeb} alt="" />
          {+data?.[1101] === 0 ? (
            <img className={styles.tenStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.tenStatus} src={IconOff} alt="" />
          )}
          <span className={styles.tenName}>云平台</span>
          <span
            className={styles.ten}
            style={{ backgroundColor: +data?.[1101] === 0 ? '#00B42A' : '' }}
          >
            {/*{communityMethods[data?.[181]]}({communityStatus[data?.[1101]]})*/}
          </span>
        </div>
      </div>
    </>
  );
};

export default Index;
