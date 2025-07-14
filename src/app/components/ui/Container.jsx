const Container = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variants = {
    default: "max-w-6xl mx-auto px-8",
    full: "max-w-none",
    narrow: "max-w-4xl mx-auto px-8",
    section: "max-w-4xl px-8 lg:pl-8 xl:pl-16 2xl:pl-20",
    textSection: "px-8 lg:pl-16 lg:pr-8 xl:pr-16 2xl:pr-20"
  };
  
  const classes = `${variants[variant]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container;
