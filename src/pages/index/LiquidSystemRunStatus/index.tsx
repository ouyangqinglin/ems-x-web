import React, { useEffect, useState } from 'react';
import styles from './index.less';
import liquidEnergyFlowImg from '@/assets/image/station/overview/liquid-flow-energy.webp';
import { getSystemRunStatus } from '@/services/device';
import IconEms from '@/assets/image/station/overview/icon_ems.svg';
import IconUpperComputer from '@/assets/image/station/overview/icon_upper_computer.svg';
import IconOn from '@/assets/image/station/overview/icon_on.svg';
import IconOff from '@/assets/image/station/overview/icon_off.svg';
import IconFireFighting from '@/assets/image/station/overview/icon_fire_fighting.svg';
import IconDehumidifier from '@/assets/image/station/overview/icon_dehumidifier.svg';
import IconYtCloud from '@/assets/image/station/overview/icon_yt_cloud.svg';
import IconAir from '@/assets/image/station/overview/icon_Liquid.svg';
import IconLampPanel from '@/assets/image/station/overview/icon_lamp_panel.svg';
import IconBattery from '@/assets/image/station/overview/icon_battery.svg';
import IconGridMeter from '@/assets/image/station/overview/icon_grid_side_meter.svg';
import IconConverter from '@/assets/image/station/overview/icon_converter.svg';
import IconInverterMeter from '@/assets/image/station/overview/icon_inverter_side_meter.svg';
import IconWeb from '@/assets/image/station/overview/icon_web.svg';
const communityMethods = {
  0: 'RS485',
  1: '以太网',
  5: '未知',
};
const communityOtherMethods = {
  0: 'RS485',
  1: '以太网',
  2: 'CAN',
  5: '未知',
};
const communityStatus = {
  0: '初始化',
  1: '断开',
  2: '连接',
};
console.log('window.innerWidth', window.innerWidth);
const Index: React.FC = (props) => {
  const { data } = props;
  const [status, setStatus] = useState(0);
  useEffect(() => {
    getSystemRunStatus().then((res) => {
      console.log('=====>', res);
      setStatus(res?.data?.status);
    });
  }, []);

  return (
    <>
      <div className={styles.liquidEnergy}>
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
          <img className={styles.sixImg} src={IconDehumidifier} alt="" />
          {+data?.[192] === 2 ? (
            <img className={styles.sixStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.sixStatus} src={IconOff} alt="" />
          )}
          <span className={styles.sixName}>除湿机</span>
          <span
            className={styles.six}
            style={{ backgroundColor: +data?.[192] === 2 ? '#00B42A' : '' }}
          >
            {/*{communityMethods[data?.[195]]}({communityStatus[data?.[194]]})*/}
          </span>
          <img className={styles.twoImg} src={IconYtCloud} alt="" />
          {+data?.[182] === 2 ? (
            <img className={styles.twoStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.twoStatus} src={IconOff} alt="" />
          )}
          <span className={styles.twoName}>永泰云</span>
          <span
            className={styles.two}
            style={{ backgroundColor: +data?.[182] === 2 ? '#00B42A' : '' }}
          >
            {/*{communityMethods[data?.[183]]}({communityStatus[data?.[1102]]})*/}
          </span>
          <img className={styles.sevenImg} src={IconAir} alt="" />
          {+data?.[190] === 2 ? (
            <img className={styles.sevenStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.sevenStatus} src={IconOff} alt="" />
          )}
          <span className={styles.sevenName}>液冷机</span>
          <span
            className={styles.seven}
            style={{ backgroundColor: +data?.[190] === 2 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[5533]]}({communityStatus[data?.[1106]]})*/}
          </span>
          <img className={styles.threeImg} src={IconLampPanel} alt="" />
          {+data?.[184] === 2 ? (
            <img className={styles.threeStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.threeStatus} src={IconOff} alt="" />
          )}
          <span className={styles.threeName}>灯板</span>
          <span
            className={styles.three}
            style={{ backgroundColor: +data?.[184] === 2 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[185]]}({communityStatus[data?.[1103]]})*/}
          </span>
          <img className={styles.eightImg} src={IconBattery} alt="" />
          {+data?.[231] === 2 ? (
            <img className={styles.eightStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.eightStatus} src={IconOff} alt="" />
          )}
          <span className={styles.eightName}>电池</span>
          <span
            className={styles.eight}
            style={{ backgroundColor: +data?.[231] === 2 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[3031]]}({communityStatus[data?.[1105]]})*/}
          </span>
          <img className={styles.fourImg} src={IconGridMeter} alt="" />
          {+data?.[196] === 2 ? (
            <img className={styles.fourStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.fourStatus} src={IconOff} alt="" />
          )}
          <span className={styles.fourName}>电网侧电表</span>
          <span
            className={styles.four}
            style={{ backgroundColor: +data?.[196] === 2 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[5014]]}({communityStatus[data?.[1108]]})*/}
          </span>
          <img className={styles.elevenImg} src={IconInverterMeter} alt="" />
          {+data?.[198] === 2 ? (
            <img className={styles.elevenStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.elevenStatus} src={IconOff} alt="" />
          )}
          <span className={styles.elevenName}>逆变侧电表</span>
          <span
            className={styles.eleven}
            style={{ backgroundColor: +data?.[198] === 2 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[5014]]}({communityStatus[data?.[1108]]})*/}
          </span>
          <img className={styles.nineImg} src={IconConverter} alt="" />
          {+data?.[186] === 2 ? (
            <img className={styles.nineStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.nineStatus} src={IconOff} alt="" />
          )}
          <span className={styles.nineName}>变流器</span>
          <span
            className={styles.nine}
            style={{ backgroundColor: +data?.[186] === 2 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[2642]]}({communityStatus[data?.[1104]]})*/}
          </span>
          <img className={styles.fiveImg} src={IconFireFighting} alt="" />
          {+data?.[194] === 2 ? (
            <img className={styles.fiveStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.fiveStatus} src={IconOff} alt="" />
          )}
          <span className={styles.fiveName}>消防</span>
          <span
            className={styles.five}
            style={{ backgroundColor: +data?.[194] === 2 ? '#00B42A' : '' }}
          >
            {/*{communityOtherMethods[data?.[5007]]}({communityStatus[data?.[1109]]})*/}
          </span>
          <img className={styles.tenImg} src={IconWeb} alt="" />
          {+data?.[180] === 2 ? (
            <img className={styles.tenStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.tenStatus} src={IconOff} alt="" />
          )}
          <span className={styles.tenName}>云平台</span>
          <span
            className={styles.ten}
            style={{ backgroundColor: +data?.[180] === 2 ? '#00B42A' : '' }}
          >
            {/*{communityMethods[data?.[181]]}({communityStatus[data?.[1101]]})*/}
          </span>
        </div>
      </div>
    </>
  );
};

export default Index;
