import React from 'react';
import { Card, Statistic, Row, Col, Table, Tag } from 'antd';
import { EyeOutlined, UserOutlined, GlobalOutlined, ClockCircleOutlined } from '@ant-design/icons';

const visitorsData = [
  {
    key: '1',
    id: 'V001',
    ip: '192.168.1.100',
    location: '北京',
    device: 'Desktop',
    browser: 'Chrome',
    visitTime: '2024-01-15 14:30:25',
    duration: '5分32秒',
    pages: 8,
    status: 'active'
  },
  {
    key: '2',
    id: 'V002',
    ip: '10.0.0.50',
    location: '上海',
    device: 'Mobile',
    browser: 'Safari',
    visitTime: '2024-01-15 14:28:10',
    duration: '3分15秒',
    pages: 5,
    status: 'left'
  },
  {
    key: '3',
    id: 'V003',
    ip: '172.16.0.25',
    location: '广州',
    device: 'Tablet',
    browser: 'Firefox',
    visitTime: '2024-01-15 14:25:45',
    duration: '7分48秒',
    pages: 12,
    status: 'active'
  },
  {
    key: '4',
    id: 'V004',
    ip: '203.0.113.5',
    location: '深圳',
    device: 'Desktop',
    browser: 'Edge',
    visitTime: '2024-01-15 14:20:30',
    duration: '2分20秒',
    pages: 3,
    status: 'left'
  },
];

const columns = [
  {
    title: '访客ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'IP地址',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: '地理位置',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: '设备类型',
    dataIndex: 'device',
    key: 'device',
  },
  {
    title: '浏览器',
    dataIndex: 'browser',
    key: 'browser',
  },
  {
    title: '访问时间',
    dataIndex: 'visitTime',
    key: 'visitTime',
  },
  {
    title: '停留时长',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: '浏览页面',
    dataIndex: 'pages',
    key: 'pages',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'active' ? 'green' : 'default'}>
        {status === 'active' ? '在线' : '已离开'}
      </Tag>
    ),
  },
];

const VisitorsPage = () => {
  const stats = {
    totalVisitors: visitorsData.length,
    activeVisitors: visitorsData.filter(v => v.status === 'active').length,
    totalPages: visitorsData.reduce((sum, v) => sum + v.pages, 0),
    avgDuration: '4分29秒'
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">访客统计</h1>
        <p className="text-gray-600">实时监控网站访客情况</p>
      </div>

      {/* 统计卡片 */}
      <Row gutter={[16, 16]} className="mb-8">
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="总访客数"
              value={stats.totalVisitors}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="在线访客"
              value={stats.activeVisitors}
              prefix={<EyeOutlined />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="总页面浏览"
              value={stats.totalPages}
              prefix={<GlobalOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="平均停留时长"
              value={stats.avgDuration}
              prefix={<ClockCircleOutlined />}
              valueStyle={{ color: '#fa8c16' }}
            />
          </Card>
        </Col>
      </Row>

      {/* 访客详情表格 */}
      <Card title="访客详情" className="shadow-sm">
        <Table
          columns={columns}
          dataSource={visitorsData}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `第 ${range[0]}-${range[1]} 条，共 ${total} 条记录`,
          }}
          scroll={{ x: 800 }}
        />
      </Card>
    </div>
  );
};

export default VisitorsPage;