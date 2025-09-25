'use client'
import React from 'react';
import { Avatar, Tag, Space, Button, Divider } from 'antd';
import { ArrowLeftOutlined, EyeOutlined, LikeOutlined, ClockCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { getPostById, getRelatedPosts } from '@/data';
import Link from "next/link";
import { useParams, useRouter } from 'next/navigation';

const Page = () => {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const post = getPostById(id);
    const relatedPosts = getRelatedPosts(id);

    if (!post) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
                <Button type="primary" onClick={() => router.push('/blog')}>
                    返回博客列表
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* 返回按钮 */}
            <Button
                type="link"
                icon={<ArrowLeftOutlined />}
                onClick={() => router.back()}
                className="mb-6 p-0"
            >
                返回上一页
            </Button>

            {/* 文章头部 */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                {/* 文章元信息 */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <Avatar src={post.authorAvatar} size="large" />
                        <div>
                            <div className="font-medium">{post.author}</div>
                            <div className="text-gray-500 text-sm">作者</div>
                        </div>
                    </div>

                    <Divider type="vertical" />

                    <Space>
                        <CalendarOutlined />
                        <span>{post.publishDate}</span>
                    </Space>

                    <Space>
                        <ClockCircleOutlined />
                        <span>{post.readTime} 分钟阅读</span>
                    </Space>

                    <Space>
                        <EyeOutlined />
                        <span>{post.views} 次浏览</span>
                    </Space>

                    <Space>
                        <LikeOutlined />
                        <span>{post.likes} 点赞</span>
                    </Space>
                </div>

                {/* 标签和分类 */}
                <div className="mb-6">
                    <Tag color="blue" className="mb-2">{post.category}</Tag>
                    {post.tags.map(tag => (
                        <Tag key={tag} className="mb-2">{tag}</Tag>
                    ))}
                </div>

                {/* 封面图片 */}
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />
            </div>

            {/* 文章摘要 */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-lg font-semibold mb-3">文章摘要</h2>
                <p className="text-gray-700">{post.excerpt}</p>
            </div>

            {/* 文章内容 */}
            <div className="prose max-w-none mb-12">
                <div className="text-gray-800 leading-relaxed whitespace-pre-line">
                    {post.content === 'Full content of the blog post...'
                        ? `这是一篇关于"${post.title}"的详细文章。

在这篇文章中，我们将深入探讨相关的技术概念和实践方法。本文将为你提供实用的指导和最佳实践建议。

## 主要内容

本文涵盖了以下几个重要方面：

1. **基础概念介绍** - 了解核心概念和基本原理
2. **实践方法** - 学习如何在实际项目中应用这些技术
3. **最佳实践** - 掌握业界认可的最佳实践方法
4. **常见问题** - 解决开发过程中可能遇到的问题
5. **总结与展望** - 总结要点并展望未来发展

## 结论

通过本文的学习，你应该能够：
- 理解相关的技术概念
- 掌握实际应用方法
- 避免常见的开发陷阱
- 提升开发效率和代码质量

希望这篇文章对你的学习和工作有所帮助！`
                        : post.content
                    }
                </div>
            </div>

            {/* 相关文章 */}
            {relatedPosts.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold mb-6">相关文章</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedPosts.map(relatedPost => (
                            <div key={relatedPost.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                                <img
                                    src={relatedPost.coverImage}
                                    alt={relatedPost.title}
                                    className="w-full h-32 object-cover rounded mb-3"
                                />
                                <Link
                                    href={`/blog/${relatedPost.id}`}
                                    className="block font-semibold hover:text-blue-600 mb-2"
                                >
                                    {relatedPost.title}
                                </Link>
                                <p className="text-gray-600 text-sm mb-2">{relatedPost.excerpt}</p>
                                <div className="flex justify-between items-center text-xs text-gray-500">
                                    <span>{relatedPost.author}</span>
                                    <span>{relatedPost.publishDate}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;