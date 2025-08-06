import React from "react";

const BulletList = ({ title, items, variant = "default", className = "" }) => {
  const getListClassName = () => {
    switch (variant) {
      case "grid":
        return "space-y-1 grid grid-cols-1 lg:grid-cols-2";
      default:
        return "space-y-1";
    }
  };

  return (
    <div className={`space-y-  ${className}`}>
      {title && (
        <h5 className="text-[#333333] font-medium text-sm">{title}</h5>
      )}
      <ul className={getListClassName()}>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start py-1 pr-1 space-x-3">
            <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-sm text-[#333333] font-base">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
