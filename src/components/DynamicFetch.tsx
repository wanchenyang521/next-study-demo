async function DynamicFetch() {
  // 使用 no-store 禁用缓存
  const res = await fetch('http://localhost:3000/api/time', {
    cache: 'no-store'
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded bg-blue-50">
      <h3 className="font-bold text-blue-800">动态获取 (no-store)</h3>
      <p className="text-sm text-gray-600">每次请求都会获取新数据，不使用缓存</p>
      <pre className="mt-2 p-2 bg-white rounded text-xs">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default DynamicFetch;