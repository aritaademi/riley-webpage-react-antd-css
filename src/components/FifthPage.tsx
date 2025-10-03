import React from 'react';
import { Table, Typography, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CheckOutlined } from '@ant-design/icons';
import './FifthPage.css';
import smileyIcon from '../assets/smiley.png'; 

const { Title, Text } = Typography;

//define the types for each row in the table
interface DataType {
    key: string;
    company: React.ReactNode;  //anything that can be rendered in JSX.
    chat: React.ReactNode;
    schedules: React.ReactNode;
    tracking: React.ReactNode;
    suggestions: React.ReactNode;
    design: React.ReactNode;
  }

const columns: ColumnsType<DataType> = [
  {
    title: (
        <div className="feature-title"><img src={smileyIcon} alt=""  /></div>
    ),
    dataIndex: 'company',  //Key in the data row object to pull value from.
    key: 'company',
    render: (text: string) => <Text strong>{text}</Text>,
  },

  {
    title: (
      <div className="feature-title">
        24/7<br />Parenting<br />Expert Chat
        <br /><Text type="secondary" className="sub-text">Expert advice anytime</Text>
      </div>
    ),
    dataIndex: 'chat',
    key: 'chat',
    align: 'center' as const,
  },
  {
    title: (
      <div className="feature-title">
        Custom Baby<br />Schedules
        <br /><Text type="secondary" className="sub-text">Personalized routines</Text>
      </div>
    ),
    dataIndex: 'schedules',
    key: 'schedules',
    align: 'center' as const,
  },
  {
    title: (
      <div className="feature-title">
        All-In-One<br />Tracking
        <br /><Text type="secondary" className="sub-text">All data in one place</Text>
      </div>
    ),
    dataIndex: 'tracking',
    key: 'tracking',
    align: 'center' as const,
  },
  {
    title: (
      <div className="feature-title">
        Proactive<br />Suggestions
        <br /><Text type="secondary" className="sub-text">Tailored reminders</Text>
      </div>
    ),
    dataIndex: 'suggestions',
    key: 'suggestions',
    align: 'center' as const,
  },
  {
    title: (
      <div className="feature-title">
        Clutter Free<br />Design
        <br /><Text type="secondary" className="sub-text">Simple UI</Text>
      </div>
    ),
    dataIndex: 'design',
    key: 'design',
    align: 'center' as const,
  },
];

const data: DataType[] = [
  {
    key: '1',
    company: (
      <div className="riley-brand">
       
        <span className="riley-text">Riley</span>
      </div>
    ),
    chat: <CheckOutlined style={{ color: '#6c63ff', fontSize: '20px' }} />,
    schedules: <CheckOutlined style={{ color: '#6c63ff', fontSize: '20px' }} />,
    tracking: <CheckOutlined style={{ color: '#6c63ff', fontSize: '20px' }} />,
    suggestions: <CheckOutlined style={{ color: '#6c63ff', fontSize: '20px' }} />,
    design: <CheckOutlined style={{ color: '#6c63ff', fontSize: '20px' }} />,
  },
  {
    key: '2',
    company: 'Google',
    chat: '',
    schedules: '',
    tracking: <CheckOutlined style={{ color: '#6c63ff', fontSize: '20px' }} />,
    suggestions: '',
    design: '',
  },
  {
    key: '3',
    company: 'Huckleberry',
    chat: '',
    schedules: <CheckOutlined style={{ color: '#6c63ff', fontSize: '20px' }} />,
    tracking: '',
    suggestions: '',
    design: '',
  },
];

const FifthPage: React.FC = () => {
  return (
    <div className="why-riley-container">
      <Title level={2}>Why Riley Stands Out</Title>
      <Text>
        See how Riley outshines other parenting tools with intelligent features and tailored advice – one stop for all your parenting needs.
      </Text>

      <Card className="comparison-card">

        <Table
            columns={columns}
            dataSource={data}
            pagination={false}  //ensures all rows are visible at once.
            bordered

            />

      </Card>
    </div>
  );
};

export default FifthPage;




