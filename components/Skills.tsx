'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: 'Java', level: 95, category: '后端开发', color: 'bg-red-500' },
    { name: 'Spring Boot', level: 90, category: '后端开发', color: 'bg-green-500' },
    { name: 'Go', level: 85, category: '后端开发', color: 'bg-blue-500' },
    { name: 'Vue.js', level: 88, category: '前端开发', color: 'bg-emerald-500' },
    { name: 'React', level: 82, category: '前端开发', color: 'bg-cyan-500' },
    { name: 'Python', level: 80, category: 'AI/数据', color: 'bg-yellow-500' },
    { name: 'AI/ML', level: 75, category: 'AI技术', color: 'bg-purple-500' },
    { name: '项目管理', level: 90, category: '管理', color: 'bg-orange-500' },
  ];

  const categories = ['后端开发', '前端开发', 'AI技术', '管理'];

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-blue-900">
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
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              技术技能
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            拥有全栈开发体系的架构经验，精通多种编程语言和框架，
            专注于企业级应用开发和千万级项目架构
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 技能图表 */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${skill.color} h-2 rounded-full transition-all duration-300`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 技能分类 */}
          <div className="space-y-8">
            {categories.map((category, index) => {
              const categorySkills = skills.filter(skill => skill.category === category);

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-6 shadow-sm border border-border"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* 架构经验 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">架构经验</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  千万级项目前后端架构经验
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  企业级AI编程解决方案
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  大型产品项目管理
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}