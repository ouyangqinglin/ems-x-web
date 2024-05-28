import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { getSystemRunStatus } from '@/services/device';
import IconEms from '@/assets/image/station/overview/icon_ems.png';
import IconOff from '@/assets/image/station/overview/icon_off.svg';
import IconOn from '@/assets/image/station/overview/icon_on.svg';
import IconUpperComputer from '@/assets/image/station/overview/icon_upper_computer.png';
import IconYtCloud from '@/assets/image/station/overview/icon_yt_cloud.png';
import IconLampPanel from '@/assets/image/station/overview/icon_lamp_panel.png';
import IconMeter from '@/assets/image/station/overview/icon_meter.png';
import IconFireFighting from '@/assets/image/station/overview/icon_fire_fighting.png';
import IconAir from '@/assets/image/station/overview/icon_air.png';
import IconBattery from '@/assets/image/station/overview/icon_battery.png';
import IconConverter from '@/assets/image/station/overview/icon_converter.png';
import IconWeb from '@/assets/image/station/overview/icon_web.png';

const communityMethods: Record<string, string> = {
  0: 'RS485',
  1: '未知',
};

const communityOtherMethods: Record<string, string> = {
  0: '以太网',
  1: 'CAN',
  2: '485',
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
        <div className={styles.title}>
          <div style={{ fontWeight: 600 }}>系统运行状态</div>
          <div className={styles.statusGroup}>
            <img src={IconOn} alt="" />
            <span>在线</span>
            <img src={IconOff} alt="" />
            <span>离线</span>
          </div>
        </div>
        <div className={styles.imgBox}>
          <img className={`${styles.centerImg} ${styles.deviceImg}`} src={IconEms} alt="" />
          {/*上位机 对称*/}
          <img className={`${styles.oneImg} ${styles.deviceImg}`} src={IconUpperComputer} alt="" />
          {status ? (
            <img className={styles.oneStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.oneStatus} src={IconOff} alt="" />
          )}
          <span className={styles.oneName}>上位机</span>
          <span className={styles.one} style={{ backgroundColor: status ? '#00B42A' : '' }}></span>
          <span className={styles.oneMethod}>{communityMethods[data?.[179]]}</span>
          <img className={`${styles.sixImg} ${styles.deviceImg}`} src={IconFireFighting} alt="" />
          {+data?.[1107] === 0 ? (
            <img className={styles.sixStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.sixStatus} src={IconOff} alt="" />
          )}
          <span className={styles.sixName}>消防</span>
          <span
            className={styles.six}
            style={{ backgroundColor: +data?.[1107] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.sixMethod}>{communityMethods[data?.[5633]]}</span>
          <img className={`${styles.twoImg} ${styles.deviceImg}`} src={IconYtCloud} alt="" />
          {+data?.[1102] === 0 ? (
            <img className={styles.twoStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.twoStatus} src={IconOff} alt="" />
          )}
          <span className={styles.twoName}>永泰云</span>
          <span
            className={styles.two}
            style={{ backgroundColor: +data?.[1102] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.twoMethod}>{communityMethods[data?.[183]]}</span>
          <img className={`${styles.sevenImg} ${styles.deviceImg}`} src={IconAir} alt="" />
          {+data?.[1106] === 0 ? (
            <img className={styles.sevenStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.sevenStatus} src={IconOff} alt="" />
          )}
          <span className={styles.sevenName}>空调</span>
          <span
            className={styles.seven}
            style={{ backgroundColor: +data?.[1106] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.sevenMethod}>{communityMethods[data?.[5533]]}</span>
          <img className={`${styles.threeImg} ${styles.deviceImg}`} src={IconLampPanel} alt="" />
          {+data?.[1103] === 0 ? (
            <img className={styles.threeStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.threeStatus} src={IconOff} alt="" />
          )}
          <span className={styles.threeName}>灯板</span>
          <span
            className={styles.three}
            style={{ backgroundColor: +data?.[1103] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.threeMethod}>{communityOtherMethods[data?.[185]]}</span>
          <img className={`${styles.eightImg} ${styles.deviceImg}`} src={IconBattery} alt="" />
          {+data?.[1105] === 0 ? (
            <img className={styles.eightStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.eightStatus} src={IconOff} alt="" />
          )}
          <span className={styles.eightName}>电池</span>
          <span
            className={styles.eight}
            style={{ backgroundColor: +data?.[1105] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.eightMethod}>{communityOtherMethods[data?.[3031]]}</span>
          <img className={`${styles.fourImg} ${styles.deviceImg}`} src={IconMeter} alt="" />
          {+data?.[1108] === 0 ? (
            <img className={styles.fourStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.fourStatus} src={IconOff} alt="" />
          )}
          <span className={styles.fourName}>电网侧电表</span>
          <span
            className={styles.four}
            style={{ backgroundColor: +data?.[1108] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.fourMethod}>{communityMethods[data?.[5014]]}</span>
          <img className={`${styles.nineImg} ${styles.deviceImg}`} src={IconConverter} alt="" />
          {+data?.[1104] === 0 ? (
            <img className={styles.nineStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.nineStatus} src={IconOff} alt="" />
          )}
          <span className={styles.nineName}>变流器</span>
          <span
            className={styles.nine}
            style={{ backgroundColor: +data?.[1104] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.nineMethod}>{communityMethods[data?.[2642]]}</span>
          <img className={`${styles.fiveImg} ${styles.deviceImg}`} src={IconMeter} alt="" />
          {+data?.[1109] === 0 ? (
            <img className={styles.fiveStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.fiveStatus} src={IconOff} alt="" />
          )}
          <span className={styles.fiveName}>逆变侧电表</span>
          <span
            className={styles.five}
            style={{ backgroundColor: +data?.[1109] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.fiveMethod}>{communityMethods[data?.[5007]]}</span>
          <img className={`${styles.tenImg} ${styles.deviceImg}`} src={IconWeb} alt="" />
          {+data?.[1101] === 0 ? (
            <img className={styles.tenStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.tenStatus} src={IconOff} alt="" />
          )}
          <span className={styles.tenName}>云平台</span>
          <span
            className={styles.ten}
            style={{ backgroundColor: +data?.[1101] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.tenMethod}>{communityMethods[data?.[181]]}</span>
        </div>
      </div>
    </>
  );
};

export default Index;
