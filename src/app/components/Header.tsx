'use client';

import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'tabler-icons-react';
import { SectionContext } from '../contexts/SectionContext';

// 导航到特定部分的函数
const navigateToSection = (section: string, closeMenu?: () => void) => (e: React.MouseEvent) => {
  e.preventDefault();
  // 检查是否有全屏滚动API
  if (typeof window !== 'undefined' && window.hasOwnProperty('fullpageApi')) {
    // 使用类型断言避免TypeScript错误
    const fullpageApi = (window as unknown as { fullpageApi: { moveTo: (section: string) => void } }).fullpageApi;
    // fullPage.js的moveTo方法接受锚点名称
    fullpageApi.moveTo(section);
    if (closeMenu) {
      closeMenu();
    }
  } else {
    // 常规滚动导航
    const targetElement = document.getElementById(section);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // 减去header高度
        behavior: 'smooth'
      });
      if (closeMenu) {
        closeMenu();
      }
    }
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, setActiveSection } = useContext(SectionContext);

  const closeMenu = () => setIsMenuOpen(false);

  // 确定导航项是否为活动状态的帮助函数
  const isActive = (section: string) => activeSection === section;

  // 移动端滚动时更新当前活动的部分
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && !window.hasOwnProperty('fullpageApi')) {
        const scrollPosition = window.scrollY;
        
        // 获取所有section元素
        const sections = ['home', 'features', 'faq', 'contact'];
        
        // 查找当前滚动位置属于哪个部分
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            // 当元素顶部到视口顶部的距离在可视范围内，将其设为活动部分
            // 增加header高度的偏移量，确保准确定位
            if (
              scrollPosition >= offsetTop - 100 && 
              scrollPosition < offsetTop + offsetHeight - 100
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    // 仅在移动端或未使用fullPage.js的情况下添加滚动监听
    if (typeof window !== 'undefined' && !window.hasOwnProperty('fullpageApi')) {
      window.addEventListener('scroll', handleScroll);
      // 初始执行一次，确保页面加载时就检测当前部分
      handleScroll();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [setActiveSection]);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-section py-3">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <Link href="/" className="h-10">
              <Image 
                src="/images/logotext_bglight.png" 
                alt="金榜名AI志愿家" 
                width={200} 
                height={40} 
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#home" 
              onClick={navigateToSection('home')} 
              className={`font-medium hover:text-[var(--primary)] flex items-center ${isActive('home') ? 'text-[var(--primary)] font-bold' : ''}`}
            >
              首页
            </a>
            <a 
              href="#features" 
              onClick={navigateToSection('features')} 
              className={`font-medium hover:text-[var(--primary)] flex items-center ${isActive('features') ? 'text-[var(--primary)] font-bold' : ''}`}
            >
              产品特色
            </a>
            <a 
              href="#faq" 
              onClick={navigateToSection('faq')} 
              className={`font-medium hover:text-[var(--primary)] flex items-center ${isActive('faq') ? 'text-[var(--primary)] font-bold' : ''}`}
            >
              常见问题
            </a>
            <a 
              href="#contact" 
              onClick={navigateToSection('contact')} 
              className={`font-medium hover:text-[var(--primary)] flex items-center ${isActive('contact') ? 'text-[var(--primary)] font-bold' : ''}`}
            >
              联系我们
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="https://app.jinbangming.com" className="btn-primary flex items-center justify-center">
              注册 / 登录
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 flex items-center justify-center" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg">
          <nav className="container-section py-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              onClick={navigateToSection('home', closeMenu)}
              className={`py-2 px-4 hover:bg-[var(--secondary)] rounded-md flex items-center ${isActive('home') ? 'bg-[var(--secondary)] text-[var(--primary)] font-bold' : ''}`}
            >
              首页
            </a>
            <a 
              href="#features" 
              onClick={navigateToSection('features', closeMenu)}
              className={`py-2 px-4 hover:bg-[var(--secondary)] rounded-md flex items-center ${isActive('features') ? 'bg-[var(--secondary)] text-[var(--primary)] font-bold' : ''}`}
            >
              产品特色
            </a>
            <a 
              href="#faq" 
              onClick={navigateToSection('faq', closeMenu)}
              className={`py-2 px-4 hover:bg-[var(--secondary)] rounded-md flex items-center ${isActive('faq') ? 'bg-[var(--secondary)] text-[var(--primary)] font-bold' : ''}`}
            >
              常见问题
            </a>
            <a 
              href="#contact" 
              onClick={navigateToSection('contact', closeMenu)}
              className={`py-2 px-4 hover:bg-[var(--secondary)] rounded-md flex items-center ${isActive('contact') ? 'bg-[var(--secondary)] text-[var(--primary)] font-bold' : ''}`}
            >
              联系我们
            </a>
            <div className="flex flex-col gap-4 mt-4 pt-4 border-t">
              <Link 
                href="https://app.jinbangming.com" 
                className="btn-primary text-center flex items-center justify-center"
              >
                注册 / 登录
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 