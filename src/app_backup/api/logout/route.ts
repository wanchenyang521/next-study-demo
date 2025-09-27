import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        // 创建响应对象
        const response = NextResponse.json({
            success: true,
            message: '退出登录成功'
        })

        // 通过设置过期时间为 0 来清除浏览器中的 cookie
        response.cookies.set('auth-token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0 // 立即过期
        })

        // 这里可以添加其他的清理逻辑，比如：
        // - 将 token 加入黑名单
        // - 清理服务器端的会话
        // - 记录退出日志等

        return response
    } catch (error) {
        console.error('Logout error:', error)
        return NextResponse.json(
            {
                success: false,
                message: '退出登录失败'
            },
            { status: 500 }
        )
    }
}