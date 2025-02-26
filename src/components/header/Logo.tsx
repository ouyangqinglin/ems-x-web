/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2023-07-05 19:22:37
 * @LastEditTime: 2024-05-28 10:33:26
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\components\header\Logo.tsx
 */
import React from 'react';
import { useModel } from 'umi';
import styles from './index.less';

const Logo: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  return (
    <>
      <a>
        {initialState?.collapsed
          ? initialState?.currentUser?.systemInfo?.icon && (
              <img className={styles.logo} src={initialState?.currentUser?.systemInfo?.icon} />
            )
          : initialState?.currentUser?.systemInfo?.icon && (
              <>
                <img className={styles.logo} src={initialState?.currentUser?.systemInfo?.icon} />
                <span className={styles.title}>YT-ESS-EMS</span>
              </>
            )}
      </a>
    </>
  );
};

export default Logo;
