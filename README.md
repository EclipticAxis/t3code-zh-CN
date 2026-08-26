# t3code-zh-CN

> **English:** This is a **community, unofficial, Simplified-Chinese fork** of [T3 Code](https://github.com/pingdotgg/t3code). The UI defaults to Simplified Chinese and covers the first screen, settings, and the native desktop menu. It has **no affiliation** with T3 Tools or the upstream project.

---

# T3 Code 简体中文社区版（t3code-zh-CN）

> [!CAUTION]
> **非官方构建。** 本项目是 [T3 Code](https://github.com/pingdotgg/t3code)（开源跨平台编码代理客户端）的**简体中文特化社区版**，与上游 T3 Tools / pingdotgg 无隶属、无背书关系。请勿将其当作官方版本使用或分发。

T3 Code 让你在统一的界面（Web / Desktop / Mobile）中操控本机的编码代理（Claude Code、Codex、Cursor、Grok Build、OpenCode），并使用你自己的订阅。本 fork 在此基础上，为简体中文用户提供**默认中文的桌面体验**。

## 与官方的关系与版本基准

- 上游仓库：[pingdotgg/t3code](https://github.com/pingdotgg/t3code)
- 本分支基于上游提交：**`a3a8cbd60`**（`2026-08-26`，`perf(ci): cut about a minute from every release (#8250)`）
- 在该基准之上，本仓库维护 5 个本地提交，全部为简体中文本地化改动（i18n 框架 + 首屏/设置/桌面菜单接入 + 发送区占位文案）

## 功能概览（中文化了什么）

- **默认简体中文界面**：文案缺失时自动回退英文，不抛错、不显示裸 key。
- **首屏主流程**：草稿引导「我们可以在 <项目> 中构建什么？」、无会话/无项目空状态、侧边栏（项目/会话/设置/拉取请求/用量入口）、发送按钮与发送区占位提示。
- **设置页**：8 个分区（通用/外观/快捷键/提供商/集成/源代码管理/连接/归档）、面包屑、40+ 项选项标题、搜索框与空结果、返回入口。
- **桌面侧**：原生应用菜单全部条目、更新对话框（已是最新/检查失败/更新不可用）、启动失败提示、WSL 后端错误与「正在连接 WSL」启动闪屏、右键菜单（复制链接/复制图片/拼写建议）、常见确认框按钮（确认/取消）。
- 开发模式内置右下角语言切换器（EN / 中文），便于即时核对翻译。

## 已知限制

- 图标按钮的悬停提示/无障碍名（如 New thread、Toggle 各面板、Open / Pull 等）、设置项下方的说明文字、provider 动态提示与更新通知内容仍为英文。
- 确认框标题由业务流程文本驱动，尚未逐条汉化（按钮已汉化）。
- 品牌专名与语法符号保留原文：T3 Code、Dev/Nightly/Alpha 标识、模型名、`$` `@` `/` 提示。
- 移动端 App、营销官网、在线文档尚未中文化。
- Windows 下原生菜单位于隐藏标题栏，按 `Alt` 唤出后为中文。

## 环境要求

- Windows 10/11、macOS、Linux 均可构建；开发与构建需要 **Node.js 22.16+ / 23.11+ / 24.10+** 与 Git。
- 本仓库使用 [Vite+](https://vite.plus) 的 `vp` 命令行工具管理依赖与脚本，请先安装 `vp`。
- 使用前需至少配置一个编码代理（使用你自己的订阅）：
  - Codex：安装 [Codex CLI](https://developers.openai.com/codex/cli) 并执行 `codex login`
  - Claude：安装 [Claude Code](https://claude.com/product/claude-code) 并执行 `claude auth login`
  - Cursor：安装 [Cursor CLI](https://cursor.com/cli) 并执行 `agent login`
  - Grok Build：安装 [Grok Build CLI](https://x.ai/cli) 并执行 `grok login`
  - OpenCode：安装 [OpenCode](https://opencode.ai) 并执行 `opencode auth login`

## Windows 安装与启动

```powershell
# 1. 安装 vp（Vite+ 命令行工具，Windows PowerShell）
irm https://vite.plus/ps1 | iex

# 2. 克隆本仓库（替换为你的远端地址）
git clone https://github.com/<你的账号>/t3code-zh-CN.git
cd t3code-zh-CN

# 3. 安装依赖
vp i

# 4. 启动桌面开发版（首次会先构建 Web，随后自动打开 Electron 窗口）
npm run dev:desktop

# 可选：构建正式安装包
npm run build:desktop
```

> 说明：`npm run dev:desktop` 为开发模式（Web dev server + Electron），适合日常体验与调试。构建正式包可执行 `npm run build:desktop`（产物见各平台输出目录）。

## 与官方关系 / 许可证

- 本项目基于 [T3 Code 上游仓库](https://github.com/pingdotgg/t3code) 分叉而来，**包含并保留上游 License**。
- 沿用上游 **MIT License**（Copyright (c) 2026 T3 Tools Inc.），本仓库的中文化改动以相同许可证分发。请阅读仓库内 [`LICENSE`](./LICENSE)。
- 官方安装包、官方文档与发行渠道请以上游仓库为准：<https://github.com/pingdotgg/t3code>、<https://t3.codes>。

## 免责声明

- 本仓库为**社区中文化版本，非官方构建**，与 T3 Tools / 上游仓库无隶属、无背书关系。
- 不收集、不代管你的模型提供商凭据；各 provider 订阅需你自行配置与登录。
- 使用本仓库造成的数据、兼容性或安全责任由使用者自行承担；如需稳定性保障，请使用官方发行版。

## 反馈与同步

- 本仓库**不保证实时跟随官方更新**。当前基准为上游 `a3a8cbd60`（2026-08-26），上游后续提交可能未合入。
- 同步上游：`git fetch upstream` 后基于 `upstream/main` 重新变基或合并你的中文改动。
- 中文翻译问题请在**本仓库**提交 Issue；官方功能问题请提交至上游仓库。

## 官方文档

完整文档随仓库携带于 [docs/](./docs)：

- [安装与首次运行](./docs/user/install.md)
- [权限模式](./docs/user/permission-modes.md)
- [快捷键](./docs/user/keybindings.md)
- [远程访问（手机或其他机器）](./docs/user/remote-access.md)
- [来源控制集成](./docs/user/source-control.md)
- 官方支持与讨论：[Discord](https://discord.gg/jn4EGJjrvv) · [Ideas](https://github.com/pingdotgg/t3code/discussions/categories/ideas)
