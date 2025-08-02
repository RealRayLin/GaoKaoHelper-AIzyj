'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageCircle2, 
  ChartBar, 
  DatabaseImport, 
  School, 
  Id 
} from 'tabler-icons-react';

const featureData = [
  {
    icon: <Brain size={32} />,
    title: "智能对话系统",
    description: "通过问答流程确定学生和家长对学校、专业、城市的偏好，提供个性化且高度准确的报考建议。",
  },
  {
    icon: <MessageCircle2 size={32} />,
    title: "自然语言交互",
    description: "理解非明确的偏好表达，如 ''孩子不能吃辣'' 或 ''想去冬天有暖气的地方'' 等，智能匹配最合适的城市和院校。",
  },
  {
    icon: <ChartBar size={32} />,
    title: "智能排序与分析",
    description: "综合考虑城市经济发展、专业就业前景、学科排名等因素对志愿进行排序，而非仅依据分数线高低。",
  },
  {
    icon: <DatabaseImport size={32} />,
    title: "实时更新数据库",
    description: "历史录取数据齐全，最新信息第一时间更新，确保推荐结果基于最准确、最全面的数据。",
  },
  {
    icon: <School size={32} />,
    title: "小众特色选项（即将推出）",
    description: "涵盖电力、铁路、警察、艺术、体育等提前批录取的特殊院校选择，满足不同学生的个性化需求。",
  },
  {
    icon: <Id size={32} />,
    title: "职业规划测试（即将推出）",
    description: "结合 MBTI 与其他专业职业测试，科学分析学生潜在职业倾向，为专业选择提供科学参考依据。",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Features = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center">
      <div className="container-section w-full">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            产品特色
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            金榜名 · AI志愿家 基于大语言模型打造全新志愿填报体验，实现人机自然交互，提供精准个性化推荐
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featureData.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center text-[var(--primary)] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 