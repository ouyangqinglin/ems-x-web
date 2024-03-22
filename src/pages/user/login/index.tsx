import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, message, Row } from 'antd';
import React, { useState } from 'react';
import { ProFormCheckbox, ProFormText, LoginForm } from '@ant-design/pro-form';
import { useIntl, history, FormattedMessage, SelectLang, useModel, useAliveController } from 'umi';
import { login } from '@/services/login';
import BGImg from '@/assets/image/login-bg.png';
import styles from './index.less';
import { clearSessionToken, setSessionToken, setUserRoleId } from '@/access';
import { useLocation } from '@/hooks';
import request from '@/utils/request';
//import { getRoutersInfo } from '@/services/session';
import { getLocaleMenus, getMenus } from '@/utils';
import { getRouters } from '@/services/session';

export type QueryParams = {
  redirect?: string;
};

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<any>({});
  const [type, setType] = useState<string>('account');
  const { initialState, refresh } = useModel('@@initialState');
  const location = useLocation<QueryParams>();
  const { clear } = useAliveController();

  const [uuid, setUuid] = useState<string>('');

  const intl = useIntl();

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const { code, data, msg, time } = await login({ ...values, uuid });
      console.log(code);
      if (+code === 200) {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: '登录成功！',
        });
        const current = new Date();
        const expireTime = current.setTime(current.getTime() + 1000 * 12 * 60 * 60);

        setSessionToken(data.token, data.token, expireTime);
        setUserRoleId(data.roleId);
        message.success(defaultLoginSuccessMessage);

        let redirectPath = location.query?.redirect || '/';
        const routesList = await getRouters(data.roleId);
        const resList = routesList.data;
        const menus = getLocaleMenus(resList);
        const antMenus = menus && getMenus(menus);
        const hasRedirectPath = antMenus.some((item) => item.key == redirectPath);
        if (!hasRedirectPath) {
          redirectPath = antMenus?.[0]?.key || '/';
        }

        const pathArr = redirectPath.split('?');
        await clear();
        history.push({
          pathname: pathArr[0],
          search: pathArr[1] ? '?' + pathArr[1] : '',
        });
        refresh();
        return;
      } else {
        console.log('login failed');
        clearSessionToken();
        // 如果失败去设置用户错误信息
        setUserLoginState({ status: 'error', type: 'account', massage: msg });
        message.error(msg);
      }
    } catch (error) {
      console.log('error', error);
      clearSessionToken();
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });
      message.error(defaultLoginFailureMessage);
    }
  };
  const { status, type: loginType, massage } = userLoginState;

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${BGImg})` }}>
      <div className={styles.content}>
        <LoginForm
          logo={
            initialState?.currentUser?.systemInfo?.icon ? (
              <img alt="logo" src={initialState?.currentUser?.systemInfo?.icon} />
            ) : (
              ''
            )
          }
          title={initialState?.currentUser?.systemInfo?.title}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          {status === 'error' && loginType === 'account' && <LoginMessage content={massage} />}
          {type === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.username.placeholder',
                  defaultMessage: '用户名',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.username.required"
                        defaultMessage="请输入用户名!"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.password.placeholder',
                  defaultMessage: '密码',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />
              <Row />
            </>
          )}

          {status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}
          {type === 'mobile' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={styles.prefixIcon} />,
                }}
                name="mobile"
                placeholder={intl.formatMessage({
                  id: 'pages.login.phoneNumber.placeholder',
                  defaultMessage: '手机号',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.phoneNumber.required"
                        defaultMessage="请输入手机号！"
                      />
                    ),
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: (
                      <FormattedMessage
                        id="pages.login.phoneNumber.invalid"
                        defaultMessage="手机号格式错误！"
                      />
                    ),
                  },
                ]}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="记住密码" />
            </ProFormCheckbox>
          </div>
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
