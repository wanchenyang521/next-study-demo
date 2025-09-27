import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
//
// // 定义需要保护的路由
// const protectedRoutes = [
//     '/',
//     '/dashboard',
//     '/profile',
//     '/settings'
// ]
//
// // 定义公开路由（不需要登录）
// const publicRoutes = [
//     '/login',
//     '/register',
//     '/api/login',
//     '/api/register'
// ]
//
export function middleware(request: NextRequest) {
//     const { pathname } = request.nextUrl
//
//     // 获取 token
//     const token = request.cookies.get('auth-token')?.value
//
//     // 判断是否是保护路由
//     const isProtectedRoute = protectedRoutes.some(route =>
//         pathname === route || pathname.startsWith(route + '/')
//     )
//
//     // 判断是否是公开路由
//     const isPublicRoute = publicRoutes.some(route =>
//         pathname === route || pathname.startsWith(route)
//     )
//
//     // 如果是 API 路由，跳过处理（除了特定的需要保护的 API）
//     if (pathname.startsWith('/api/') && !pathname.startsWith('/api/user/')) {
//         return NextResponse.next()
//     }
//
//     // 如果访问保护路由但没有 token，重定向到登录页
//     if (isProtectedRoute && !token) {
//         const url = request.nextUrl.clone()
//         url.pathname = '/login'
//         // 可选：添加返回 URL 参数
//         url.searchParams.set('from', pathname)
//         return NextResponse.redirect(url)
//     }
//
//     // 如果已登录但访问登录页，重定向到首页
//     if (isPublicRoute && token && pathname === '/login') {
//         const url = request.nextUrl.clone()
//
//         // 检查是否有返回 URL
//         const from = request.nextUrl.searchParams.get('from')
//         url.pathname = from || '/'
//         url.searchParams.delete('from')
//
//         return NextResponse.redirect(url)
//     }
//
    return NextResponse.next()
}
//
// // 配置中间件匹配的路径
// export const config = {
//     matcher: [
//         /*
//          * 匹配所有路径除了:
//          * - _next/static (静态文件)
//          * - _next/image (图片优化文件)
//          * - favicon.ico (网站图标)
//          * - public 文件夹下的文件
//          */
//         '/((?!_next/static|_next/image|favicon.ico|.*\\..*|public).*)',
//     ]
// }