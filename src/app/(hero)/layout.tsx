import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hero Dashboard - Next.js Demo",
  description: "A modern dashboard with hero sections, team management, and analytics",
  keywords: ["Next.js", "React", "Dashboard", "Analytics", "Team Management"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Hero Dashboard",
    description: "A modern dashboard with hero sections, team management, and analytics",
    type: "website",
  },
};

export default function HeroLayout({
  children,
  team,
  analytics
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/*<Header />*/}
        <Link href='/'>Home</Link>
        <Link href='/visitors'>visitors</Link>
      {/* 主要内容区域 */}
      <main className="relative">


        {/* 并行路由内容区域 */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Team 内容区域 */}
            <div className="team-section">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">团队管理</h2>
                {team}
              </div>
            </div>

            {/* Analytics 内容区域 */}
            <div className="analytics-section">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">数据分析</h2>
                {analytics}
              </div>
            </div>
          </div>
        </div>
          {/* Hero 主内容 */}
      <section className="hero-section">
          {children}
      </section>
      </main>
    </div>
  );
}
