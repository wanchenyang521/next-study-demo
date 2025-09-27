import { revalidateTag } from 'next/cache';

async function TaggedFetch() {
  // 使用标签进行缓存管理
  const res = await fetch('http://localhost:3000/api/time', {
    next: { tags: ['time-data'] }
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded bg-purple-50">
      <h3 className="font-bold text-purple-800">标签缓存 (tags: [&#39;time-data&#39;])</h3>
      <p className="text-sm text-gray-600">可以通过 revalidateTag(&#39;time-data&#39;) 手动重新验证</p>
      <pre className="mt-2 p-2 bg-white rounded text-xs">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default TaggedFetch;