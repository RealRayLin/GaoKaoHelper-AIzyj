'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, ArrowRight } from 'tabler-icons-react';
import { useEffect, useState } from 'react';

// 导航到特定部分的函数
const navigateToSection = (section: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  if (typeof window !== 'undefined' && window.hasOwnProperty('fullpageApi')) {
    // 使用类型断言避免TypeScript错误
    const fullpageApi = (window as unknown as { fullpageApi: { moveTo: (section: string) => void } }).fullpageApi;
    // fullPage.js的moveTo方法接受锚点名称
    fullpageApi.moveTo(section);
  } else {
    // 常规滚动导航
    const targetElement = document.getElementById(section);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // 减去header高度
        behavior: 'smooth'
      });
    }
  }
};

const Hero = () => {
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

  return (
    <section className="h-full flex items-center justify-center">
      <div className="container-section w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Hero Text Content */}
          <motion.div 
            className={`flex-1 ${isMobile ? 'text-center' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 ${isMobile ? 'mx-auto' : ''}`}>
              <span className="text-[var(--primary)]">真 · AI</span> 高考志愿填报系统
              <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl">个性化定制最优志愿方案</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              基于大语言模型，以 AI Agent 为架构，不同于传统志愿卡产品简单匹配，
              通过自然语言交互和智能排序，为每位考生量身打造科学的升学规划。
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 ${isMobile ? 'justify-center' : ''}`}>
              <Link href="https://app.jinbangming.com/register" className="btn-primary px-8 py-3 text-center">
                立即注册
              </Link>
              <a 
                href="#features" 
                onClick={navigateToSection('features')} 
                className="btn-secondary px-8 py-3 text-center"
              >
                了解更多
              </a>
            </div>
          </motion.div>

          {/* Hero Image/Animation */}
          <motion.div 
            className="flex-1 relative mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[var(--primary)]/10 z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[var(--accent)]/10 z-0"></div>
              
              {/* Main Feature Showcase */}
              <div className="relative bg-white shadow-2xl rounded-2xl p-6 z-10">
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-md bg-[var(--primary)] flex items-center justify-center text-white font-bold text-xl mr-3">
                    AI
                  </div>
                  <div>
                    <div className="text-lg font-bold">智能对话系统</div>
                    <div className="text-xs text-gray-500">基于大语言模型的 AI Agent 架构</div>
                  </div>
                </div>
                
                <div className="bg-[var(--secondary)] rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">院校智能匹配</h3>
                    <span className="text-sm bg-[var(--primary)] text-white px-2 py-1 rounded">98% 匹配度</span>
                  </div>
                  <div className="relative">
                    <div className="flex items-center bg-white rounded-lg px-4 py-3 mb-2">
                      <Search size={18} className="text-gray-400 mr-2" />
                      <input 
                        type="text" 
                        className="w-full bg-transparent outline-none text-sm"
                        placeholder="输入你的高考分数与选科"
                        disabled
                      />
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <div className="font-medium">南开大学</div>
                          <div className="text-xs text-gray-500">计算机科学与技术</div>
                        </div>
                        <div className="text-xs font-medium text-[var(--primary)]">录取概率: 87%</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div className="bg-[var(--primary)] h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                      
                      <div className="flex justify-between text-xs text-gray-500">
                        <div>最低分: 623</div>
                        <div>全国排名: 24,560</div>
                        <div>招生人数: 128</div>
                      </div>
                    </div>
                    <button className="absolute bottom-3 right-3 bg-[var(--primary)] text-white p-1 rounded-full">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-gray-100 rounded-lg p-3 hover:border-[var(--primary)]/30 transition-colors">
                    <div className="text-sm font-medium mb-1">自然语言交互</div>
                    <div className="text-xs text-gray-500">模糊偏好精准匹配院校专业</div>
                  </div>
                  <div className="border border-gray-100 rounded-lg p-3 hover:border-[var(--primary)]/30 transition-colors">
                    <div className="text-sm font-medium mb-1">智能排序</div>
                    <div className="text-xs text-gray-500">多维度综合评估最优志愿</div>
                  </div>
                  <div className="border border-gray-100 rounded-lg p-3 hover:border-[var(--primary)]/30 transition-colors">
                    <div className="text-sm font-medium mb-1">小众特色选项（即将推出）</div>
                    <div className="text-xs text-gray-500">提前批录取的特殊院校选择</div>
                  </div>
                  <div className="border border-gray-100 rounded-lg p-3 hover:border-[var(--primary)]/30 transition-colors">
                    <div className="text-sm font-medium mb-1">职业规划测试（即将推出）</div>
                    <div className="text-xs text-gray-500">科学评估职业匹配度</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 