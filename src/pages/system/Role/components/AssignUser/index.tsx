import { useEffect, useCallback, useState } from 'react';
import { Form, message, Transfer } from 'antd';
import type { TransferProps } from 'antd';
import YTModalForm from '@/components/YTModalForm';
import { formatMessage } from '@/utils';
import styles from './index.less';
import { assignUser } from '../../service';

const DEFAULT_PROPS = {
  layout: 'vertical',
  labelCol: { flex: 'auto' },
  wrapperCol: { flex: 'auto' },
};

export const AssignUser = (props) => {
  const { operations, id, onSuccess, initialValues, ...resetProps } = props;

  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>([]);

  const onFinish = useCallback(
    (formData) => {
      const userNames = targetKeys;
      const data = {
        rolename: formData.name,
        usernames: userNames.join(','),
      };
      return assignUser(data).then((res) => {
        if (res.code === 200) {
          message.success(formatMessage({ id: 'common.successSaved', defaultMessage: '保存成功' }));
          onSuccess?.();
          return true;
        }
      });
    },
    [id, targetKeys],
  );

  useEffect(() => {
    if (props.visible) {
      form?.resetFields();
      if (id) {
        form?.setFieldsValue(initialValues);
      }
      if (initialValues) {
        const source = initialValues?.allUser?.map((item) => ({ key: item, title: item }));
        const target = initialValues?.users?.split(',');
        setDataSource(source);
        setTargetKeys(target);
      }
    }
  }, [props.visible, form, id, initialValues]);

  const handleChange: TransferProps['onChange'] = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
  };

  const handleSearch: TransferProps['onSearch'] = (dir, value) => {
    console.log('search:', dir, value);
  };

  const filterOption = (inputValue: string, option) => option.key.indexOf(inputValue) > -1;

  const columns: any[] = [
    {
      title: formatMessage({ id: 'system.Role.role_name', defaultMessage: '角色名称' }),
      fieldProps: {
        placeholder: formatMessage({ id: 'common.pleaseEnter', defaultMessage: '请输入' }),
      },
      formItemProps: {
        rules: [
          {
            required: true,
            message: formatMessage({ id: 'common.pleaseEnter', defaultMessage: '请输入' }),
          },
        ],
      },
      dataIndex: 'name',
    },
    {
      title: '分配用户',
      dataIndex: 'allUser',
      renderFormItem: () => {
        return (
          <Transfer
            dataSource={dataSource}
            className={styles.myTransfer}
            titles={['用户列表', '已分配']}
            showSearch
            filterOption={filterOption}
            targetKeys={targetKeys}
            onChange={handleChange}
            onSearch={handleSearch}
            render={(item) => item.title}
          />
        );
      },
      colProps: {
        span: 24,
      },
    },
  ];
  return (
    <YTModalForm<FormData>
      width={680}
      form={form}
      title="分配用户"
      {...DEFAULT_PROPS}
      colProps={{
        span: 12,
      }}
      rowProps={{
        gutter: [16, 0],
      }}
      layoutType={'ModalForm'}
      columns={columns}
      operations={operations}
      onFinish={onFinish}
      {...resetProps}
    />
  );
};
