import Link from 'next/link'
import { PrismaClient } from '@/generated/prisma'
import { unstable_cache } from 'next/cache'

const prisma = new PrismaClient()

// 方法 1: 使用 revalidate 实现 ISR (增量静态再生)
// 页面会缓存 60 秒
export const revalidate = 60 // 秒

// 方法 2: 使用 unstable_cache 缓存特定函数
const getCachedSnippets = unstable_cache(
  async () => {
    const snippets = await prisma.snipper.findMany({
      orderBy: {
        id: 'desc'
      }
    })
    return snippets
  },
  ['snippets'], // 缓存键
  {
    revalidate: 60, // 60秒后重新验证
    tags: ['snippets'] // 用于手动清除缓存
  }
)

// 方法 3: 强制静态渲染（构建时生成，不会更新）
// export const dynamic = 'force-static'

// 方法 4: 强制动态渲染（每次请求都重新生成）
// export const dynamic = 'force-dynamic'

export default async function HomePageWithCache() {
  // 使用缓存的数据获取
  const snippets = await getCachedSnippets()

  // 页面组件代码相同...
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 组件内容 */}
    </div>
  )
}