'use client';

import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Zap, Star, Trophy } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "单兵AI个人开发工作室",
      description: "搭建完整的个人AI开发环境，整合多种AI工具和平台，提供从代码编写到项目部署的全流程AI辅助开发解决方案",
      highlight: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "知乎技术话题高赞回答者",
      description: "在知乎平台持续输出高质量技术内容，获得大量用户认可和点赞，成为技术领域的意见领袖"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "CSDN高赞作者",
      description: "多篇技术文章被CSDN官方收录，涵盖Go语言、Python、AI编程等多个热门技术领域"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "多项项目经理认证",
      description: "拥有PMP、高项等多项权威项目管理认证，具备丰富的业务团队和技术团队管理经验"
    }
  ];

  const stats: Stat[] = [
    { number: "15", label: "年技术开发经验", suffix: "+" },
    { number: "千万级", label: "项目架构经验" },
    { number: "多部", label: "技术教程作品" },
    { number: "高赞", label: "技术内容创作者" }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            成就与荣誉
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            在技术领域持续深耕，获得多项成就和认可
          </p>
        </motion.div>

        {/* 统计数据 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.number}
                {stat.suffix && <span className="text-lg">{stat.suffix}</span>}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* 成就列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-6 rounded-xl transition-all duration-300 ${
                achievement.highlight
                  ? 'bg-gradient-to-br from-primary/10 to-purple-500/10 border-2 border-primary/20 shadow-lg'
                  : 'bg-background/80 border border-border hover:border-primary/30 hover:shadow-lg'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 p-3 rounded-lg ${
                  achievement.highlight
                    ? 'bg-gradient-to-br from-primary to-purple-600 text-white'
                    : 'bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors'
                }`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-2 ${
                    achievement.highlight ? 'text-primary' : 'text-foreground'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* 装饰性元素 */}
              {achievement.highlight && (
                <div className="absolute -top-2 -right-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 证书展示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="max-w-3xl mx-auto">
              <Award className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">专业认证</h3>
              <p className="text-lg opacity-90 mb-6">
                拥有PMP（项目管理专业人士）、高项（信息系统项目管理师）等权威认证，
                具备丰富的业务团队和技术团队管理经验
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <div className="font-semibold">PMP</div>
                  <div className="text-sm opacity-80">项目管理专业人士</div>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <div className="font-semibold">高项</div>
                  <div className="text-sm opacity-80">信息系统项目管理师</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}