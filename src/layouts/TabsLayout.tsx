import KeepAliveTabs from '@/components/KeepAliveTabs';
import defaultSettings from '../../config/defaultSettings';
import { Button } from 'antd';
import styles from './index.less';
import { ExportOutlined,UndoOutlined } from '@ant-design/icons';
const { tabsLayout } = defaultSettings;

/* *
 *
 * @author whiteshader@163.com
 * @datetime  2022/02/22
 *
 * */

const TabsLayout: React.FC = (props) => {
  
  const renderTabs = () => {
    if (tabsLayout) return <KeepAliveTabs />;
    else return null;
  };

  return (
    <div>
      {renderTabs()}
      
      <div className={styles.tabsContent}>
        <div
          className={styles.contain}
          style={
            [
              '/site-monitor/device-detail',
              '/equipment/device-detail',
              '/station/device-detail',
            ].includes(props?.location?.pathname?.replace?.(/\/$/, ''))
              ? { background: 'none' }
              : {}
          }
        >
          <div className={styles.systemWrapper}>
            <span className={styles.systemTime}>2024-03-15 11:45:24 星期五</span>
            <Button><UndoOutlined/>更新</Button>
            <Button className='ml16' type="primary"><ExportOutlined/>导出数据</Button>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default TabsLayout;
