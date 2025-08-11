"use client";
import React from "react";
import Image from "next/image";
import CardHeader from "../ui/CardHeader";
import BulletList from "../layout/BulletList";

const MetodeCard = ({
  number = "01",
  title,
  description,
  content = [], // Array of paragraphs
  bulletItems = [],
  bulletTitle = "Hjælper med:",
  imageUrl,
  imageAlt,
  variant = "imageRight", // "imageRight", "imageLeft", "noImage"
  headerVariant = "green", // CardHeader variant
  imageShape = "rounded-lg",
}) => {
  const renderContent = () => (
    <div className="space-y-8">
      <div className="bg-white shadow-sm rounded-lg overflow-hidden h-full">
        {/* Card Header */}
        <CardHeader
          number={number}
          title={title}
          description={description}
          variant={headerVariant}
        />

        {/* Content */}
        <div>
          <div className="space-y-6">
            {/* Text Content */}
            {content.length > 0 && (
              <div className="space-y-3 p-6 shadow-sm">
                {content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            <div className="px-6 pb-6">
              {bulletItems.length > 0 && (
                <BulletList title={bulletTitle} items={bulletItems} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderImage = () => (
    <div className="relative h-full w-full">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className={`object-cover w-full h-full ${imageShape}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
      />
    </div>
  );

  // No image variant
  if (variant === "noImage") {
    return renderContent();
  }

  // Image variants (side by side on large screens)
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
      {variant === "imageLeft" ? (
        <>
          <div className="lg:order-1 order-2">{renderImage()}</div>
          <div className="lg:order-2 order-1">{renderContent()}</div>
        </>
      ) : (
        // imageRight (default)
        <>
          <div className="order-1">{renderContent()}</div>
          <div className="order-2">{renderImage()}</div>
        </>
      )}
    </div>
  );
};

export default MetodeCard;
