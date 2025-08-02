// fullPage.js API 类型定义
interface FullPageApi {
  moveTo: (section: string | number, slide?: number) => void;
  silentMoveTo: (section: string | number, slide?: number) => void;
  moveSlideRight: () => void;
  moveSlideLeft: () => void;
  setAutoScrolling: (value: boolean) => void;
  setFitToSection: (value: boolean) => void;
  fitToSection: () => void;
  setLockAnchors: (value: boolean) => void;
  setAllowScrolling: (value: boolean, directions?: string[]) => void;
  setKeyboardScrolling: (value: boolean, directions?: string[]) => void;
  setRecordHistory: (value: boolean) => void;
  setScrollingSpeed: (value: number) => void;
  destroy: (all?: boolean) => void;
  reBuild: () => void;
  setResponsive: (value: boolean) => void;
  getActiveSection: () => unknown;
  getActiveSlide: () => unknown;
  getFullpageData: () => unknown;
  landscapeScroll: (section: unknown, slide: unknown) => void;
  scrollSlider: (section: unknown, slide: unknown) => void;
}

declare global {
  interface Window {
    fullpageApi: FullPageApi;
  }
} 