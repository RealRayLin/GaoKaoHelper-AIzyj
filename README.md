# 金榜名·AI志愿家 官方网站

这是金榜名·AI志愿家的官方网站项目，使用Next.js和TailwindCSS构建的现代化、响应式网站。

## 项目简介

金榜名·AI志愿家是一款智能高考志愿填报系统，基于AI深度学习，精准预测录取概率，科学规划人生路。本项目是该系统的官方宣传网站。

## 技术栈

- **Next.js** - React框架，用于构建服务端渲染和静态网站
- **TailwindCSS** - 实用优先的CSS框架
- **Framer Motion** - React动画库，提供丰富的视觉交互效果
- **fullPage.js** - 全屏滚动插件，实现页面无缝切换体验
- **Tabler Icons** - 开源图标库

## 特性

- 响应式设计，适配移动端和桌面端
- 现代化UI，清新亮丽的设计风格
- 流畅的动画过渡效果
- 优化的SEO配置
- 丰富的组件化设计

## 开始使用

### 前提条件

- Node.js (版本14.x或更高)
- npm 或 yarn

### 安装

1. 克隆仓库

```bash
git clone https://github.com/your-username/aizyj_website.git
cd aizyj_website
```

2. 安装依赖

```bash
npm install
# 或
yarn install
```

3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

4. 打开浏览器访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

## 项目结构

```
aizyj_website/
├── public/            # 静态资源
├── src/               # 源代码目录
│   ├── app/           # Next.js App Router
│   │   ├── components/ # 组件目录
│   │   ├── globals.css # 全局样式
│   │   ├── layout.tsx  # 布局组件
│   │   └── page.tsx    # 首页
├── package.json       # 项目配置
└── README.md          # 项目说明
```

## 部署

该项目可以部署到任何支持Node.js的服务器，推荐使用Vercel进行部署：

```bash
npm run build
npm run start
```

## 许可证

[MIT](LICENSE)
