'use client'
import React from 'react';
import { Avatar, List, Card, Progress, Tag } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const teamMembers = [
  {
    id: 1,
    name: "张三",
    role: "前端开发工程师",
    email: "zhangsan@example.com",
    phone: "138****1234",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zhangsan",
    progress: 85,
    status: "active",
    projects: 5
  },
  {
    id: 2,
    name: "李四",
    role: "后端开发工程师",
    email: "lisi@example.com",
    phone: "139****5678",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisi",
    progress: 92,
    status: "active",
    projects: 7
  },
  {
    id: 3,
    name: "王五",
    role: "UI/UX 设计师",
    email: "wangwu@example.com",
    phone: "137****9012",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wangwu",
    progress: 78,
    status: "busy",
    projects: 3
  },
  {
    id: 4,
    name: "赵六",
    role: "产品经理",
    email: "zhaoliu@example.com",
    phone: "136****3456",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zhaoliu",
    progress: 96,
    status: "active",
    projects: 8
  }
];

const TeamPage = () => {
  return (
    <div className="space-y-4">
      {/* 团队统计 */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card size="small">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{teamMembers.length}</div>
            <div className="text-gray-600">团队成员</div>
          </div>
        </Card>
        <Card size="small">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {teamMembers.reduce((sum, member) => sum + member.projects, 0)}
            </div>
            <div className="text-gray-600">进行项目</div>
          </div>
        </Card>
      </div>

      {/* 团队成员列表 */}
      <List
        itemLayout="horizontal"
        dataSource={teamMembers}
        renderItem={(member) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size="large" src={member.avatar} />}
              title={
                <div className="flex items-center justify-between">
                  <span className="font-medium">{member.name}</span>
                  <Tag color={member.status === 'active' ? 'green' : 'orange'}>
                    {member.status === 'active' ? '活跃' : '忙碌'}
                  </Tag>
                </div>
              }
              description={
                <div className="space-y-2">
                  <div className="text-gray-600">{member.role}</div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MailOutlined />
                      {member.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <PhoneOutlined />
                      {member.phone}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      项目进度: {member.progress}%
                    </span>
                    <span className="text-sm text-gray-600">
                      {member.projects} 个项目
                    </span>
                  </div>
                  <Progress percent={member.progress} size="small" />
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TeamPage;