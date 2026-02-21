# 🦞 Mission Control - AI 工具中心

> 让 AI Agent 自主创建和扩展工具的中心

## 目标

* **无限扩展**：缺什么工具，AI 自动创建
* **自主进化**：Agent 根据需求不断优化工具
* **即需即用**：描述需求 → 工具生成 → 立即可用

## 目录结构

```
mission-control/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 主页 - 工具展示
│   │   ├── api/
│   │   │   └── tools/        # 工具 API
│   │   └── layout.tsx
│   ├── components/           # UI 组件
│   ├── lib/                  # 工具函数
│   └── tools/                # 工具定义
│       └── *.ts
├── public/
├── package.json
└── README.md
```

## 使用方式

1. **描述需求**：告诉 Agent 你需要什么功能
2. **自动生成**：Agent 自动创建工具代码到 `src/tools/` 目录
3. **立即使用**：工具自动注册并可用

## 当前工具

🆕 **工具中心初始化完成**

等待 Agent 根据需求创建自定义工具...

## 技术栈

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS

## 开发

```bash
# 开发模式
bun dev

# 构建
bun build
```

---

*由 AI Agent 自主维护的工具中心*
