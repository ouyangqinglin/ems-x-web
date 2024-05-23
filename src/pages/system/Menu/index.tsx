import {
  PlusOutlined,
  DeleteOutlined,
  DownOutlined,
  RightOutlined,
  CaretDownFilled,
  CaretRightFilled,
} from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useIntl, FormattedMessage, useAccess } from 'umi';
import { FooterToolbar } from '@ant-design/pro-layout';
import WrapContent from '@/components/WrapContent';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import type { MenuType, MenuListParams } from './data.d';
import { getMenuList, removeMenu, addMenu, updateMenu } from './service';
import UpdateForm from './components/edit';
import { buildTreeData } from '@/utils/utils';
import type { DataNode } from 'antd/lib/tree';
import { createIcon } from '@/utils/IconUtil';
import YTProTable from '@/components/YTProTable';

/* *
 *
 * @author whiteshader@163.com
 * @datetime  2021/09/16
 *
 * */

/**
 * 添加节点
 *
 * @param fields
 */
const handleAdd = async (fields: MenuType) => {
  const hide = message.loading('正在添加');
  const data = {
    source_name: fields.menuName,
    source_id: fields.menuId,
    parent_id: fields.parentId,
    menu_type: fields.menuType,
  };
  try {
    const resp = await addMenu({ ...data, ...fields });
    hide();
    if (resp.code === 200) {
      message.success('添加成功');
    } else {
      message.error(resp.msg);
    }
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};

/**
 * 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: MenuType) => {
  const hide = message.loading('正在配置');
  const data = {
    source_name: fields.menuName,
    source_id: fields.menuId,
    parent_id: fields.parentId,
    menu_type: fields.menuType,
  };
  try {
    const resp = await updateMenu({ ...data, ...fields });
    hide();
    if (resp.code === 200) {
      message.success('配置成功');
    } else {
      message.error(resp.msg);
    }
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};

const handleRemoveOne = async (selectedRow: MenuType) => {
  const hide = message.loading('正在删除');
  if (!selectedRow) return true;
  try {
    const params = selectedRow.menuId;
    const resp = await removeMenu(params);
    hide();
    if (resp.code === 200) {
      message.success('删除成功，即将刷新');
    } else {
      message.error(resp.msg);
    }
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const MenuTableList: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<MenuType>();
  const [selectedRowsState, setSelectedRows] = useState<MenuType[]>([]);

  const [menuTree, setMenuTree] = useState<DataNode[]>([]);
  const [visibleOptions, setVisibleOptions] = useState<any>([]);
  const [statusOptions, setStatusOptions] = useState<any>([]);
  const access = useAccess();

  /** 国际化配置 */
  const intl = useIntl();

  const columns: ProColumns<MenuType>[] = [
    {
      title: <FormattedMessage id="system.Menu.menu_name" defaultMessage="菜单名称" />,
      dataIndex: 'source_name',
      width: 200,
      ellipsis: true,
      render: (_, record) => {
        return (
          <>
            <span>{record.source_name}</span>
          </>
        );
      },
      search: {
        transform(val) {
          return {
            menuname: val,
          };
        },
      },
    },
    {
      title: <FormattedMessage id="system.Menu.icon" defaultMessage="菜单图标" />,
      dataIndex: 'icon',
      valueType: 'text',
      hideInSearch: true,
      render: (text) => createIcon(text),
    },
    {
      title: <FormattedMessage id="system.Menu.order_num" defaultMessage="显示顺序" />,
      dataIndex: 'sort',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="system.Menu.path" defaultMessage="路由地址" />,
      dataIndex: 'path',
      valueType: 'text',
    },
    {
      title: <FormattedMessage id="system.Menu.menu_type" defaultMessage="菜单类型" />,
      dataIndex: 'menuType',
      valueType: 'select',
      hideInSearch: true,
      valueEnum: {
        1: '目录',
        0: '菜单',
        2: '按钮',
      },
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="操作" />,
      dataIndex: 'option',
      width: '220px',
      valueType: 'option',
      render: (_, record) => [
        <Button
          type="link"
          size="small"
          key="edit"
          hidden={!access.hasPerms('system:menu:edit')}
          onClick={() => {
            setModalVisible(true);
            setCurrentRow(record);
          }}
        >
          <FormattedMessage id="pages.searchTable.edit" defaultMessage="编辑" />
        </Button>,
        <Button
          type="link"
          size="small"
          danger
          key="batchRemove"
          hidden={!access.hasPerms('system:menu:remove')}
          onClick={async () => {
            Modal.confirm({
              title: '删除',
              content: '确定删除该项吗？',
              okText: '确认',
              cancelText: '取消',
              onOk: async () => {
                const success = await handleRemoveOne(record);
                if (success) {
                  if (actionRef.current) {
                    actionRef.current.reload();
                  }
                }
              },
            });
          }}
        >
          <FormattedMessage id="pages.searchTable.delete" defaultMessage="删除" />
        </Button>,
      ],
    },
  ];

  return (
    <WrapContent>
      <div style={{ width: '100%', float: 'right' }}>
        <YTProTable<MenuType>
          actionRef={actionRef}
          rowKey="source_id"
          key="menuList"
          toolBarRender={() => [
            <Button
              type="primary"
              key="add"
              hidden={!access.hasPerms('system:menu:add')}
              onClick={async () => {
                setCurrentRow(undefined);
                setModalVisible(true);
              }}
            >
              <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
            </Button>,
          ]}
          request={(params) =>
            getMenuList({ ...params } as MenuListParams).then((res) => {
              console.log(res);
              const newMenu = [];
              res.data?.forEach((item) => {
                item.menuName = item.source_name;
                item.menuId = item.source_id;
                item.parentId = item.parent_id;
                item.menuType = item.menu_type;
                newMenu.push(item);
                if (item.children && item.children.length) {
                  item.children.forEach((child) => {
                    child.parentName = item.source_name;
                    child.parentId = child.parent_id;
                    child.menuName = child.source_name;
                    child.menuId = child.source_id;
                    child.menuType = child.menu_type;
                    newMenu.push(child);
                  });
                }
              });
              const menu = { id: 0, label: '主类目', children: [] as DataNode[], value: 0 };
              const memuData = buildTreeData(newMenu, 'source_id', 'source_name', '', '', '');
              menu.children = memuData;
              const treeData: any = [];
              treeData.push(menu);
              setMenuTree(treeData);
              res.data.list = memuData;
              res.data.total = memuData.length;
              return res;
            })
          }
          columns={columns}
          rowSelection={{
            onChange: (_, selectedRows) => {
              setSelectedRows(selectedRows);
            },
          }}
          expandable={{
            expandIcon: ({ expanded, expandable, record, onExpand }) => {
              return (
                <>
                  {expandable ? (
                    <>
                      {expanded ? (
                        <CaretDownFilled
                          className="mr8 cursor table-expand-icon"
                          onClick={(e) => onExpand(record, e)}
                        />
                      ) : (
                        <CaretRightFilled
                          className="mr8 cursor table-expand-icon"
                          onClick={(e) => onExpand(record, e)}
                        />
                      )}
                    </>
                  ) : (
                    <span className="mr8 table-expand-icon"></span>
                  )}
                </>
              );
            },
          }}
        />
      </div>
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="已选择" />
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
            </div>
          }
        >
          <Button
            key="remove"
            hidden={!access.hasPerms('system:menu:remove')}
            onClick={async () => {
              Modal.confirm({
                title: '删除',
                content: '确定删除该项吗？',
                okText: '确认',
                cancelText: '取消',
                onOk: async () => {
                  const success = await handleRemove(selectedRowsState);
                  if (success) {
                    setSelectedRows([]);
                    actionRef.current?.reloadAndRest?.();
                  }
                },
              });
            }}
          >
            <FormattedMessage id="pages.searchTable.batchDeletion" defaultMessage="批量删除" />
          </Button>
        </FooterToolbar>
      )}
      <UpdateForm
        onSubmit={async (values) => {
          let success = false;
          if (values.menuId) {
            success = await handleUpdate({ ...values } as MenuType);
          } else {
            success = await handleAdd({ ...values } as MenuType);
          }
          if (success) {
            setModalVisible(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          setModalVisible(false);
          setCurrentRow(undefined);
        }}
        visible={modalVisible}
        values={currentRow || {}}
        menuTree={menuTree}
      />
    </WrapContent>
  );
};

export default MenuTableList;
