'use client';

import { usePathname } from 'next/navigation';
import Header from './header';

export default function ConditionalHeader() {
    const pathname = usePathname();

    // 检查是否是已知的路由
    const knownRoutes = ['/', '/performance', '/reliability', '/scale'];
    const isKnownRoute = knownRoutes.includes(pathname);

    // 只在已知路由显示Header，404页面不显示
    if (!isKnownRoute) {
        return null;
    }

    return <Header />;
}