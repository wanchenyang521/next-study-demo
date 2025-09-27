'use client';

import { useState, useEffect } from 'react';

export default function ClientCacheExample() {
  const [cachedData, setCachedData] = useState<any>(null);
  const [dynamicData, setDynamicData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // 客户端缓存示例
  const fetchWithClientCache = async () => {
    // 检查 sessionStorage 缓存
    const cached = sessionStorage.getItem('api-cache');
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const age = Date.now() - timestamp;

      // 如果缓存小于30秒，使用缓存数据
      if (age < 30000) {
        setCachedData({ ...data, fromCache: true, cacheAge: Math.floor(age / 1000) });
        return;
      }
    }

    // 获取新数据
    setLoading(true);
    const res = await fetch('/api/time');
    const data = await res.json();

    // 存储到 sessionStorage
    sessionStorage.setItem('api-cache', JSON.stringify({
      data,
      timestamp: Date.now()
    }));

    setCachedData({ ...data, fromCache: false });
    setLoading(false);
  };

  // 动态获取（不使用缓存）
  const fetchDynamic = async () => {
    setLoading(true);
    const res = await fetch('/api/time');
    const data = await res.json();
    setDynamicData(data);
    setLoading(false);
  };

  const clearCache = () => {
    sessionStorage.removeItem('api-cache');
    setCachedData(null);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">客户端缓存示例</h1>
        <p className="text-gray-600 mb-6">
          这是客户端组件中的缓存示例，使用 sessionStorage 实现简单缓存
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">客户端缓存（30秒）</h2>
            <button
              onClick={fetchWithClientCache}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-3"
              disabled={loading}
            >
              获取数据
            </button>
            {cachedData && (
              <div>
                <div className={`inline-block px-2 py-1 text-xs rounded ${
                  cachedData.fromCache ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {cachedData.fromCache ? `来自缓存 (${cachedData.cacheAge}秒前)` : '新数据'}
                </div>
                <pre className="mt-2 p-3 bg-gray-50 rounded text-xs overflow-auto">
                  {JSON.stringify({
                    timestamp: cachedData.timestamp,
                    random: cachedData.random
                  }, null, 2)}
                </pre>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">动态获取</h2>
            <button
              onClick={fetchDynamic}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 mb-3"
              disabled={loading}
            >
              获取新数据
            </button>
            {dynamicData && (
              <pre className="mt-2 p-3 bg-gray-50 rounded text-xs overflow-auto">
                {JSON.stringify({
                  timestamp: dynamicData.timestamp,
                  random: dynamicData.random
                }, null, 2)}
              </pre>
            )}
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={clearCache}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            清除缓存
          </button>
          <a
            href="/cache-demo"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 inline-block"
          >
            返回服务端缓存演示
          </a>
        </div>
      </div>
    </div>
  );
}