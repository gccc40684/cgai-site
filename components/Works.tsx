'use client';

import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Users, Award } from 'lucide-react';

interface Work {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  tags: string[];
  stats?: string;
}

export default function Works() {
  const works: Work[] = [
    {
      title: "《15分钟轻松学Go》",
      description: "在AI快速发展的时代，学习Go语言依然很有用。Go语言擅长处理高并发任务，这对于需要快速响应的AI服务非常重要。适合用来处理和传输大量数据，非常适合机器学习模型的数据预处理。",
      link: "https://blog.csdn.net/weixin_40780178/article/details/142957976",
      icon: <BookOpen className="w-8 h-8" />,
      tags: ["Go语言", "AI开发", "高并发", "数据处理"],
      stats: "CSDN官方收录"
    },
    {
      title: "《15分钟轻松学Python》",
      description: "即使是AI技术突起的时代，想要用好AI做开发，那肯定离不开Python。就算最轻量级的智能体都有代码块要写，所以不一定要掌握完完整整的Python，只要掌握基础就能应对大部分场景。",
      link: "https://blog.csdn.net/weixin_40780178/article/details/142697288",
      icon: <BookOpen className="w-8 h-8" />,
      tags: ["Python", "AI开发", "基础教程", "智能体"],
      stats: "CSDN官方收录"
    },
    {
      title: "《每日学习30分轻松掌握Cursor》",
      description: "面向有一定编程基础的开发者的系统入门与实战课程。通过精心设计的实战案例，逐步掌握Cursor AI编程的核心技能，包括并发特性、模块化设计、测试框架等重要知识点。",
      link: "https://blog.csdn.net/weixin_40780178/article/details/145275007",
      icon: <BookOpen className="w-8 h-8" />,
      tags: ["Cursor", "AI编程", "实战课程", "开发工具"],
      stats: "CSDN官方收录"
    },
    {
      title: "单兵AI个人开发工作室",
      description: "搭建完整的个人AI开发环境，整合多种AI工具和平台，提供从代码编写到项目部署的全流程AI辅助开发解决方案。",
      link: "#",
      icon: <Users className="w-8 h-8" />,
      tags: ["AI工作室", "开发环境", "全栈开发", "个人项目"],
      stats: "个人项目"
    }
  ];

  return (
    <section id="works" className="py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-purple-900">
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
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              我的作品
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            编写多部成型的技术教程，多次被CSDN官方收录，专注于AI技术分享和编程教育，
            帮助开发者快速掌握前沿技术
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/50 hover:border-purple-500/50 card-hover"
            >
              {/* 图标和标题 */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                    {work.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                  >
                    {work.title}
                  </h3>
                </div>
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors hover:bg-purple-500/10 rounded-lg"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>

              {/* 描述 */}
              <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                {work.description}
              </p>

              {/* 标签 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 统计信息 */}
              {work.stats && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Award className="w-4 h-4 mr-1" />
                  {work.stats}
                </div>
              )}

              {/* 悬停效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* 更多作品提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            更多技术文章和教程
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://blog.csdn.net/weixin_40780178"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              CSDN博客
            </a>
            <a
              href="https://juejin.cn/user/2505152928167529"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/80 transition-colors duration-200 border border-border"
            >
              掘金主页
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}