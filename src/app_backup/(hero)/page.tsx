'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ImageCard from "@/components/ImageCard";
import { mockImageData } from '@/data/mockImageData';
import { Button, message, Avatar, Dropdown, Space } from 'antd';
import { LogoutOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const Page = () => {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // 检查用户登录状态
        const userStr = localStorage.getItem('user');

        if (userStr) {
            setUser(JSON.parse(userStr));
        }
        // 移除客户端重定向，由中间件处理
    }, []);

    const handleLogout = async () => {
        setLoading(true);

        try {
            // 调用退出登录 API
            const response = await fetch('/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
                }
            });

            if (response.ok) {
                // 清除本地存储的用户信息
                localStorage.removeItem('auth-token');
                localStorage.removeItem('user');

                message.success('退出登录成功');

                // 跳转到登录页
                setTimeout(() => {
                    router.push('/login');
                }, 500);
            } else {
                throw new Error('退出登录失败');
            }
        } catch (error) {
            message.error('退出登录失败，请重试');
            console.error('Logout error:', error);
        } finally {
            setLoading(false);
        }
    };

    const items: MenuProps['items'] = [
        {
            key: 'profile',
            label: (
                <Space>
                    <UserOutlined />
                    个人信息
                </Space>
            ),
        },
        {
            type: 'divider',
        },
        {
            key: 'logout',
            label: (
                <Space>
                    <LogoutOutlined />
                    退出登录
                </Space>
            ),
            onClick: handleLogout,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 顶部导航栏 */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold">图片展示系统</h1>
                        </div>

                        {user && (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">欢迎，{user.name || user.email}</span>

                                <Dropdown menu={{ items }} placement="bottomRight">
                                    <Button type="text" className="flex items-center space-x-2">
                                        <Avatar icon={<UserOutlined />} />
                                        <DownOutlined className="text-xs" />
                                    </Button>
                                </Dropdown>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 主要内容区域 */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">图片展示</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockImageData.map((image) => (
                            <ImageCard
                                key={image.id}
                                id={image.id}
                                title={image.title}
                                imageUrl={image.imageUrl}
                                description={image.description}
                                category={image.category}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;