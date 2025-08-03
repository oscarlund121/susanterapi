"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TransitionLink = ({ 
  href, 
  children, 
  className = "", 
  ...props 
}) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setIsTransitioning(true);

    // Add subtle delay for smooth transition feeling
    await new Promise(resolve => setTimeout(resolve, 150));
    
    router.push(href);
    
    // Reset transition state after navigation
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`transition-all duration-300 ease-out ${
        isTransitioning ? "opacity-75 scale-98" : "opacity-100 scale-100"
      } ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
