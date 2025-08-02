'use client';

import { useState, useEffect, createContext } from 'react';
import dynamic from 'next/dynamic';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Faq from './components/Faq';
import Contact from './components/Contact';
import { SectionContext } from './contexts/SectionContext';
import './fullpage-custom.css'; // 导入自定义fullPage样式

// 导入类型声明（types.d.ts中已经有全局声明）

// fullPage.js license key
const LICENSE_KEY = '5QN98-70J38-3YDKK-0K1JK-NROLP';

// 保存定时器的引用
let tooltipTimer: ReturnType<typeof setTimeout> | null = null;

// 动态导入ReactFullpage以避免SSR
const FullPage = dynamic(() => import('@fullpage/react-fullpage').then(mod => mod.default), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-4 border-[var(--primary)] border-t-transparent animate-spin"></div>
    </div>
  ),
});

// 定义深色背景的部分
const darkSections = [3]; // 页面索引，从0开始计算（第4页是深色背景）

// 创建一个备用内容用于非全屏模式或移动设备
const DefaultContent = () => (
  <div className="default-layout overflow-x-hidden" style={{width: '100%', maxWidth: '100%', overflowX: 'hidden'}}>
    <div id="home" className="section-container py-20">
      <div className="container-section mobile-padding">
        <Hero />
      </div>
    </div>
    <div id="features" className="section-container py-20 bg-[var(--secondary)]">
      <div className="container-section mobile-padding">
        <Features />
      </div>
    </div>
    <div id="faq" className="section-container py-20 bg-[#BEDF7B] w-full" style={{boxSizing: 'border-box', overflowX: 'hidden'}}>
      <Faq />
    </div>
    <div id="contact" className="section-container py-20 bg-[var(--primary-dark)] fp-dark-section">
      <div className="container-section mobile-padding">
        <Contact />
      </div>
    </div>
  </div>
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsMounted(true);
    
    // 检测是否为移动设备
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

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SectionContext.Provider value={{ activeSection, setActiveSection }}>
        <Header />
        
        {isMobile ? (
          // 移动端使用常规平铺布局
          <DefaultContent />
        ) : (
          // 桌面端使用 fullPage.js
          <FullPage
            licenseKey={LICENSE_KEY}
            scrollingSpeed={700}
            navigation={true}
            navigationPosition="right"
            navigationTooltips={['首页', '功能特点', '常见问题', '联系我们']}
            showActiveTooltip={false}
            anchors={['home', 'features', 'faq', 'contact']}
            sectionsColor={['#ffffff', '#f5f9ec', '#BEDF7B', '#f5f9ec']}
            credits={{ enabled: false, label: 'Made with fullPage.js', position: 'right' }}
            scrollOverflow={true}
            fitToSection={true}
            bigSectionsDestination="top"
            scrollOverflowReset={true}
            scrollBar={false}
            css3={true}
            // @ts-ignore - fullPage.js类型不匹配
            afterLoad={(origin: any, destination: any, direction: string, trigger: any) => {
              // 页面加载后平滑显示tooltip
              const nav = document.getElementById('fp-nav');
              if (nav) {
                // 确保之前的定时器取消
                if (tooltipTimer) {
                  clearTimeout(tooltipTimer);
                }
                
                // 添加显示类
                nav.classList.add('fp-show-active');
                
                // 延迟后平滑隐藏
                tooltipTimer = setTimeout(() => {
                  nav.classList.remove('fp-show-active');
                }, 3000);
                
                // 根据当前页面的背景颜色调整导航器样式
                if (darkSections.includes(destination.index)) {
                  nav.classList.add('fp-dark-nav');
                } else {
                  nav.classList.remove('fp-dark-nav');
                }
              }
              
              // 更新当前活动部分
              if (destination.anchor) {
                setActiveSection(destination.anchor.toString());
              }
            }}
            // @ts-ignore - fullPage.js类型不匹配
            onLeave={(origin: any, destination: any, direction: string, trigger: any) => {
              // 切换页面时平滑显示tooltip
              const nav = document.getElementById('fp-nav');
              if (nav) {
                // 确保之前的定时器取消
                if (tooltipTimer) {
                  clearTimeout(tooltipTimer);
                }
                
                // 添加显示类
                nav.classList.add('fp-show-active');
                
                // 延迟后平滑隐藏
                tooltipTimer = setTimeout(() => {
                  nav.classList.remove('fp-show-active');
                }, 3000);
                
                // 根据目标页面的背景颜色调整导航器样式
                if (darkSections.includes(destination.index)) {
                  nav.classList.add('fp-dark-nav');
                } else {
                  nav.classList.remove('fp-dark-nav');
                }
              }
              
              // 更新当前活动部分
              if (destination.anchor) {
                setActiveSection(destination.anchor.toString());
              }
            }}
            render={({ fullpageApi }) => {
              // 存储API到全局变量
              if (typeof window !== 'undefined') {
                (window as unknown as { fullpageApi: typeof fullpageApi }).fullpageApi = fullpageApi;
              }
              
              return (
                <div className="fullpage-wrapper">
                  <div className="section" data-anchor="home">
                    <div className="content-wrapper">
                      <Hero />
                    </div>
                  </div>
                  <div className="section" data-anchor="features">
                    <div className="content-wrapper">
                      <Features />
                    </div>
                  </div>
                  <div className="section" data-anchor="faq">
                    <div className="content-wrapper">
                      <Faq />
                    </div>
                  </div>
                  <div className="section fp-auto-height fp-dark-section" data-anchor="contact">
                    <div className="content-wrapper">
                      <Contact />
                    </div>
                  </div>
                </div>
              );
            }}
          />
        )}
      </SectionContext.Provider>
    </>
  );
}
