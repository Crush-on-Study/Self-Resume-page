import { useRef, useEffect, useState } from "react";
import ShinyText from "../external/shinyText";
import "../../styles/components/GooeyNav.css";

const GooeyNav = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [isMobile, setIsMobile] = useState(false);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance, pointIndex, totalPoints) => {
    const angle =
      ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate:
        rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (element) => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty("--time", `${bubbleTime}ms`);

    // 모바일에서는 파티클 수를 줄여서 성능 최적화
    const mobileParticleCount = isMobile ? Math.floor(particleCount / 2) : particleCount;

    for (let i = 0; i < mobileParticleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove("active");

      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.classList.add("particle");
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        particle.style.setProperty(
          "--color",
          `var(--color-${p.color}, white)`
        );
        particle.style.setProperty("--rotate", `${p.rotate}deg`);

        point.classList.add("point");
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add("active");
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // Do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element) => {
    if (!containerRef.current || !filterRef.current || !textRef.current)
      return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e, index) => {
    e.preventDefault(); // 기본 href 동작 방지
    e.stopPropagation(); // 이벤트 버블링 방지
    const liEl = e.currentTarget;
    if (activeIndex === index) return;

    setActiveIndex(index);
    updateEffectPosition(liEl);

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".particle");
      particles.forEach((p) => {
        try {
          filterRef.current.removeChild(p);
        } catch (e) {
          // 이미 제거된 경우 무시
        }
      });
    }

    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }

    if (filterRef.current) {
      setTimeout(() => {
        makeParticles(filterRef.current);
      }, 50);
    }
  };

  const handleMouseEnter = (index) => {
    // 호버 시 프리로딩 실행
    if (items[index] && items[index].onMouseEnter) {
      items[index].onMouseEnter();
    }
  };

  const handleTouchStart = (e, index) => {
    // 터치 시작 시 시각적 피드백
    const target = e.currentTarget;
    target.style.transform = 'scale(0.95)';
  };

  const handleTouchEnd = (e, index) => {
    // 터치 종료 시 원래 크기로 복원
    const target = e.currentTarget;
    target.style.transform = 'scale(1)';
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick({ currentTarget: liEl }, index);
      }
    }
  };

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add("active");
      
      // 모바일에서 active 요소가 보이도록 스크롤
      if (isMobile && activeLi) {
        const container = navRef.current;
        const activeRect = activeLi.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        // active 요소가 화면 밖에 있으면 스크롤
        if (activeRect.left < containerRect.left || activeRect.right > containerRect.right) {
          activeLi.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }
      
      // 초기 로드 시에도 이펙트 표시
      setTimeout(() => {
        if (filterRef.current) {
          makeParticles(filterRef.current);
        }
      }, 100);
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi =
        navRef.current?.querySelectorAll("li")[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex, isMobile]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <nav>
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  handleClick(e, index);
                  if (item.onClick) {
                    item.onClick();
                  }
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onTouchStart={(e) => handleTouchStart(e, index)}
                onTouchEnd={(e) => handleTouchEnd(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                role="button"
                tabIndex={0}
                aria-pressed={activeIndex === index}
                aria-label={item.label}
              >
                <ShinyText 
                  text={item.label} 
                  disabled={activeIndex !== index}
                  speed={isMobile ? 1.5 : 2}
                  className="nav-text"
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
};

export default GooeyNav;
