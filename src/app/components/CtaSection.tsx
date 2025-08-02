'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'tabler-icons-react';

const CtaSection = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
      <div className="container-section w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              立即注册，开启智能志愿填报之旅
            </h2>
            <p className="text-white/80 text-lg mb-8">
              加入金榜名·AI志愿家，让AI助手为你精准推荐最适合的院校和专业，
              提高录取成功率，规划美好未来。
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "一键生成个性化志愿方案",
                "AI实时解答填报疑问",
                "精准预测录取概率",
                "全面院校专业数据分析",
                "专业志愿顾问指导服务"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 bg-white/20 rounded-full p-1">
                    <Check size={16} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              href="https://app.jinbangming.com/register" 
              className="inline-block bg-white text-[var(--primary)] font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
            >
              立即注册
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">免费注册优惠</h3>
                <p className="text-white/70">限时注册享多重权益</p>
              </div>
              
              <div className="space-y-5 mb-6">
                <div className="flex items-center justify-between bg-white/5 rounded-lg p-4">
                  <div>
                    <div className="font-medium">标准版</div>
                    <div className="text-sm text-white/70">基础志愿推荐</div>
                  </div>
                  <div>
                    <span className="line-through text-white/50 text-sm mr-2">¥99</span>
                    <span className="font-bold">免费</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-white/5 rounded-lg p-4">
                  <div>
                    <div className="font-medium">高级版</div>
                    <div className="text-sm text-white/70">专业AI助手 + 深度数据</div>
                  </div>
                  <div>
                    <span className="line-through text-white/50 text-sm mr-2">¥299</span>
                    <span className="font-bold">¥199</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-white/20 rounded-lg p-4 border border-white/30">
                  <div>
                    <div className="font-medium">VIP服务</div>
                    <div className="text-sm text-white/70">专家顾问 + 全套服务</div>
                  </div>
                  <div>
                    <span className="line-through text-white/50 text-sm mr-2">¥999</span>
                    <span className="font-bold">¥599</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-sm text-white/70 mb-6">
                * 限时优惠，仅限前1000名注册用户
              </div>
              
              <Link 
                href="https://app.jinbangming.com/register" 
                className="block w-full bg-white text-[var(--primary)] font-semibold py-3 rounded-md text-center hover:bg-gray-100 transition-colors"
              >
                立即抢购
              </Link>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[var(--accent)]/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 