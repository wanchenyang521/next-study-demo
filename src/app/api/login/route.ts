import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json()

        // 验证必填字段
        if (!email || !password) {
            return NextResponse.json(
                {
                    success: false,
                    message: '邮箱和密码不能为空'
                },
                { status: 400 }
            )
        }

        // 验证邮箱格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: '邮箱格式无效'
                },
                { status: 400 }
            )
        }

        // 模拟调用后端接口，验证用户凭据
        // 实际项目中应该调用真实的后端 API 或查询数据库
        if (email === 'admin@example.com' && password === '123456') {
            // 生成模拟 token（实际项目中应使用 JWT 等安全方案）
            const token = Buffer.from(`${email}:${Date.now()}`).toString('base64')

            // 生成用户信息
            const user = {
                id: '1',
                email: email,
                name: '管理员',
                role: 'admin',
                avatar: null
            }

            // 返回成功响应
            const response = NextResponse.json({
                success: true,
                message: '登录成功',
                data: {
                    token,
                    user,
                    expiresIn: 86400 // 24小时过期
                }
            })

            // 设置 cookie（可选）
            response.cookies.set('auth-token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 86400 // 24小时
            })

            return response
        } else {
            // 登录失败
            return NextResponse.json(
                {
                    success: false,
                    message: '邮箱或密码错误'
                },
                { status: 401 }
            )
        }
    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            {
                success: false,
                message: '服务器错误，请稍后再试'
            },
            { status: 500 }
        )
    }
}