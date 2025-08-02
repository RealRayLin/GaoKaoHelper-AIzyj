'use client';

import { motion } from 'framer-motion';
import { Medal, Users, Database, Award } from 'tabler-icons-react';

const About = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center">
      <div className="container-section w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[var(--primary)] font-semibold mb-2 block">关于我们</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              智能志愿填报的先行者
            </h2>
            <p className="text-gray-600 mb-6">
              金榜名·AI志愿家团队由一群来自教育行业和人工智能领域的专家共同创立，致力于将先进的AI技术与丰富的志愿填报经验相结合，为高考学子提供科学、精准的志愿填报解决方案。
            </p>
            <p className="text-gray-600 mb-8">
              我们的使命是让每一位考生都能找到最适合自己的大学和专业，充分发挥个人潜能，实现人生价值。多年来，我们已成功帮助数十万考生实现了理想大学梦。
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-[var(--primary)]">
                  <Medal size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">专业团队</h3>
                  <p className="text-sm text-gray-600">
                    由教育专家、数据科学家和高校研究员组成的专业团队
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-[var(--primary)]">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">服务学生</h3>
                  <p className="text-sm text-gray-600">
                    已为超过50万考生提供志愿填报服务，录取满意度98%
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-[var(--primary)]">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">数据能力</h3>
                  <p className="text-sm text-gray-600">
                    覆盖全国2800+高校数据，10年+录取分数线历史数据
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-[var(--primary)]">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">行业认可</h3>
                  <p className="text-sm text-gray-600">
                    获得教育行业多项创新奖项，被多所重点中学采用
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10">
              <div className="bg-white shadow-xl rounded-xl overflow-hidden">
                <div className="bg-[var(--primary)] text-white text-center py-8 px-6">
                  <h3 className="text-2xl font-bold mb-2">我们的团队</h3>
                  <p className="opacity-90">汇聚行业精英，共创智能志愿新未来</p>
                </div>
                
                <div className="p-8">
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)] font-bold text-xl mr-4">
                        李
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">李教授</h4>
                        <p className="text-gray-500 text-sm">创始人 / 教育学博士</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      前985大学招生办主任，20年高考志愿指导经验，对高校招生政策有深入研究。
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)] font-bold text-xl mr-4">
                        王
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">王博士</h4>
                        <p className="text-gray-500 text-sm">AI算法总监 / 计算机博士</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      人工智能专家，曾在国际知名科技公司负责推荐算法研发，拥有多项AI专利。
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)] font-bold text-xl mr-4">
                        张
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">张老师</h4>
                        <p className="text-gray-500 text-sm">首席志愿规划师</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      资深高考志愿规划专家，带领团队为上万考生提供志愿填报咨询，录取成功率高达98%。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[var(--secondary)] rounded-lg z-0"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 border-4 border-[var(--primary)]/20 rounded-lg z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 