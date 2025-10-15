'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Heart, MessageCircle, Users } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/buia48401-lang",
      title: "GitHub"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://mp.weixin.qq.com/s/dqovMxwaaAzcSpurvzIJbQ",
      title: "微信公众号"
    },
    {
      icon: <Users className="w-5 h-5" />,
      href: "https://www.zhihu.com/people/69-33-7-46-4",
      title: "知乎"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:aigtx888@example.com",
      title: "Email"
    }
  ];

  const quickLinks = [
    { href: "#about", title: "关于我" },
    { href: "#skills", title: "技能" },
    { href: "#works", title: "作品" },
    { href: "#achievements", title: "成就" },
    { href: "#contact", title: "联系" }
  ];

  const externalLinks = [
    { href: "https://www.csdn.net/", title: "CSDN" },
    { href: "https://juejin.cn/", title: "掘金" },
    { href: "https://www.zhihu.com/", title: "知乎" },
    { href: "https://github.com/", title: "GitHub" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 个人信息 */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                凡人
              </h3>
              <p className="text-muted-foreground">
                AI技术专家 & 全栈开发者
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                15年+技术开发经验，专注于AI技术与企业开发融合，
                为开发者提供企业级的AI编程解决方案。
              </p>
            </motion.div>

            {/* 社交媒体图标 */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-2 bg-secondary rounded-lg text-muted-foreground hover:bg-primary hover:text-white transition-all duration-200"
                  title={social.title}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="font-semibold text-foreground"
            >
              快速导航
            </motion.h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* 外部链接 - 已隐藏 */}
          {/* <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="font-semibold text-foreground"
            >
              技术平台
            </motion.h4>
            <ul className="space-y-2">
              {externalLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    {link.title}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div> */}

          {/* 技能标签 */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="font-semibold text-foreground"
            >
              技术标签
            </motion.h4>
            <div className="flex flex-wrap gap-2">
              {[
                'AI技术', '全栈开发', '架构设计', 'Go语言', 'Python',
                'Java', 'Spring Boot', 'Vue.js', 'React', '项目管理',
                'PMP', '技术管理', 'AI编程', 'Cursor', '企业级开发'
              ].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground"
            >
              © {currentYear} 凡人. 保留所有权利.
              <span className="inline-flex items-center">
                用 <Heart className="w-3 h-3 mx-1 text-red-500" /> 制作
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 text-sm text-muted-foreground"
            >
              <span suppressHydrationWarning>
                最后更新: {new Date().toLocaleDateString('zh-CN')}
              </span>
              <span className="hidden sm:inline">•</span>
              <span>
                Powered by Next.js & Tailwind CSS
              </span>
            </motion.div>
          </div>

          {/* 返回顶部按钮 */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-xl"
            title="返回顶部"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}