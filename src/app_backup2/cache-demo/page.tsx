import CachedFetch from '@/components/CachedFetch';
import DynamicFetch from '@/components/DynamicFetch';
import RevalidateFetch from '@/components/RevalidateFetch';
import TaggedFetch from '@/components/TaggedFetch';
import Link from 'next/link';

export default function CacheDemoPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Next.js 14 Fetch 缓存演示</h1>
        <p className="text-gray-600 mb-8">
          刷新页面查看不同缓存策略的效果。注意观察时间戳和随机数的变化。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CachedFetch />
          <DynamicFetch />
          <RevalidateFetch />
          <TaggedFetch />
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">缓存策略说明</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <strong className="text-green-700">force-cache (默认)：</strong>
              <span className="text-gray-600">永久缓存，除非手动清除缓存</span>
            </li>
            <li>
              <strong className="text-blue-700">no-store：</strong>
              <span className="text-gray-600">不缓存，每次请求都获取新数据</span>
            </li>
            <li>
              <strong className="text-yellow-700">revalidate：</strong>
              <span className="text-gray-600">设置缓存有效期，过期后自动重新验证</span>
            </li>
            <li>
              <strong className="text-purple-700">tags：</strong>
              <span className="text-gray-600">使用标签管理缓存，可按需重新验证</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 flex gap-4">
          <Link
            href="/cache-demo/revalidate"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            手动重新验证示例
          </Link>
          <Link
            href="/cache-demo/client-example"
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            客户端缓存示例
          </Link>
          <Link
            href="/"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}