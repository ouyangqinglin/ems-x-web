/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-15 16:49:53
 * @LastEditTime: 2024-03-15 16:49:53
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\components\Card\index.tsx
 */

import React, { memo } from 'react';

type CardType = {
  className?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardType> = (props) => {
  const { className = '', children } = props;

  return (
    <>
      <div className={`card-wrap shadow p20 ${className}`}>{children}</div>
    </>
  );
};

export default memo(Card);
