import "../../styles/components/button.css";

const Button = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}) => {
  // 여러 색상을 처리하는 함수
  const createGradient = (colors) => {
    if (colors.includes(',')) {
      const colorArray = colors.split(',').map(c => c.trim());
      return `radial-gradient(circle, ${colorArray.join(', transparent 10%, ')}, transparent 10%)`;
    }
    return `radial-gradient(circle, ${colors}, transparent 10%)`;
  };

  return (
    <Component 
      className={`star-border-container ${className}`} 
      style={{
        padding: `${thickness}px 0`,
        ...(rest.style || {})
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: createGradient(color),
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: createGradient(color),
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default Button;
