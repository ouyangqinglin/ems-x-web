/*
 *@Author: aoshilin
 *@Date: 2023-11-03 15:25:48
 *@parms: 自研ems详情-配置--系统化设置
 *@Description:
 */
import React, { useState, useEffect, useCallback } from 'react';
import type { ProtectFormType, RemoteSettingDataType } from './config';
import Button from 'antd/lib/button';
import SchemaForm, { FormTypeEnum, SchemaFormProps } from '@/components/SchemaForm';
import { useBoolean } from 'ahooks';
import { editEquipConfig } from '@/services/equipment';
import moment from 'moment';
import { DeviceTypeEnum, OnlineStatusEnum } from '@/utils/dictionary';
import { formatMessage } from '@/utils';
import { useAuthority, useSourceId } from '@/hooks';
import { editDeviceData } from '@/services/device';

export type ConfigModalType<T = any> = Omit<SchemaFormProps, 'beforeSubmit'> & {
  deviceId?: string;
  realTimeData?: Record<string, any>;
  columns: any;
  serviceId: string;
  title: string;
  beforeSubmit?: (data: RemoteSettingDataType<T>) => void | boolean | any;
  showClickButton?: boolean;
  deviceData?: Record<string, any>;
  authority?: string;
};

const ConfigModal: React.FC<ConfigModalType> = (props) => {
  const {
    realTimeData,
    deviceId,
    columns,
    serviceId,
    title,
    open,
    showClickButton = true,
    beforeSubmit,
    onOpenChange,
    deviceData,
    authority,
    ...restProps
  } = props;
  const [openSchemaForm, { set, setTrue }] = useBoolean(false);
  const [isEditing, { setFalse: setIsEditingFalse, setTrue: setIsEditingTrue }] = useBoolean(false);
  const [initialValues, setInitialValues] = useState<ProtectFormType['realTimeData']>();
  const { passAuthority } = useAuthority(authority ? [authority] : []);
  const { sourceId } = useSourceId();

  const onBeforeSubmit = useCallback(
    (formData: any) => {
      formData.sourceId = sourceId;
      const submitResult = beforeSubmit?.(formData);
      return submitResult ?? formData;
    },
    [sourceId],
  );

  const onClick = useCallback(() => {
    setTrue();
  }, []);

  const mergedOnOpenChange = useCallback(
    (opened: boolean) => {
      if (showClickButton) {
        set(opened);
      } else {
        onOpenChange?.(opened);
      }
    },
    [showClickButton],
  );

  useEffect(() => {
    if (openSchemaForm || open) {
      setIsEditingFalse();
    }
  }, [openSchemaForm, open]);

  useEffect(() => {
    if (!isEditing || (!openSchemaForm && !open)) {
      setInitialValues({ ...realTimeData });
    }
  }, [realTimeData]);

  return (
    <>
      <div>
        {showClickButton && (!authority || passAuthority) ? (
          <Button
            type="primary"
            onClick={onClick}
            disabled={deviceData?.networkStatus === OnlineStatusEnum.Offline}
          >
            {formatMessage({ id: 'device.configurationParameter', defaultMessage: '配置参数' })}
          </Button>
        ) : (
          <></>
        )}
        <SchemaForm
          onValuesChange={setIsEditingTrue}
          open={open || openSchemaForm}
          onOpenChange={mergedOnOpenChange}
          title={title}
          width={'552px'}
          type={FormTypeEnum.Edit}
          columns={columns}
          className={'distributeParameters'}
          initialValues={initialValues}
          editData={editDeviceData}
          beforeSubmit={onBeforeSubmit}
          grid={true}
          colProps={{
            span: 12,
          }}
          {...restProps}
        />
      </div>
    </>
  );
};

export default ConfigModal;
