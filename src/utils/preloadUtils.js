// 네트워크 상태 확인 및 조건부 프리로딩 유틸리티

// 네트워크 상태 확인
export const checkNetworkStatus = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    return {
      effectiveType: connection.effectiveType, // 'slow-2g', '2g', '3g', '4g'
      downlink: connection.downlink, // Mbps
      rtt: connection.rtt, // Round trip time in ms
      saveData: connection.saveData // Data saver mode
    };
  }
  return null;
};

// 네트워크 상태에 따른 프리로딩 결정
export const shouldPreload = () => {
  const networkInfo = checkNetworkStatus();
  
  if (!networkInfo) {
    // 네트워크 정보를 가져올 수 없는 경우 기본적으로 프리로딩 허용
    return true;
  }

  // 느린 네트워크에서는 프리로딩 비활성화
  if (networkInfo.effectiveType === 'slow-2g' || networkInfo.effectiveType === '2g') {
    return false;
  }

  // 데이터 절약 모드에서는 프리로딩 비활성화
  if (networkInfo.saveData) {
    return false;
  }

  // 다운로드 속도가 1Mbps 미만이면 프리로딩 비활성화
  if (networkInfo.downlink < 1) {
    return false;
  }

  return true;
};

// 조건부 프리로딩 함수
export const conditionalPreload = (importFn, delay = 0) => {
  if (shouldPreload()) {
    setTimeout(() => {
      importFn();
    }, delay);
  }
};

// 페이지별 프리로딩 전략
export const preloadStrategies = {
  home: () => {
    if (shouldPreload()) {
      setTimeout(() => import('../pages/SkillsPage'), 2000);
      setTimeout(() => import('../pages/ProjectsPage'), 4000);
    }
  },
  skills: () => {
    if (shouldPreload()) {
      setTimeout(() => import('../pages/ExperiencePage'), 2000);
      setTimeout(() => import('../pages/ProjectsPage'), 4000);
    }
  },
  experience: () => {
    if (shouldPreload()) {
      setTimeout(() => import('../pages/ProjectsPage'), 2000);
    }
  },
  projects: () => {
    if (shouldPreload()) {
      // Projects 페이지는 이미 로드되었으므로 추가 프리로딩 불필요
    }
  }
};
