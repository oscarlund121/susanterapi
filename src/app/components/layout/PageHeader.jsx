"use client";
import React from "react";
import Image from "next/image";
import StaticButton from "../ui/StaticButton";

const PageHeader = ({ 
  title, 
  subtitle, 
  description, 
  showButton = true,
  buttonText = "Book en session",
  buttonHref = "/kontakt",
  showImage = false // Ny prop for at vise billede kun på specifikke sider
}) => {
  return (
    <section className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="mb-4">{title}</h1>

       


          {/* CTA Button (optional) */}
          {showButton && (
            <div>
              <StaticButton
                href={buttonHref}
                text={buttonText}
                size="large"
                variant="green"
                direction="left"
                i
                />
            </div>
          )}
      {/* Rektangulært billede - kun på ydelser siden */}
      {showImage && (
        <div className="mb-8">
          <Image
            src="/images/many-flowers.jpg"
            alt="Blomstereng - naturens skønhed og healing"
            width={800}
            height={400}
            className="rounded-xl object-cover w-full h-48 md:h-56 lg:h-64"
            priority
          />
        </div>
      )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
