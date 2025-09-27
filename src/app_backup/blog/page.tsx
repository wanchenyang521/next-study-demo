'use client'
import React from 'react';
import { Avatar, List, Tag, Space } from 'antd';
import { EyeOutlined, LikeOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { blogPosts } from '@/data'
import Link from "next/link";

const Page = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">博客文章</h1>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={blogPosts}
                renderItem={(item) => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <Space key="stats">
                                <EyeOutlined /> {item.views}
                            </Space>,
                            <Space key="likes">
                                <LikeOutlined /> {item.likes}
                            </Space>,
                            <Space key="time">
                                <ClockCircleOutlined /> {item.readTime}分钟阅读
                            </Space>
                        ]}
                        extra={
                            <img
                                width={200}
                                alt="cover"
                                src={item.coverImage}
                                className="rounded-lg"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.authorAvatar} size="large" />}
                            title={
                                <Link
                                    href={`/blog/${item.id}`}
                                    className="text-xl font-semibold hover:text-blue-600 transition-colors"
                                >
                                    {item.title}
                                </Link>
                            }
                            description={
                                <div>
                                    <div className="mb-2">
                                        <span className="text-gray-600">作者: {item.author}</span>
                                        <span className="text-gray-400 mx-2">•</span>
                                        <span className="text-gray-600">{item.publishDate}</span>
                                        <span className="text-gray-400 mx-2">•</span>
                                        <Tag color="blue">{item.category}</Tag>
                                    </div>
                                    <p className="text-gray-700 mb-3">{item.excerpt}</p>
                                    <div>
                                        {item.tags.map(tag => (
                                            <Tag key={tag} className="mb-1">{tag}</Tag>
                                        ))}
                                    </div>
                                </div>
                            }
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Page;