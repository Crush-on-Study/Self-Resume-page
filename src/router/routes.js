// 라우팅 상수 정의
export const ROUTES = {
  INTRO: '/',
  HOME: '/home',
  SKILLS: '/skills',
  EXPERIENCE: '/experience',
  PROJECTS: '/projects'
};

// 네비게이션 메뉴 설정
export const NAV_ITEMS = [
  { 
    label: 'About Me', 
    href: '/home', 
    route: ROUTES.HOME 
  },
  { 
    label: 'TechStack', 
    href: '/skills', 
    route: ROUTES.SKILLS 
  },
  { 
    label: 'Experience', 
    href: '/experience', 
    route: ROUTES.EXPERIENCE 
  },
  { 
    label: 'Projects', 
    href: '/projects', 
    route: ROUTES.PROJECTS 
  }
]; 