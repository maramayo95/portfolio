"use client";

import React, { useState } from "react";
import { SparkleIcon, FigmaIcon, CoralIcon, PalmTreeIcon, FlowerIcon, PerplexityIcon, HashIcon } from "./Icons"; 

import ModalProject from "./ModalProject";
import { IconWrapper } from "./Stack";

const IconGridWithModal: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeIcon, setActiveIcon] = useState<number | null>(null);

  const outerIcons = [
    {
      id: 1,
      component: <SparkleIcon />,
      title: "Creative Design",
      text: "Sparkle represents innovation and creativity applied in design projects.",
      image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    },
    {
      id: 2,
      component: <FigmaIcon />,
      title: "UI/UX Design",
      text: "Built with Figma, ensuring consistent and high-quality user experiences.",
      image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    },
    {
      id: 3,
      component: <CoralIcon />,
      title: "Color Systems",
      text: "Coral palettes bring warm tones and visual harmony to your brand identity.",
      image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    },
    {
      id: 4,
      component: <PalmTreeIcon />,
      title: "Sustainability",
      text: "We focus on sustainable design and eco-friendly digital strategies.",
      image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    },
    {
      id: 5,
      component: <FlowerIcon />,
      title: "Visual Storytelling",
      text: "Transform ideas into meaningful visuals with creative storytelling.",
      image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    },
    {
      id: 6,
      component: <PerplexityIcon />,
      title: "AI Integration",
      text: "Harnessing AI to automate and personalize the user experience.",
      image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    },
  ];

  const radius = 160;
  const centralIconRadius = 48;
  const outerIconRadius = 40;
  const svgSize = 380;
  const svgCenter = svgSize / 2;

  const handleIconClick = (id: number) => {
    setActiveIcon(id);
  };

  const handleCloseModal = () => {
    setActiveIcon(null);
  };

  return (
    <>
      {/* === Icon Grid === */}
      <div className="relative w-[380px] h-[380px] scale-75 md:scale-100">
        {/* Connecting Lines */}
        <svg width={svgSize} height={svgSize} className="absolute top-0 left-0">
          <g>
            {outerIcons.map((icon, i) => {
              const angleInDegrees = -150 + i * 60;
              const angleInRadians = angleInDegrees * (Math.PI / 180);
              const startX = svgCenter + centralIconRadius * Math.cos(angleInRadians);
              const startY = svgCenter + centralIconRadius * Math.sin(angleInRadians);
              const endX = svgCenter + (radius - outerIconRadius) * Math.cos(angleInRadians);
              const endY = svgCenter + (radius - outerIconRadius) * Math.sin(angleInRadians);
              return (
                <line
                  key={`line-${icon.id}`}
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke={hoveredId === icon.id ? "#3B82F6" : "#6B7280"}
                  strokeWidth="2"
                  className="transition-all duration-300 dark:stroke-gray-600"
                  style={{ opacity: hoveredId === icon.id ? 1 : 0.3 }}
                />
              );
            })}
          </g>
        </svg>

        {/* Central + Outer Icons */}
        <div className="absolute top-1/2 left-1/2">
          {/* Center Icon */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
            <IconWrapper className="w-24 h-24" isHighlighted={true} animationDelay={0}>
              <HashIcon />
            </IconWrapper>
          </div>

          {/* Outer Icons */}
          {outerIcons.map((icon, i) => {
            const angleInDegrees = -150 + i * 60;
            const angleInRadians = angleInDegrees * (Math.PI / 180);
            const x = radius * Math.cos(angleInRadians);
            const y = radius * Math.sin(angleInRadians);
            const iconStyle = { transform: `translate(${x}px, ${y}px)` };

            return (
              <div
                key={icon.id}
                className="absolute z-10 cursor-pointer"
                style={iconStyle}
                onMouseEnter={() => setHoveredId(icon.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleIconClick(icon.id)}
              >
                <div className="-translate-x-1/2 -translate-y-1/2">
                  <IconWrapper
                    className="w-20 h-20"
                    isHovered={hoveredId === icon.id}
                    animationDelay={i * 0.2}
                  >
                    {icon.component}
                  </IconWrapper>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* === Modal Integration === */}
      {outerIcons.map(
        (icon) =>
          activeIcon === icon.id && (
            <ModalProject
              key={icon.id}
              isOpen={activeIcon === icon.id}
              onClose={handleCloseModal}
              title={icon.title}
              text={icon.text}
              imageSrc={icon.image}
            />
          )
      )}
    </>
  );
};

export default IconGridWithModal;
