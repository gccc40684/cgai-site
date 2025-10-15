'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Github, Twitter, Linkedin, ExternalLink, Users } from 'lucide-react';
import Image from 'next/image';

interface ContactItem {
  icon: React.ReactNode;
  title: string;
  value?: string;
  href?: string;
  type: 'link' | 'text' | 'copy';
}

interface SocialLink {
  icon: React.ReactNode;
  title: string;
  href: string;
  color: string;
}

export default function Contact() {
  const contactItems: ContactItem[] = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "微信公众号",
      value: "AI技术分享",
      href: "https://mp.weixin.qq.com/s/dqovMxwaaAzcSpurvzIJbQ",
      type: "link"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "微信",
      value: "aigtx888",
      type: "copy"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "知乎",
      href: "https://www.zhihu.com/people/69-33-7-46-4",
      type: "link"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "CSDN",
      href: "https://blog.csdn.net/weixin_40780178",
      type: "link"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "掘金",
      href: "https://juejin.cn/user/2505152928167529",
      type: "link"
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      href: "https://github.com/buia48401-lang",
      type: "link"
    }
  ];

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('已复制到剪贴板: ' + text);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              联系我
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            欢迎通过以下方式与我联系，交流技术、合作或咨询相关问题
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* 左侧 - 特别突出的微信联系方式 */}
          <div className="lg:col-span-5 space-y-8">

            {/* 微信联系方式 - 特别突出 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-green-500/20 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center"
              >
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  主要联系方式
                </span>
              </h3>

              {/* 微信 - 最突出 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 mb-6 border-2 border-green-500/30 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl text-white shadow-lg">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground">微信联系</h4>
                    <p className="text-muted-foreground">直接添加微信好友</p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-green-700 dark:text-green-300">aigtx888</span>
                    <button
                      onClick={() => handleCopy('aigtx888')}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                    >
                      复制微信号
                    </button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">扫码添加微信或直接复制微信号</p>
              </div>

              {/* 微信公众号 - 第二突出 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-500/30 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white shadow-lg">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground">微信公众号</h4>
                    <p className="text-muted-foreground">关注获取更多AI技术分享</p>
                  </div>
                </div>
                <a
                  href="https://mp.weixin.qq.com/s/dqovMxwaaAzcSpurvzIJbQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-semibold"
                >
                  进入公众号
                </a>
              </div>

              {/* 展示二维码 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-border text-center">
                <Image
                  src="/qrcode.jpg"
                  alt="微信二维码"
                  width={200}
                  height={200}
                  className="w-48 h-48 object-contain rounded-lg mx-auto mb-4"
                />
                <p className="text-sm text-muted-foreground font-medium">扫码添加微信</p>
              </div>
            </motion.div>
          </div>

          {/* 右侧 - 其他联系方式 */}
          <div className="lg:col-span-7 space-y-8">

            {/* 技术平台链接 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-8 shadow-sm border border-border"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">技术平台</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactItems.slice(2).map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-muted-foreground">{item.title}</div>
                      {item.value && <div className="text-foreground font-medium">{item.value}</div>}
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* 联系表单 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">发送消息</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    placeholder="请输入您的邮箱"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                    主题
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    placeholder="请输入消息主题"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    消息内容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                    placeholder="请输入您想说的话..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-primary/90 hover:to-purple-600/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  发送消息
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}