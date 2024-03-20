import styles from './index.less';
import { Select } from 'antd';

export default () => {
  const options = [
    { label: '1s', value: 1 },
    { label: '2s', value: 2 },
    { label: '3s', value: 3 },
    { label: '5s', value: 5 },
    { label: '7s', value: 7 },
    { label: '9s', value: 9 },
    { label: '10s', value: 10 },
    { label: '12s', value: 12 },
    { label: '13s', value: 13 },
    { label: '14s', value: 4 },
    { label: '15s', value: 15 },
  ];

  return (
    <div className={styles.wrapper}>
      <div>
        <span>打开成功：</span>
        <span>COM1 9600</span>
      </div>
      <div className={styles.right_content}>
        <div>
          <span>通信状态：</span>
          <span>通信状态：</span>
        </div>
        <div>
          <span>SN：</span>
          <span>L4M0KC0685</span>
        </div>
        <div>
          <span>自动刷新频率：</span>
          <Select options={options} />
        </div>
      </div>
    </div>
  );
};
