"use client";
import React from "react";
import BulletList from "../layout/BulletList";
import YellowButton from "../ui/YellowButton";

const LandingMaalCard = ({ 
  title, 
  items, 
  buttonText = "Læs mere", 
  buttonSize = "small",
  href = "/ydelser",
  variant = "default" // default, minimal, icon, gradient
}) => {
  
  // Variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case "minimal":
        return {
          container: "bg-white border-2 border-gray-100 hover:border-[#1cc18e]/30 rounded-xl p-8 transition-all duration-300 hover:shadow-md",
          title: "text-2xl font-light text-gray-800 mb-6",
          bulletContainer: "h-32 flex items-start mb-6",
          button: "flex justify-center"
        };
      case "icon":
        return {
          container: "bg-white shadow-sm rounded-lg p-6 border-l-4 border-[#1cc18e] hover:shadow-md transition-shadow duration-300",
          title: "text-xl font-light text-gray-800 mb-4 flex items-center gap-3",
          bulletContainer: "h-32 flex items-start mb-4",
          button: "flex justify-end"
        };
      case "gradient":
        return {
          container: "bg-gradient-to-br from-white to-gray-50 shadow-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300",
          title: "text-xl font-light text-gray-800 mb-4",
          bulletContainer: "h-32 flex items-start mb-4",
          button: "flex justify-end"
        };
      default:
        return {
          container: "bg-white shadow-sm rounded-lg overflow-hidden flex flex-col h-full",
          title: "text-xl font-light text-gray-800",
          bulletContainer: "h-32 flex items-start",
          button: "flex justify-end mt-4"
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={styles.container}>
      {variant === "default" ? (
        // Original design med flex-col struktur
        <div className="p-6 space-y-4 flex-grow flex flex-col">
          <h4 className={styles.title}>
            {title}
          </h4>
          <div className={styles.bulletContainer}>
            <BulletList items={items} />
          </div>
          <div className={styles.button}>
            <YellowButton text={buttonText} size={buttonSize} href={href} />
          </div>
        </div>
      ) : (
        // Alternative designs
        <>
          <h4 className={styles.title}>
            {variant === "icon" && (
              <div className="w-8 h-8 bg-[#1cc18e]/10 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#1cc18e] rounded-full"></div>
              </div>
            )}
            {title}
          </h4>
          <div className={styles.bulletContainer}>
            <BulletList items={items} />
          </div>
          <div className={styles.button}>
            <YellowButton text={buttonText} size={buttonSize} href={href} />
          </div>
        </>
      )}
    </div>
  );
};

export default LandingMaalCard;
