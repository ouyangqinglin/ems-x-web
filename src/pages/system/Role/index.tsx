import React, { useCallback, useRef, useState } from 'react';
import type { ActionType } from '@ant-design/pro-components';
import YTProTable from '@/components/YTProTable';
import type { YTProTableCustomProps } from '@/components/YTProTable/typing';
import { deleteRole, getRoleList } from './service';
import { RoleUpdate } from './RoleUpdate';
import { AssignUser } from './components/AssignUser';
import { FormOperations } from '@/components/YTModalForm/typing';
import { useToggle } from 'ahooks';
import { Button, message, Modal } from 'antd';
import { effectStatus } from '@/utils/dict';
import { formatMessage } from '@/utils';

const Authority: React.FC<AuthorityProps> = (props) => {
  const [state, { set }] = useToggle<boolean>(false);
  const [visibleAssign, { set: setAssign }] = useToggle<boolean>(false);
  const [operations, setOperations] = useState(FormOperations.CREATE);
  const [initialValues, setInitialValues] = useState<RoleInfo>({} as RoleInfo);
  const actionRef = useRef<ActionType>(null);

  const customConfig: YTProTableCustomProps<RoleInfo, any> = {
    toolBarRenderOptions: {},
  };
  customConfig.toolBarRenderOptions = {
    add: {
      onClick() {
        setInitialValues({} as RoleInfo);
        setOperations(FormOperations.CREATE);
        set(true);
      },
      text: '新建',
    },
  };

  const onEditClick = (record) => {
    const copyRecord = { ...record };
    const checkedVal = copyRecord?.menus.split(',');
    for (let i = 0; i < checkedVal.length; i++) {
      checkedVal[i] = +checkedVal[i];
    }
    copyRecord.menus = checkedVal;
    setInitialValues({ ...copyRecord });
    setOperations(FormOperations.UPDATE);
    set(true);
  };

  const onSettingClick = (record) => {
    setInitialValues(record);
    setAssign(true);
  };

  const rowBar = (_: any, record) => (
    <>
      <Button type="link" size="small" key="in" onClick={() => onEditClick(record)}>
        编辑
      </Button>
      <Button
        type="link"
        size="small"
        key="delete"
        onClick={() => {
          Modal.confirm({
            title: '删除',
            content: '请确认是否删除',
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
              deleteRole({ roleid: record.id }).then(() => {
                message.success('删除成功');
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              });
            },
          });
        }}
      >
        删除
      </Button>
      <Button type="link" size="small" key="in" onClick={() => onSettingClick(record)}>
        分配用户
      </Button>
    </>
  );

  const visibleUpdated = operations !== FormOperations.READ;

  const onSuccess = useCallback(() => {
    actionRef?.current?.reload?.();
  }, [actionRef]);

  const requestList = useCallback((params) => {
    let data = {};
    return getRoleList({ ...params }).then((res) => {
      res?.data?.list?.forEach((i) => {
        i.allUser = res?.data?.menus?.split(',');
      });
      data = res.data;
      return {
        data,
      };
    });
  }, []);
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 48,
    },
    {
      title: '角色名称',
      dataIndex: 'name',
      width: 120,
      ellipsis: true,
      search: {
        transform: (value) => {
          return {
            rolename: value,
          };
        },
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'select',
      width: 100,
      valueEnum: effectStatus,
    },
    {
      title: '备注',
      dataIndex: 'desc',
      width: 150,
      ellipsis: true,
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createtime',
      valueType: 'dateTime',
      render: (_, record) => <span>{record.createtime}</span>,
      search: {
        transform: (value) => {
          return {
            createtimebegin: value[0],
            createtimebegin: value[1],
          };
        },
      },
      width: 150,
    },
    {
      title: formatMessage({ id: 'common.operate', defaultMessage: '操作' }),
      valueType: 'option',
      width: 200,
      fixed: 'right',
      render: rowBar,
    },
  ];
  return (
    <>
      <YTProTable<RoleInfo, RoleInfo>
        columns={columns}
        actionRef={actionRef}
        {...customConfig}
        request={requestList}
        rowKey="roleId"
      />
      <RoleUpdate
        {...{
          operations: operations,
          visible: visibleUpdated && state,
          onVisibleChange: set,
          onSuccess: onSuccess,
          initialValues: initialValues,
          id: initialValues?.id,
        }}
      />
      <AssignUser
        {...{
          operations: operations,
          visible: visibleAssign,
          onVisibleChange: setAssign,
          onSuccess: onSuccess,
          initialValues: initialValues,
          id: initialValues?.id,
        }}
      />
    </>
  );
};

export default Authority;
