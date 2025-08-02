'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'tabler-icons-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // 初始检测
    checkMobile();
    
    // 窗口大小变化时重新检测
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const faqData = [
    {
      question: "真 · AI志愿填报系统与传统志愿填报工具有什么区别？",
      answer: "传统志愿卡产品仅通过输入分数和排位进行简单匹配，而我们的真 · AI系统基于大语言模型和 AI Agent 架构，可以通过自然语言对话了解学生的详细需求和偏好，即使是非明确的表述如 ''不能吃辣'' 也能智能转化为地域偏好，并综合城市经济发展、专业就业前景、学科排名等多维度因素智能排序，提供真正个性化的志愿方案。"
    },
    {
      question: "系统的数据来源和更新情况如何？",
      answer: "我们拥有全面的历史录取数据，并保证第一时间更新最新招生信息。系统收录了全国高校的历年分数线、招生计划、院校特色和专业设置等信息，同时关注高校政策变化和招生趋势，确保推荐方案基于最新、最准确的数据。"
    },
    {
      question: "如何通过系统进行志愿规划？",
      answer: "只需在系统中输入高考分数、选科情况和省份，然后通过智能对话系统回答一系列关于个人偏好的问题，如地域偏好、学科兴趣、职业规划等。系统会基于这些信息，结合大数据分析，生成个性化的志愿方案，并提供详细的院校和专业分析，帮助您做出最佳选择。"
    },
    {
      question: "系统能处理特殊类型的院校选择吗？（即将推出）",
      answer: "是的，我们即将推出小众特色选项功能，专门针对电力、铁路、警察、艺术、体育等提前批录取的特殊院校进行推荐。这些院校往往有特殊的招生要求和就业方向，普通系统难以提供准确建议，而我们的系统会结合这些特殊院校的招生政策和考生情况，提供精准推荐。"
    },
    {
      question: "职业规划测试对志愿填报有什么帮助？（即将推出）",
      answer: "我们即将推出的职业规划测试功能结合 MBTI 与其他专业职业测试，能科学分析学生的性格特质、学习风格、价值观和能力倾向，从而推断出最适合的职业方向。这些信息将作为专业选择的重要参考，确保选择的专业不仅符合分数要求，更能与个人职业发展目标相匹配，避免未来的职业发展与所学专业不符的情况。"
    },
    {
      question: "智能排序的具体参考因素有哪些？",
      answer: "我们的智能排序不仅考虑分数线高低，还综合分析城市经济发展状况、就业机会、生活成本、专业就业前景、薪资水平、学科实力排名、师资力量、科研水平、校园环境等多维度因素。通过AI算法权衡这些因素的重要性，结合考生个人偏好，形成最适合考生的个性化排序结果，实现真正意义上的'最优志愿'推荐。"
    }
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // 移动端样式
  const mobileStyles = isMobile ? {
    section: "py-20 bg-[#BEDF7B] overflow-x-hidden",
    container: "overflow-hidden px-5"
  } : {
    section: "py-20 bg-[#BEDF7B]",
    container: "container-section"
  };

  return (
    <section className={mobileStyles.section} style={isMobile ? {width: '100%', margin: 0, padding: '80px 0'} : {}}>
      <div className={mobileStyles.container} style={isMobile ? {width: '100%', maxWidth: '100%', boxSizing: 'border-box'} : {}}>
        <div className="text-center mb-12">
          <motion.span 
            className="text-[#2C4100] font-semibold mb-2 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            常见问题
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#2C4100]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            关于金榜名 · AI志愿家，您想了解的都在这里
          </motion.h2>
        </div>
        
        <div className={isMobile ? "w-full mx-auto" : "max-w-3xl mx-auto"}>
          {faqData.map((item, index) => (
            <motion.div 
              key={index}
              className="mb-4 last:mb-0 bg-[#DCF1A4] rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <button
                className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                onClick={() => toggleAnswer(index)}
              >
                <span className="font-semibold text-lg text-[#2C4100]">{item.question}</span>
                <ChevronDown 
                  className={`transform transition-transform duration-300 text-[#5a8802] flex-shrink-0 ml-2
                    ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  size={20} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out
                  ${activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
              >
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq; 