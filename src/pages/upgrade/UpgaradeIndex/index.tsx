import React, { useState, useRef, useEffect } from 'react';
import styles from './index.less';
import Card from '@/components/Card';
import Run from '@/components/Device/Run';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Select, Upload, Form, Input, Progress } from 'antd';
import { upgrade, upgradeInfo, upgrading } from '@/services/upgrade';
import { systemInfo } from './helper';
let timer = null;
const UpgradeIndex: React.FC = () => {
  const [realTimeData, setRealTimeData] = useState<any[]>([]);
  const [file, setFile] = useState({});
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState('已下发');
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    upgradeInfo().then((res) => {
      if (+res.data === 200) {
        setRealTimeData(res?.data);
      }
    });
  }, []);

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append('file', file.originFileObj);
    formData.append('version', values.version);
    formData.append('module', values.module);
    upgradeFn(formData);
  };
  function upgradeFn(formData) {
    upgrade(formData).then((res) => {
      if (+res.code === 200) {
        // 查询升级进度
        setShow(true);
        upgradingFn();
        clearInterval(timer);
        timer = setInterval(() => {
          upgradingFn();
        }, 3000);
      }
    });
  }

  function upgradingFn() {
    upgrading().then((res) => {
      if (+res.code === 200) {
        if (+res.data.process === 0) {
          setStatus('已下发');
          setProgress(0);
          return;
        }
        if (+res.data.process === 100) {
          setStatus('升级完成');
          setProgress(100);
          clearInterval(timer);
          return;
        }
        if (+res.data.process === 101) {
          setShow(false);
          setStatus('升级失败');
          clearInterval(timer);
          return;
        }
        setStatus('升级中');
        setProgress(res.data.process);
      }
    });
  }
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const changeFile = ({ fileList }) => {
    setFile({
      ...fileList[0],
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className={styles.upgrade}>
        <Card className="h-full">
          <Run
            realTimeData={realTimeData}
            groupData={systemInfo}
            detailProps={{
              column: 2,
              labelStyle: {},
            }}
          />
        </Card>
        <div className="mt16"></div>
        <Card className="h-full">
          <p>升级</p>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="升级模块"
              name="module"
              rules={[
                {
                  required: true,
                  message: '请选择升级模块!',
                },
              ]}
            >
              <Select
                options={[
                  {
                    value: 1,
                    label: 'EMS',
                  },
                  {
                    value: 2,
                    label: '单片机程序',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="版本号"
              name="version"
              rules={[
                {
                  required: true,
                  message: '请输入版本号!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="升级文件"
              valuePropName="fileList"
              name="file"
              getValueFromEvent={normFile}
              rules={[
                {
                  required: true,
                  message: '请上传升级文件!',
                },
              ]}
            >
              <Upload
                maxCount={1}
                onChange={changeFile}
                beforeUpload={() => false}
                name="file"
                id="file"
              >
                <Button icon={<UploadOutlined />}>导入升级文件</Button>
              </Upload>
            </Form.Item>
            {show && (
              <Form.Item>
                <div className={styles.progress}>
                  <Progress percent={progress}></Progress>
                  <span>{status}</span>
                </div>
              </Form.Item>
            )}
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                开始升级
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default UpgradeIndex;
