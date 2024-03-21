/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-03-21 15:47:57
 * @LastEditTime: 2024-03-21 15:47:57
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\hooks\useSourceId.ts
 */

import { useEffect, useState } from 'react';
import useLocation from './useLocation';
import { useModel } from 'umi';
import { getPropsFromTree } from '@/utils';

const useSourceId = () => {
  const [sourceId, setSourceId] = useState('');
  const location = useLocation();
  const { initialState } = useModel('@@initialState');

  useEffect(() => {
    const sourceIds = getPropsFromTree(
      initialState?.antMenus as any,
      'sourceId',
      'children',
      (item) => item.key == location.pathname,
    );
    if (sourceIds[0]) {
      setSourceId(sourceIds[0]);
    }
  }, [location, initialState]);

  return {
    sourceId,
  };
};

export default useSourceId;
