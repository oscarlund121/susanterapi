'use client';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  href,
  className = '',
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center gap-3 font-light tracking-wide group transition-all duration-500";
  
  const variants = {
    primary: "bg-gray-800 text-white hover:bg-gray-700 hover:shadow-lg",
    secondary: "border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white",
    ghost: "text-white/80 hover:text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20",
    light: "bg-white/95 backdrop-blur-sm text-gray-800 shadow-lg hover:shadow-xl hover:bg-white border border-gray-100"
  };
  
  const sizes = {
    small: "px-6 py-3 text-sm",
    medium: "px-8 py-4 text-sm",
    large: "px-10 py-5 text-base"
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const content = (
    <>
      <span>{children}</span>
      <span className="transform transition-transform group-hover:translate-x-1 text-xs opacity-70 group-hover:opacity-100">→</span>
    </>
  );
  
  // Hvis der er et href, render som link (navigation)
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }
  
  // Ellers render som button (handlinger)
  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
