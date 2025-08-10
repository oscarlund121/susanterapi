import React from "react";

const BulletList = ({ title, items, variant = "default", className = "" }) => {
  const getListClassName = () => {
    switch (variant) {
      case "grid":
        return "space-y-1 grid grid-cols-1 lg:grid-cols-2";
      case "hover-expand":
        return "space-y-2";
      default:
        return "space-y-1";
    }
  };

  const getItemClassName = () => {
    switch (variant) {
      case "hover-expand":
        return "flex items-start py-1 pr-1 space-x-3 transition-all duration-300";
      default:
        return "flex items-start py-1 pr-1 space-x-3";
    }
  };

  const getBulletClassName = () => {
    switch (variant) {
      case "hover-expand":
        return "w-3 h-3 bg-white/80 group-hover:bg-white rounded-full mt-1.5 flex-shrink-0 transition-all duration-300";
      default:
        return "w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0";
    }
  };

  const getTextClassName = () => {
    switch (variant) {
      case "hover-expand":
        return "text-base font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0";
      default:
        return "text-sm text-[#333333] font-base";
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {title && (
        <h5 className="text-[#333333] font-medium text-sm">{title}</h5>
      )}
      <ul className={getListClassName()}>
        {items.map((item, idx) => (
          <li key={idx} className={getItemClassName()}>
            <div className={getBulletClassName()}></div>
            <span className={getTextClassName()}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
