'use client'
import React from 'react';
import { Card, Statistic, Row, Col, Progress, List } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, EyeOutlined, UserOutlined, ShoppingCartOutlined, DollarOutlined } from '@ant-design/icons';

const analyticsData = {
  totalVisitors: 12543,
  visitorGrowth: 12.5,
  totalUsers: 3456,
  userGrowth: 8.3,
  totalOrders: 789,
  orderGrowth: -2.1,
  totalRevenue: 45678,
  revenueGrowth: 15.2
};

const recentActivities = [
  { id: 1, action: "新用户注册", user: "张三", time: "2分钟前", type: "success" },
  { id: 2, action: "完成订单支付", user: "李四", time: "5分钟前", type: "success" },
  { id: 3, action: "访问产品页面", user: "王五", time: "8分钟前", type: "info" },
  { id: 4, action: "订单取消", user: "赵六", time: "12分钟前", type: "error" },
  { id: 5, action: "新用户注册", user: "孙七", time: "15分钟前", type: "success" },
];

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      {/* 统计卡片 */}
      <Row gutter={[16, 16]}>
        <Col xs={12} sm={12} lg={12}>
          <Card>
            <Statistic
              title="总访问量"
              value={analyticsData.totalVisitors}
              precision={0}
              valueStyle={{
                color: analyticsData.visitorGrowth > 0 ? '#3f8600' : '#cf1322'
              }}
              prefix={<EyeOutlined />}
              suffix={
                <span className="text-sm ml-2">
                  {analyticsData.visitorGrowth > 0 ? (
                    <ArrowUpOutlined style={{ color: '#3f8600' }} />
                  ) : (
                    <ArrowDownOutlined style={{ color: '#cf1322' }} />
                  )}
                  {Math.abs(analyticsData.visitorGrowth)}%
                </span>
              }
            />
          </Card>
        </Col>
        <Col xs={12} sm={12} lg={12}>
          <Card>
            <Statistic
              title="活跃用户"
              value={analyticsData.totalUsers}
              precision={0}
              valueStyle={{
                color: analyticsData.userGrowth > 0 ? '#3f8600' : '#cf1322'
              }}
              prefix={<UserOutlined />}
              suffix={
                <span className="text-sm ml-2">
                  {analyticsData.userGrowth > 0 ? (
                    <ArrowUpOutlined style={{ color: '#3f8600' }} />
                  ) : (
                    <ArrowDownOutlined style={{ color: '#cf1322' }} />
                  )}
                  {Math.abs(analyticsData.userGrowth)}%
                </span>
              }
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={12} sm={12} lg={12}>
          <Card>
            <Statistic
              title="总订单"
              value={analyticsData.totalOrders}
              precision={0}
              valueStyle={{
                color: analyticsData.orderGrowth > 0 ? '#3f8600' : '#cf1322'
              }}
              prefix={<ShoppingCartOutlined />}
              suffix={
                <span className="text-sm ml-2">
                  {analyticsData.orderGrowth > 0 ? (
                    <ArrowUpOutlined style={{ color: '#3f8600' }} />
                  ) : (
                    <ArrowDownOutlined style={{ color: '#cf1322' }} />
                  )}
                  {Math.abs(analyticsData.orderGrowth)}%
                </span>
              }
            />
          </Card>
        </Col>
        <Col xs={12} sm={12} lg={12}>
          <Card>
            <Statistic
              title="总收入"
              value={analyticsData.totalRevenue}
              precision={0}
              valueStyle={{
                color: analyticsData.revenueGrowth > 0 ? '#3f8600' : '#cf1322'
              }}
              prefix={<DollarOutlined />}
              suffix={
                <span className="text-sm ml-2">
                  {analyticsData.revenueGrowth > 0 ? (
                    <ArrowUpOutlined style={{ color: '#3f8600' }} />
                  ) : (
                    <ArrowDownOutlined style={{ color: '#cf1322' }} />
                  )}
                  {Math.abs(analyticsData.revenueGrowth)}%
                </span>
              }
            />
          </Card>
        </Col>
      </Row>

      {/* 进度指标 */}
      <Card title="月度目标完成情况" size="small">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span>访问量目标</span>
              <span>83%</span>
            </div>
            <Progress percent={83} strokeColor="#1890ff" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>用户增长目标</span>
              <span>76%</span>
            </div>
            <Progress percent={76} strokeColor="#52c41a" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>收入目标</span>
              <span>92%</span>
            </div>
            <Progress percent={92} strokeColor="#faad14" />
          </div>
        </div>
      </Card>

      {/* 最近活动 */}
      <Card title="最近活动" size="small">
        <List
          size="small"
          dataSource={recentActivities}
          renderItem={(item) => (
            <List.Item>
              <div className="flex justify-between w-full items-center">
                <div>
                  <span className="font-medium">{item.user}</span>
                  <span className="text-gray-600 ml-2">{item.action}</span>
                </div>
                <span className="text-gray-400 text-sm">{item.time}</span>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default AnalyticsPage;