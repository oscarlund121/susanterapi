import React from "react";

const BulletList = ({ title, items, bulletColor = "#1cc18e", className = "" }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {title && (
        <h5 className="text-[#333333] text-sm">{title}</h5>
      )}
      <ul className="space-y-2 px-1">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <div 
              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
              style={{ backgroundColor: bulletColor }}
            ></div>
            <span className="text-base leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
