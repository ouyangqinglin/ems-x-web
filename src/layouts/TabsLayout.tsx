import { useEffect } from 'react';
import KeepAliveTabs from '@/components/KeepAliveTabs';
import defaultSettings from '../../config/defaultSettings';
import styles from './index.less';
import { useModel } from 'umi';

const { tabsLayout } = defaultSettings;

const TabsLayout: React.FC = (props) => {
  const { dispatch } = useModel('page');

  const renderTabs = () => {
    if (tabsLayout) return <KeepAliveTabs />;
    else return null;
  };

  useEffect(() => {
    document.onvisibilitychange = () => {
      dispatch({ payload: { isVisible: document.visibilityState == 'visible' } });
    };
  }, []);

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
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default TabsLayout;
