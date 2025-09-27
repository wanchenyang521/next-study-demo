import { revalidatePath, revalidateTag } from 'next/cache';
import Link from 'next/link';

async function getData() {
  const res = await fetch('http://localhost:3000/api/time', {
    next: { tags: ['manual-time'] }
  });
  return res.json();
}

export default async function RevalidatePage() {
  const data = await getData();

  async function revalidateData() {
    'use server';
    revalidateTag('manual-time');
  }

  async function revalidatePagePath() {
    'use server';
    revalidatePath('/cache-demo/revalidate');
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">手动重新验证缓存</h1>

        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-3">当前数据（带标签缓存）</h2>
          <pre className="p-4 bg-gray-50 rounded overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">重新验证操作</h2>
          <div className="space-y-3">
            <form action={revalidateData}>
              <button
                type="submit"
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              >
                通过标签重新验证 (revalidateTag)
              </button>
            </form>

            <form action={revalidatePagePath}>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                通过路径重新验证 (revalidatePath)
              </button>
            </form>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            点击按钮后刷新页面查看数据变化
          </p>
        </div>

        <div className="mt-6">
          <Link
            href="/cache-demo"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 inline-block"
          >
            返回缓存演示
          </Link>
        </div>
      </div>
    </div>
  );
}