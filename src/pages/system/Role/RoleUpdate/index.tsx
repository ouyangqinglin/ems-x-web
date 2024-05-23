import { useMemo, useState, useEffect, useCallback } from 'react';
import { useRequest } from 'umi';
import { columns } from './config';
import type { RoleInfo, RoleParam } from '../type';
import { createRole, updateRole, getEffectMenus } from '../service';
import type { ProFormColumnsType } from '@ant-design/pro-form';
import { FormUpdate } from '../components/FormUpdate';
import TreeSelect from '@/components/TreeSelect';
import { formatMessage } from '@/utils';

export const RoleUpdate = (props) => {
  const { visible, id, initialValues } = props;

  const { data: menuData, run } = useRequest(getEffectMenus, {
    manual: true,
  });
  menuData?.forEach((item) => {
    item.id = item.source_id;
    item.label = item.source_name;
    if (item.children) {
      item.children.forEach((child) => {
        child.id = child.source_id;
        child.label = child.source_name;
      });
    }
  });

  const formColumns = useMemo<ProFormColumnsType[]>(() => {
    return [
      ...columns,
      {
        title: '菜单权限',
        dataIndex: 'menus',
        renderFormItem: () => {
          return <TreeSelect treeData={menuData} />;
        },
        colProps: {
          span: 24,
        },
      },
      {
        title: formatMessage({ id: 'common.remark', defaultMessage: '备注' }),
        dataIndex: 'desc',
        valueType: 'textarea',
        fieldProps: {
          placeholder: formatMessage({ id: 'common.pleaseEnter', defaultMessage: '请输入' }),
          className: 'w-full',
        },
        colProps: {
          span: 24,
        },
      },
    ];
  }, [menuData]);

  const afterRequest = useCallback((data) => {
    data.menuKeys = {
      halfCheckedKeys: data?.menus || [],
    };
    const halfKeySet = new Set(data.menuKeys.halfCheckedKeys);
    const checkedKeys: number[] = [];
    (data?.menuIds || []).forEach((item: number) => {
      if (!halfKeySet.has(item)) {
        checkedKeys.push(item);
      }
    });
    data.menuKeys.checkedKeys = checkedKeys;
  }, []);

  const beforeSubmit = useCallback((data) => {
    data.menuIds = data?.menuKeys?.checkedKeys || [];
    data.halfMenuIds = data?.menuKeys?.halfCheckedKeys || [];
    data.menuIds.push(...data.halfMenuIds);
    delete data.menuKeys;
  }, []);

  useEffect(() => {
    if (visible) {
      run();
    }
  }, [visible, id]);

  const getRole = () => {
    return Promise.resolve({
      code: 200,
      data: initialValues,
    });
  };
  const updateRoleFn = (e) => {
    const data = {
      roleid: e?.roleId,
      status: e?.status,
      rolename: e?.name,
      desc: e?.desc,
      menus: e?.menus?.join(','),
    };
    return updateRole(data);
  };
  const createRoleFn = (e) => {
    const data = {
      status: e?.status,
      rolename: e?.name,
      desc: e?.desc,
      menus: e?.menus?.join(','),
    };
    return createRole(data);
  };
  return (
    <FormUpdate<RoleInfo, RoleParam>
      afterRequest={afterRequest}
      titleCreate={formatMessage({ id: 'common.add', defaultMessage: '新建' })}
      titleUpdate={formatMessage({ id: 'common.edit', defaultMessage: '编辑' })}
      columns={formColumns}
      onFinishUpdate={updateRoleFn}
      onFinishCreate={createRoleFn}
      request={getRole}
      beforeSubmit={beforeSubmit}
      {...props}
    />
  );
};
