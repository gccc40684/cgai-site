'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 更大气的主背景 - 深色渐变配合动态元素 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
        {/* 动态背景元素 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>

        {/* 动态网格背景 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* 浮动粒子效果 */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-bounce opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">

          {/* 左侧主要内容 - 更突出的布局 */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* 标签 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-blue-400 text-sm font-medium">AI技术专家 · 全栈架构师</span>
              </motion.div>

              {/* 主标题 - 更大更突出 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    凡人
                  </span>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-blue-200/90">
                  15年+技术开发经验
                </div>
              </motion.h1>

              {/* 简介 - 更大气的描述 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-6"
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl">
                  专注于大型产品项目管理及技术管理，曾担任大厂业务产品线负责人。
                  目前致力于<span className="text-blue-400 font-semibold">AI技术与原有产品业务融合</span>和发展。
                </p>

                <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl">
                  同时致力于<span className="text-purple-400 font-medium">AI技术分享</span>，
                  专注<span className="text-blue-400 font-medium">AI写作</span>、
                  <span className="text-green-400 font-medium">AI智能体</span>、
                  <span className="text-yellow-400 font-medium">AI编程</span>，
                  为开发者提供企业级的AI编程高命中解决方案。
                </p>
              </motion.div>

              {/* 技能亮点 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-3"
              >
                {['全栈架构', '千万级项目', 'PMP认证', 'AI融合'].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

              {/* CTA按钮 - 更大更醒目 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
                >
                  <span>开始合作</span>
                  <ChevronDown className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#works"
                  className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/20 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                >
                  查看作品
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* 右侧头像 - 更突出的展示 */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* 头像容器 - 更大更醒目 */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl group">
                {/* 外圈光晕效果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                {/* 头像图片 */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                  <Image
                    src="/avatar.jpg"
                    alt="凡人头像"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-700"
                    priority
                  />
                  {/* 图片上方的渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* 浮动标签 */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  15+ 经验
                </div>

                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  全栈专家
                </div>
              </div>

              {/* 装饰性光环 */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-ping delay-1000"></div>

              {/* 动态粒子 */}
              <div className="absolute top-0 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
              <div className="absolute top-1/3 -right-8 w-1 h-1 bg-indigo-400 rounded-full animate-ping opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 更优雅的滚动指示器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <a href="#skills" className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-sm mb-2">向下滚动</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}