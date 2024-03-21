import React from 'react';
import styles from './index.less';
import energyFlowImg from '@/assets/image/station/overview/energy-flow.webp';

const Index: React.FC = () => {
  return (
    <>
      <div className={styles.energy}>
        <div>系统运行状态</div>
        <div className={styles.imgBox}>
          <img src={energyFlowImg} alt="" />
          {/*上位机 对称*/}
          <span className={styles.one}>(已连接)</span>
          <span className={styles.six}>(已连接)</span>
          <span className={styles.two}>(已连接)</span>
          <span className={styles.seven}>(已连接)</span>
          <span className={styles.three}>(已连接)</span>
          <span className={styles.eight}>(已连接)</span>
          <span className={styles.four}>(已连接)</span>
          <span className={styles.nine}>(已连接)</span>
          <span className={styles.five}>(已连接)</span>
          <span className={styles.ten}>(已连接)</span>
        </div>
      </div>
    </>
  );
};

export default Index;
