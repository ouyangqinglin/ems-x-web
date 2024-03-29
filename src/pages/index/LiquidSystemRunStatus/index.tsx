import React, { useEffect, useState } from 'react';
import styles from './index.less';
import liquidEnergyFlowImg from '@/assets/image/station/overview/liquid-flow-energy.webp';
import { getSystemRunStatus } from '@/services/device';
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
        <div>系统运行状态</div>
        <div className={styles.imgBox}>
          <img src={liquidEnergyFlowImg} alt="" />
          {/*上位机 对称*/}
          <span className={styles.one}>
            {communityMethods[data?.[179]]}
            {status && '(连接)'}
          </span>
          <span className={styles.six}>
            {communityOtherMethods[data?.[193]]}({communityStatus[data?.[192]]})
          </span>
          <span className={styles.two}>
            {communityMethods[data?.[183]]}({communityStatus[data?.[182]]})
          </span>
          <span className={styles.seven}>
            {communityOtherMethods[data?.[191]]}({communityStatus[data?.[180]]})
          </span>
          <span className={styles.three}>
            {communityOtherMethods[data?.[185]]}({communityStatus[data?.[184]]})
          </span>
          <span className={styles.eight}>
            {communityOtherMethods[data?.[230]]}({communityStatus[data?.[231]]})
          </span>
          <span className={styles.four}>
            {communityOtherMethods[data?.[199]]}({communityStatus[data?.[198]]})
          </span>
          <span className={styles.nine}>
            {communityOtherMethods[data?.[187]]}({communityStatus[data?.[186]]})
          </span>
          <span className={styles.five}>
            {communityOtherMethods[data?.[195]]}({communityStatus[data?.[194]]})
          </span>
          <span className={styles.ten}>
            {communityMethods[data?.[181]]}({communityStatus[data?.[180]]})
          </span>
          <span className={styles.eleven}>
            {communityOtherMethods[data?.[197]]}({communityStatus[data?.[196]]})
          </span>
        </div>
      </div>
    </>
  );
};

export default Index;
