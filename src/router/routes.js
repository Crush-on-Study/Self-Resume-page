// 라우팅 상수 정의
export const ROUTES = {
  INTRO: '/',
  HOME: '/home',
  SKILLS: '/skills',
  EXPERIENCE: '/experience',
  PROJECTS_FUN: '/projects-fun',
  PROJECTS_COMPANY: '/projects-company'
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
    label: 'Projects for fun', 
    href: '/projects-fun', 
    route: ROUTES.PROJECTS_FUN 
  },
  { 
    label: 'Projects in Company', 
    href: '/projects-company', 
    route: ROUTES.PROJECTS_COMPANY 
  }
]; 