import React, { ReactNode } from "react";

interface BackgroundBottomProps {
  children: ReactNode;
}

const BackgroundBottom: React.FC<BackgroundBottomProps> = ({ children }) => {
  return (
    <div className="min-h-screen  w-full relative">
      {/* Azure Depths */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
        }}
      />
      {/* Content above the background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundBottom;
