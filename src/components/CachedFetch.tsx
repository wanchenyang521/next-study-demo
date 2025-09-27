async function CachedFetch() {
  // 默认情况下，fetch 会被缓存
  const res = await fetch('http://localhost:3000/api/time', {
    // 默认: cache: 'force-cache'
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded bg-green-50">
      <h3 className="font-bold text-green-800">默认缓存 (force-cache)</h3>
      <p className="text-sm text-gray-600">这个数据会被缓存，页面刷新时不会重新获取</p>
      <pre className="mt-2 p-2 bg-white rounded text-xs">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default CachedFetch;