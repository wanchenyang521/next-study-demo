'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Form, Input, Button, Checkbox, Card, message, Space } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'

interface LoginFormValues {
    email: string
    password: string
    remember?: boolean
}

export default function LoginPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm<LoginFormValues>()

    const onFinish = async (values: LoginFormValues) => {
        setLoading(true)

        try {
            // 调用登录 API
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password
                })
            })

            const result = await response.json()

            if (response.ok && result.success) {
                message.success(result.message || '登录成功！')

                // 存储 token 和用户信息
                if (result.data) {
                    localStorage.setItem('auth-token', result.data.token)
                    localStorage.setItem('user', JSON.stringify(result.data.user))
                }

                // 如果选择记住密码，存储邮箱
                if (values.remember) {
                    localStorage.setItem('rememberedEmail', values.email)
                } else {
                    localStorage.removeItem('rememberedEmail')
                }

                // 跳转到首页
                setTimeout(() => {
                    router.push('/')
                }, 500)
            } else {
                message.error(result.message || '登录失败，请重试！')
            }
        } catch (error) {
            message.error('网络错误，请稍后再试！')
            console.error('Login error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
            <Card
                title="用户登录"
                style={{
                    width: 400,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
                headStyle={{
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: 'bold'
                }}
            >
                <Form
                    form={form}
                    name="login"
                    onFinish={onFinish}
                    autoComplete="off"
                    size="large"
                    initialValues={{
                        remember: true,
                        email: '',
                        password: ''
                    }}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: '请输入邮箱地址！' },
                            { type: 'email', message: '请输入有效的邮箱地址！' }
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="邮箱地址"
                            autoComplete="email"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: '请输入密码！' },
                            { min: 6, message: '密码至少需要6个字符！' }
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="密码"
                            autoComplete="current-password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                            <a href="#" style={{ color: '#1890ff' }}>
                                忘记密码？
                            </a>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            block
                        >
                            登录
                        </Button>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0, textAlign: 'center' }}>
                        <Space>
                            <span>还没有账号？</span>
                            <a href="/register" style={{ color: '#1890ff' }}>
                                立即注册
                            </a>
                        </Space>
                    </Form.Item>
                </Form>

                <div style={{
                    marginTop: '20px',
                    padding: '10px',
                    background: '#f0f2f5',
                    borderRadius: '4px',
                    textAlign: 'center',
                    fontSize: '12px',
                    color: '#666'
                }}>
                    <div>测试账号</div>
                    <div style={{ marginTop: '5px' }}>
                        邮箱：admin@example.com
                    </div>
                    <div>
                        密码：123456
                    </div>
                </div>
            </Card>
        </div>
    )
}