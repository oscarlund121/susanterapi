const SectionHeader = ({ 
  title, 
  subtitle,
  className = '',
  titleSize = 'large',
  ...props 
}) => {
  const titleSizes = {
    small: "text-2xl lg:text-3xl",
    medium: "text-3xl lg:text-4xl",
    large: "text-4xl lg:text-5xl xl:text-6xl",
    hero: "text-5xl lg:text-6xl"
  };
  
  return (
    <div className={`space-y-4 ${className}`} {...props}>
      <h2 className={`${titleSizes[titleSize]} font-light text-gray-800 leading-tight tracking-wide`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 font-light leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
