import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-2xl">
              🦞
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Mission Control</h1>
              <p className="text-sm text-white/60">AI 工具中心 · 自主扩展</p>
            </div>
          </div>
          <Link
            href="https://github.com/openclaw/openclaw"
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 text-sm transition"
          >
            文档
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            让 AI 自己搭建工具
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            描述你的需求，AI Agent 自动创建新工具。无限扩展，即需即用。
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">北极星使命</h3>
            <p className="text-white/60">
              帮我完成工作，减少重复劳动，直接交付结果
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">自动任务</h3>
            <p className="text-white/60">
              每天凌晨 2:00 自动推进重要任务
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold text-white mb-2">工具中心</h3>
            <p className="text-white/60">
              AI 自主创建和扩展的工具库
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <p className="text-white/40 text-sm">
            向 AI Agent 描述你的需求，它会自动在这里添加新工具
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/40 text-sm">
          <p>🦞 Mission Control · 由 OpenClaw Agent 驱动</p>
        </div>
      </footer>
    </div>
  );
}
