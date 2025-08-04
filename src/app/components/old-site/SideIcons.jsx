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
      className="group relative flex items-center text-white transition-all duration-500"
    >
      {/* Label */}
      <span className="absolute right-full mr-6 bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 text-xs font-light opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 whitespace-nowrap tracking-wide shadow-lg border border-gray-100">
        {label}
      </span>

      {/* Icon */}
      <div className="bg-white/15 backdrop-blur-md border border-white/25 text-white p-3 hover:bg-white/25 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105">
        {icon}
      </div>
    </a>
  );
}
