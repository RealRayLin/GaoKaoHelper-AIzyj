'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, BrandWechat } from 'tabler-icons-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// 导航到特定部分的函数
const navigateToSection = (section: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  if (typeof window !== 'undefined' && window.hasOwnProperty('fullpageApi')) {
    // 使用类型断言避免TypeScript错误
    const fullpageApi = (window as unknown as { moveTo: (section: string) => void });
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

const Contact = () => {
  const currentYear = new Date().getFullYear();
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
    <section className="bg-[var(--primary-dark)] text-white min-h-screen flex flex-col justify-center">
      <div className="container-section py-10 md:py-16">
        <div className={`mb-12 ${isMobile ? 'text-center' : ''}`}>
          <motion.span 
            className="text-[var(--accent)] font-semibold mb-2 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            联系我们
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            让我们一起开启<br />
            智能志愿填报之旅
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className={`md:col-span-3 ${isMobile ? 'flex flex-col items-center text-center' : ''}`}>
            <div className="mb-4">
              <Image 
                src="/images/logotext_bgdark.png" 
                alt="金榜名AI志愿家" 
                width={200} 
                height={40} 
                className="h-10 w-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              高考愿，金榜名，<br />
              人生抉择，让AI志愿家为你答疑解惑。
            </p>
            {isMobile && (
              <div className="w-36 h-36 bg-white/10 border border-white/20 rounded-md flex items-center justify-center mt-8">
                <Image 
                  src="/images/qr_bgdark.png" 
                  alt="扫码添加" 
                  width={120} 
                  height={120} 
                  className="w-30 h-30"
                  priority
                />
              </div>
            )}
          </div>

          {/* QR Code in its own column for desktop view */}
          {!isMobile && (
            <div className="md:col-span-4 flex justify-center items-center">
              <div className="w-36 h-36 bg-white/10 border border-white/20 rounded-md flex items-center justify-center">
                <Image 
                  src="/images/qr_bgdark.png" 
                  alt="扫码添加" 
                  width={120} 
                  height={120} 
                  className="w-30 h-30"
                  priority
                />
              </div>
            </div>
          )}

          <div className={`md:col-span-2 md:col-start-8 ${isMobile ? 'text-center mt-6' : ''}`}>
            <h3 className="font-bold text-lg mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={navigateToSection('home')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  首页
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={navigateToSection('features')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  产品特色
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={navigateToSection('about')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  关于我们
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={navigateToSection('faq')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  常见问题
                </a>
              </li>
            </ul>
          </div>

          <div className={`md:col-span-3 ${isMobile ? 'text-center mt-6' : ''}`}>
            <h3 className="font-bold text-lg mb-4">联系方式</h3>
            <div className={`space-y-3 ${isMobile ? 'flex flex-col items-center' : ''}`}>
              <div className={`flex items-start ${isMobile ? 'justify-center' : ''}`}>
                <div className={`text-white mr-4 ${isMobile ? 'hidden' : ''}`}>
                  <BrandWechat size={20} />
                </div>
                <div>
                  <p className="text-gray-300">扫描二维码</p>
                  <p className="text-gray-300">添加企业微信</p>
                </div>
              </div>
              
              <div className={`flex items-start ${isMobile ? 'justify-center' : ''}`}>
                <div className={`text-white mr-4 ${isMobile ? 'hidden' : ''}`}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-300">联系邮件</p>
                  <a href="mailto:Charles@JinBangMing.com" className="text-gray-300 hover:text-white">
                    Charles@JinBangMing.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-200 text-sm mb-4 md:mb-0">
              &copy; {currentYear} 金榜名 · AI志愿家 · 保留所有权利
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-200 text-sm hover:text-white">
                隐私政策
              </Link>
              <Link href="/terms-of-service" className="text-gray-200 text-sm hover:text-white">
                服务条款
              </Link>
              <Link href="/help" className="text-gray-200 text-sm hover:text-white">
                使用帮助
              </Link>
            </div>
          </div>
          <div className="text-center text-xs text-gray-300 mt-4">
            津ICP备2025031507号-1
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 