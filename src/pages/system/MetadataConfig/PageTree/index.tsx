/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2024-04-17 16:37:32
 * @LastEditTime: 2024-04-18 09:12:43
 * @LastEditors: YangJianFei
 * @FilePath: \ems-x-web\src\pages\system\MetadataConfig\PageTree\index.tsx
 */

import { AntMenuProps } from '@/utils';
import { Tree } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useModel } from 'umi';

type PageTreeType = {
  onSelect?: (sourceId: string) => void;
};

const PageTree: React.FC<PageTreeType> = (props) => {
  const { onSelect } = props;

  const antMenus = useModel('@@initialState', (data) => {
    const menu = (data.initialState?.antMenus as AntMenuProps[]) || [];
    const result: AntMenuProps[] = [];
    menu.forEach((item) => {
      if (!item.disabled) {
        result.push({
          ...item,
          selectable: !(item.children && item.children.length),
        });
      }
    });
    return result;
  });
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const onTreeSelect = useCallback(
    (_, { selected, node }: { selected: boolean; node: any }) => {
      if (selected && node?.sourceId) {
        setSelectedKeys([node?.sourceId]);
        onSelect?.(node?.sourceId);
      }
    },
    [onSelect],
  );

  useEffect(() => {
    if (antMenus?.[0]?.sourceId) {
      setSelectedKeys([antMenus?.[0]?.sourceId]);
      onSelect?.(antMenus?.[0]?.sourceId);
    }
  }, [antMenus]);

  return (
    <>
      <Tree
        treeData={antMenus}
        defaultExpandAll={true}
        fieldNames={{
          title: 'label',
          key: 'sourceId',
          children: 'children',
        }}
        selectedKeys={selectedKeys}
        onSelect={onTreeSelect}
      />
    </>
  );
};

export default PageTree;
