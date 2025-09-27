async function RevalidateFetch() {
  // 使用 revalidate 设置缓存时间（秒）
  const res = await fetch('http://localhost:3000/api/time', {
    next: { revalidate: 10 } // 10秒后重新验证
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded bg-yellow-50">
      <h3 className="font-bold text-yellow-800">定时重新验证 (revalidate: 10s)</h3>
      <p className="text-sm text-gray-600">缓存10秒，之后重新获取数据</p>
      <pre className="mt-2 p-2 bg-white rounded text-xs">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default RevalidateFetch;