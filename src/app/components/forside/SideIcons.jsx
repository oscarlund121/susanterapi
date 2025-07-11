'use client';

import { Mail, Calendar, Phone } from "lucide-react";

export default function SideIcons() {
  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
      <HoverIcon
        label="Ring"
        icon={<Phone size={16} />}
        link="tel:+4525392539"
      />
      <HoverIcon
        label="Book"
        icon={<Calendar size={16} />}
        link="/kontakt"
      />
      <HoverIcon
        label="Mail"
        icon={<Mail size={16} />}
        link="mailto:susanalbertsen69@gmail.com"
      />
    </div>
  );
}

function HoverIcon({ label, icon, link }) {
  return (
    <a
      href={link}
      className="group relative flex items-center text-white transition-all duration-300"
    >
      {/* Label */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 text-xs font-light opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap tracking-wide">
        {label}
      </span>

      {/* Icon */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-2 hover:bg-white/20 transition-all duration-300">
        {icon}
      </div>
    </a>
  );
}
