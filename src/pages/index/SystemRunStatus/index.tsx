import React, { useEffect, useState } from 'react';
import styles from '../SystemRunStatusOptical/index.less';
import energyFlowImg from '@/assets/image/station/overview/energy-flow.webp';
import { getSystemRunStatus } from '@/services/device';
import IconEms from '@/assets/image/station/overview/icon_ems.svg';
import IconUpperComputer from '@/assets/image/station/overview/icon_upper_computer.svg';
import IconOn from '@/assets/image/station/overview/icon_on.svg';
import IconOff from '@/assets/image/station/overview/icon_off.svg';
import IconFireFighting from '@/assets/image/station/overview/icon_fire_fighting.svg';
import IconYtCloud from '@/assets/image/station/overview/icon_yt_cloud.svg';
import IconAir from '@/assets/image/station/overview/icon_air.svg';
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

const Index: React.FC = (props) => {
  const { data } = props;
  const [status, setStatus] = useState(0);
  useEffect(() => {
    getSystemRunStatus().then((res) => {
      setStatus(res?.data?.status);
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
          <img className={styles.centerImg} src={IconEms} alt="" />
          {/*上位机 对称*/}
          <img className={styles.oneImg} src={IconUpperComputer} alt="" />
          {status ? (
            <img className={styles.oneStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.oneStatus} src={IconOff} alt="" />
          )}
          <span className={styles.oneName}>上位机</span>
          <span className={styles.oneMethod}>{communityMethods[data?.[179]]}</span>
          <span className={styles.one} style={{ backgroundColor: status ? '#00B42A' : '' }} />
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
          />
          <span className={styles.sixMethod}>{communityOtherMethods[data?.[195]]}</span>
          <img className={styles.twoImg} src={IconYtCloud} alt="" />
          {+data?.[182] === 0 ? (
            <img className={styles.twoStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.twoStatus} src={IconOff} alt="" />
          )}
          <span className={styles.twoName}>永泰云</span>
          <span
            className={styles.two}
            style={{ backgroundColor: +data?.[182] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.twoMethod}>{communityMethods[data?.[183]]}</span>
          <img className={styles.sevenImg} src={IconAir} alt="" />
          {+data?.[188] === 0 ? (
            <img className={styles.sevenStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.sevenStatus} src={IconOff} alt="" />
          )}
          <span className={styles.sevenName}>空调</span>
          <span
            className={styles.seven}
            style={{ backgroundColor: +data?.[188] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.sevenMethod}>{communityOtherMethods[data?.[189]]}</span>
          <img className={styles.threeImg} src={IconLampPanel} alt="" />
          {+data?.[184] === 0 ? (
            <img className={styles.threeStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.threeStatus} src={IconOff} alt="" />
          )}
          <span className={styles.threeName}>灯板</span>
          <span
            className={styles.three}
            style={{ backgroundColor: +data?.[184] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.threeMethod}>{communityOtherMethods[data?.[185]]}</span>
          <img className={styles.eightImg} src={IconBattery} alt="" />
          {+data?.[230] === 0 ? (
            <img className={styles.eightStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.eightStatus} src={IconOff} alt="" />
          )}
          <span className={styles.eightName}>电池</span>
          <span
            className={styles.eight}
            style={{ backgroundColor: +data?.[230] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.eightMethod}>{communityOtherMethods[data?.[231]]}</span>
          <img className={styles.fourImg} src={IconGridMeter} alt="" />
          {+data?.[196] === 0 ? (
            <img className={styles.fourStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.fourStatus} src={IconOff} alt="" />
          )}
          <span className={styles.fourName}>电网侧电表</span>
          <span
            className={styles.four}
            style={{ backgroundColor: +data?.[196] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.fourMethod}>{communityOtherMethods[data?.[197]]}</span>
          <img className={styles.nineImg} src={IconConverter} alt="" />
          {+data?.[186] === 0 ? (
            <img className={styles.nineStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.nineStatus} src={IconOff} alt="" />
          )}
          <span className={styles.nineName}>变流器</span>
          <span
            className={styles.nine}
            style={{ backgroundColor: +data?.[186] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.nineMethod}>{communityOtherMethods[data?.[187]]}</span>
          <img className={styles.fiveImg} src={IconInverterMeter} alt="" />
          {+data?.[198] === 0 ? (
            <img className={styles.fiveStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.fiveStatus} src={IconOff} alt="" />
          )}
          <span className={styles.fiveName}>逆变侧电表</span>
          <span
            className={styles.five}
            style={{ backgroundColor: +data?.[198] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.fiveMethod}>{communityOtherMethods[data?.[199]]}</span>
          <img className={styles.tenImg} src={IconWeb} alt="" />
          {+data?.[180] === 0 ? (
            <img className={styles.tenStatus} src={IconOn} alt="" />
          ) : (
            <img className={styles.tenStatus} src={IconOff} alt="" />
          )}
          <span className={styles.tenName}>云平台</span>
          <span
            className={styles.ten}
            style={{ backgroundColor: +data?.[180] === 0 ? '#00B42A' : '' }}
          ></span>
          <span className={styles.tenMethod}>{communityMethods[data?.[181]]}</span>
        </div>
      </div>
    </>
  );
};

export default Index;
