const Grid = ({ 
  children, 
  cols = 1,
  gap = 'medium',
  className = '',
  ...props 
}) => {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };
  
  const gapClasses = {
    small: "gap-4",
    medium: "gap-8",
    large: "gap-12",
    xl: "gap-16"
  };
  
  const classes = `grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Grid;
