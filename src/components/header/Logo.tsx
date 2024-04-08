/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2023-07-05 19:22:37
 * @LastEditTime: 2024-04-08 18:01:12
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
          : initialState?.currentUser?.systemInfo?.logo && (
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
