"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <>
      {/* Loading Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-opacity duration-300 ease-out ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <div className="space-y-4 text-center">
            {/* Elegant Loading Spinner */}
            <div className="w-8 h-8 mx-auto">
              <div className="w-full h-full border-2 border-gray-200 border-t-gray-800 rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600 font-light">Et øjeblik...</p>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div
        className={`transition-all duration-500 ease-out ${
          isLoading 
            ? "opacity-0 translate-y-4" 
            : "opacity-100 translate-y-0"
        }`}
      >
        {displayChildren}
      </div>
    </>
  );
};

export default PageTransition;
