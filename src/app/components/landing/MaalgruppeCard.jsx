import React from "react";
import BulletList from "../layout/BulletList";
import SectionBadge from "../layout/SectionBadge";

const MaalgruppeCard = ({ gruppe }) => {
  return (
    <div className=" rounded-xl shadow-sm ">
      {/* Card header med fast højde */}
      <div className="p-6 border-b bg-[#fff100]/10 rounded-t-xl h-32">
        <div className="flex flex-col  gap-3 h-full">
          <div>
            <SectionBadge variant="small">{gruppe.number}</SectionBadge>
          </div>
          <div >
            <h3 className="font-semibold leading-tight mb-1">{gruppe.title || gruppe.label}</h3>
          
          </div>
        </div>
      </div>
      
      {/* Card content */}
      <div className="py-4 pl-4 h-35">
        
        <BulletList items={gruppe.items} />
      </div>
    </div>
  );
};

export default MaalgruppeCard;
