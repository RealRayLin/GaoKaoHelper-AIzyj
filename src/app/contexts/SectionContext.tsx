'use client';

import { createContext } from 'react';

// 创建上下文，并导出以供其他组件使用
export const SectionContext = createContext<{ 
  activeSection: string, 
  setActiveSection: (section: string) => void 
}>({
  activeSection: 'home',
  setActiveSection: () => {}
}); 