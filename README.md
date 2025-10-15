# 个人主页 - 凡人

一个现代化的个人主页网站，展示AI技术专家和全栈开发者的专业信息。

## 🌟 项目特色

- **现代化设计**: 采用扁平化设计风格，参考苹果官网的现代科技感
- **响应式布局**: 完美适配桌面端、平板和移动设备
- **流畅动画**: 使用Framer Motion实现平滑的页面动画效果
- **深色模式**: 支持系统自动切换深色/浅色主题
- **性能优化**: 基于Next.js 15和Tailwind CSS 4构建

## 🛠 技术栈

- **框架**: Next.js 15.5.5 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4.0
- **动画**: Framer Motion
- **图标**: Lucide React
- **字体**: Geist (Next.js内置)

## 📋 页面结构

### 1. 导航栏 (Navigation)
- 固定顶部导航
- 平滑滚动到各个部分
- 移动端响应式菜单
- 滚动时背景模糊效果

### 2. 英雄区域 (Hero)
- 个人简介和头像展示
- 渐变背景和装饰元素
- 动态加载动画
- 滚动指示器

### 3. 技能展示 (Skills)
- 技能进度条展示
- 技能分类标签
- 架构经验亮点
- 响应式网格布局

### 4. 作品展示 (Works)
- 技术教程卡片展示
- 外部链接跳转
- 作品统计信息
- 更多作品链接

### 5. 成就展示 (Achievements)
- 数据统计展示
- 成就卡片布局
- 专业认证展示
- 高亮重要成就

### 6. 联系方式 (Contact)
- 多种联系方式
- 在线消息表单
- 社交媒体链接
- 微信二维码占位

### 7. 页脚 (Footer)
- 快速导航链接
- 技术标签云
- 社交媒体图标
- 版权信息和返回顶部

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本
```bash
npm run build
npm start
```

## 🎨 设计特点

### 颜色方案
- **主色调**: 蓝色渐变 (#007AFF 到 #5856D6)
- **背景色**: 浅灰色调 (#F8F9FA) 和深色模式
- **强调色**: 紫色和粉色渐变
- **文字色**: 高对比度的深色/浅色文字

### 字体选择
- **标题**: Geist Sans, 粗体
- **正文**: Geist Sans, 常规
- **代码**: Geist Mono, 等宽

### 动画效果
- 页面滚动动画
- 元素渐入效果
- 悬停状态变化
- 平滑过渡效果

## 📱 响应式设计

- **桌面端**: 1200px+，多列网格布局
- **平板端**: 768px-1199px，自适应布局
- **手机端**: 320px-767px，单列布局
- **折叠菜单**: 移动端导航菜单

## 🔧 自定义配置

### 修改个人信息
编辑各个组件中的个人信息内容：
- `components/Hero.tsx` - 个人简介
- `components/Skills.tsx` - 技能列表
- `components/Works.tsx` - 作品信息
- `components/Achievements.tsx` - 成就信息
- `components/Contact.tsx` - 联系方式

### 更新头像和二维码
- 替换 `components/Hero.tsx` 中的 `avatarUrl`
- 替换 `components/Contact.tsx` 中的二维码图片

### 样式自定义
- 修改 `app/globals.css` 中的CSS变量
- 调整Tailwind配置
- 更新颜色方案和字体设置

## 📄 部署建议

### Vercel (推荐)
1. 连接到GitHub仓库
2. 自动部署main分支
3. 自定义域名配置

### 其他平台
- Netlify
- GitHub Pages
- 自建服务器

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📞 联系方式

- 微信: aigtx888
- 邮箱: [联系邮箱]
- CSDN: https://blog.csdn.net/weixin_40780178
- 知乎: https://www.zhihu.com/people/69-33-7-46-4

---

**用 ❤️ 制作** | 基于 Next.js & Tailwind CSS
