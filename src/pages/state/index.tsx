import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const Customer: React.FC = () => {
  return <div>1111</div>;
};

const Index: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: <Customer />,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default Index;
