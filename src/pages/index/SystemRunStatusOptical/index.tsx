import React, { useEffect, useState } from 'react';
import styles from './index.less';
import energyFlowImg from '@/assets/image/station/overview/energy-flow.webp';
import { getSystemRunStatus } from '@/services/device';
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
            {status && '(连接)'}
          </span>
          <span className={styles.six}>
            {communityMethods[data?.[195]]}({communityStatus[data?.[194]]})
          </span>
          <span className={styles.two}>
            {communityMethods[data?.[183]]}({communityStatus[data?.[1102]]})
          </span>
          <span className={styles.seven}>
            {communityOtherMethods[data?.[5533]]}({communityStatus[data?.[1106]]})
          </span>
          <span className={styles.three}>
            {communityOtherMethods[data?.[185]]}({communityStatus[data?.[1103]]})
          </span>
          <span className={styles.eight}>
            {communityOtherMethods[data?.[3031]]}({communityStatus[data?.[1105]]})
          </span>
          <span className={styles.four}>
            {communityOtherMethods[data?.[5014]]}({communityStatus[data?.[1108]]})
          </span>
          <span className={styles.nine}>
            {communityOtherMethods[data?.[2642]]}({communityStatus[data?.[1104]]})
          </span>
          <span className={styles.five}>
            {communityOtherMethods[data?.[5007]]}({communityStatus[data?.[1109]]})
          </span>
          <span className={styles.ten}>
            {communityMethods[data?.[181]]}({communityStatus[data?.[1101]]})
          </span>
        </div>
      </div>
    </>
  );
};

export default Index;
