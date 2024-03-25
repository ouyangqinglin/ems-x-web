import React, { useEffect, useState } from 'react';
import styles from './index.less';
import energyFlowImg from '@/assets/image/station/overview/energy-flow.webp';
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
const communityStatus = ['初始化', '断开', '连接'];

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
      <div className={styles.energy}>
        <div>系统运行状态</div>
        <div className={styles.imgBox}>
          <img src={energyFlowImg} alt="" />
          {/*上位机 对称*/}
          <span className={styles.one}>
            {communityMethods[data?.[179]]}
            {status && '(已连接)'}
          </span>
          <span className={styles.six}>
            {communityMethods[data?.[195]]}({communityStatus[data?.[194]]})
          </span>
          <span className={styles.two}>
            {communityMethods[data?.[183]]}({communityStatus[data?.[182]]})
          </span>
          <span className={styles.seven}>
            {communityOtherMethods[data?.[189]]}({communityStatus[data?.[188]]})
          </span>
          <span className={styles.three}>
            {communityOtherMethods[data?.[185]]}({communityStatus[data?.[184]]})
          </span>
          <span className={styles.eight}>
            {communityOtherMethods[data?.[230]]}({communityStatus[data?.[231]]})
          </span>
          <span className={styles.four}>
            {communityOtherMethods[data?.[197]]}({communityStatus[data?.[196]]})
          </span>
          <span className={styles.nine}>
            {communityOtherMethods[data?.[187]]}({communityStatus[data?.[186]]})
          </span>
          <span className={styles.five}>
            {communityOtherMethods[data?.[199]]}({communityStatus[data?.[198]]})
          </span>
          <span className={styles.ten}>
            {communityMethods[data?.[181]]}({communityStatus[data?.[180]]})
          </span>
        </div>
      </div>
    </>
  );
};

export default Index;
