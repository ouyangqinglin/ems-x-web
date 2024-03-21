import { Space, message } from 'antd';
import React, { useCallback,useEffect,useState } from 'react';
import { useModel } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';
import moment from 'moment';
export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [tiem, setTime] = useState()
  
  useEffect(() => { 
    const timer = setInterval(() => {
      const currentTime = moment().format('YYYY-MM-DD dddd')
      setTime(currentTime as any)
    },1000)
    return () => { 
        clearInterval(timer)
    }
  },[])
  


  if (!initialState || !initialState.settings) {
    return null;
  }
  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  

  return (
    <Space className={className} size={16}>
      <span>{ tiem}</span>
      <Avatar menu />
    </Space>
  );
};

export default GlobalHeaderRight;
