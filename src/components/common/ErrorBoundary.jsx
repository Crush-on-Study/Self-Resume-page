import React from 'react';
import Button from './button';
import '../../styles/components/ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    // 에러가 발생하면 hasError를 true로 설정
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 정보를 state에 저장
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // 개발 환경에서는 콘솔에 에러 로그 출력
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    // 프로덕션에서는 에러 로깅 서비스로 전송 가능
    // logErrorToService(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <div className="error-icon">🚨</div>
            <h1 className="error-title">Oops! Something went wrong</h1>
            <p className="error-message">
              예상치 못한 오류가 발생했습니다. 페이지를 새로고침하거나 홈으로 돌아가보세요.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>에러 상세 정보 (개발자용)</summary>
                <div className="error-stack">
                  <h4>Error:</h4>
                  <pre>{this.state.error.toString()}</pre>
                  <h4>Component Stack:</h4>
                  <pre>{this.state.errorInfo.componentStack}</pre>
                </div>
              </details>
            )}

            <div className="error-actions">
              <Button 
                onClick={this.handleReload}
                className="error-button reload-button"
                color="#4CAF50"
                speed="3s"
              >
                🔄 새로고침
              </Button>
              <Button 
                onClick={this.handleGoHome}
                className="error-button home-button"
                color="#5DE0F0"
                speed="3s"
              >
                🏠 홈으로
              </Button>
            </div>
          </div>
        </div>
      );
    }

    // 에러가 없으면 자식 컴포넌트를 정상적으로 렌더링
    return this.props.children;
  }
}

export default ErrorBoundary;
