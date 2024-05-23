/*
 * @Description:
 * @Author: YangJianFei
 * @Date: 2023-07-26 09:11:39
 * @LastEditTime: 2024-03-13 15:56:19
 * @LastEditors: YangJianFei
 * @FilePath: \energy-cloud-frontend\src\pages\system\UserManage\Account.tsx\Account.tsx
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import YTProTable from '@/components/YTProTable';
import { tableColumns, getFormColumns, AccountDataType } from './config';
import { ProConfigProvider } from '@ant-design/pro-components';
import { ActionType } from '@ant-design/pro-components';
import { useBoolean } from 'ahooks';
import SchemaForm, { FormTypeEnum } from '@/components/SchemaForm';
import { getPage, addData, editData, deleteData, getRoles } from './service';
import { message } from 'antd';
import { tableSelectValueTypeMap } from '@/components/TableSelect';
import type { TABLESELECTVALUETYPE } from '@/components/TableSelect';
import { OptionType } from '@/types';
import { YTProTableProps } from '@/components/YTProTable/typing';
let tableList: any = [];
export type AccountProps = {
  params?: Record<string, any>;
  type?: any;
};

const Account: React.FC<AccountProps> = () => {
  const actionRef = useRef<ActionType>();
  const [openForm, { set, setTrue: setOpenFormTrue }] = useBoolean(false);
  const [roleOptions, setRoleOptions] = useState<OptionType[]>([]);
  const [formInfo, setFormInfo] = useState({
    type: FormTypeEnum.Add,
    id: '',
  });

  const showAdd = useMemo(() => {
    return true;
  }, []);

  const formColumns = useMemo(() => {
    return getFormColumns(roleOptions);
  }, [roleOptions]);

  const initialValues = useMemo(() => {
    const result: AccountDataType = {};
    return result;
  }, [roleOptions]);

  const requestPage = useCallback((tableParams) => {
    return getPage({ ...tableParams }).then((res) => {
      tableList = res.data?.list;
      return {
        data: res.data,
      };
    });
  }, []);

  const onSuccess = useCallback(() => {
    actionRef?.current?.reload?.();
  }, []);

  const onAddClick = useCallback(() => {
    setFormInfo({
      type: FormTypeEnum.Add,
    });
    setOpenFormTrue();
  }, []);

  const onEditClick = useCallback((_, row: AccountDataType) => {
    setFormInfo({
      type: FormTypeEnum.Edit,
      id: row.id as string,
    });
    setOpenFormTrue();
  }, []);

  const onDeleteClick = useCallback((_, record: AccountDataType) => {
    return deleteData({ userIds: [record.userId] }).then(({ data }) => {
      if (data) {
        message.success('删除成功');
        onSuccess();
      }
    });
  }, []);

  const options = useMemo(() => {
    const result: YTProTableProps<any, any>['option'] = {};
    result.onEditChange = onEditClick;
    result.onDeleteChange = onDeleteClick;
    return result;
  }, []);

  const beforeSubmit = (formData: AccountDataType) => {};

  const getEditData = (e) => {
    const data = tableList.find((item) => item.id === e.userid);
    return Promise.resolve({
      code: 200,
      data,
    });
  };

  const afterRequest = useCallback((formData: AccountDataType) => {}, []);
  useEffect(() => {
    actionRef?.current?.reloadAndRest?.();
  }, []);
  //获取角色下拉框数据
  useEffect(() => {
    if (openForm) {
      getRoles({
        current: 1,
        pageSize: 500,
      }).then(({ data }) => {
        const result =
          data?.list?.map?.((item: any) => {
            return {
              ...item,
              label: item?.name,
              value: item?.name,
            };
          }) || [];
        setRoleOptions(result);
      });
    }
  }, [openForm]);

  return (
    <>
      <YTProTable
        actionRef={actionRef}
        columns={tableColumns}
        request={requestPage}
        search={{
          labelWidth: 75,
        }}
        form={{
          labelAlign: 'left',
        }}
        toolBarRenderOptions={{
          add: {
            show: showAdd,
            onClick: onAddClick,
            text: '新建',
          },
        }}
        option={options}
      />
      <ProConfigProvider valueTypeMap={tableSelectValueTypeMap}>
        <SchemaForm<AccountDataType, TABLESELECTVALUETYPE>
          width="816px"
          type={formInfo.type}
          columns={formColumns}
          open={openForm}
          onOpenChange={set}
          shouldUpdate={false}
          id={formInfo.id}
          idKey="userid"
          editData={editData}
          addData={addData}
          getData={getEditData}
          beforeSubmit={beforeSubmit}
          afterRequest={afterRequest}
          onSuccess={onSuccess}
          grid={true}
          colProps={{
            span: 8,
          }}
          initialValues={initialValues}
        />
      </ProConfigProvider>
    </>
  );
};

export default Account;
