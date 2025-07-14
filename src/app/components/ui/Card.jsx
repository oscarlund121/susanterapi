const Card = ({ 
  children, 
  variant = 'default', 
  className = '',
  hover = false,
  ...props 
}) => {
  const baseClasses = "";
  
  const variants = {
    default: "py-6",
    compact: "py-4", 
    spacious: "py-8",
    glass: "py-6"
  };
  
  const hoverEffect = hover ? "transition-all duration-300" : "";
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverEffect} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
