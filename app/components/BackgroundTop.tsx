import React, { ReactNode } from "react";

interface BackgroundTopProps {
  children: ReactNode;
}

const BackgroundTop: React.FC<BackgroundTopProps> = ({ children }) => {
  return (
    <div className="min-h-screen lg:min-h-96 w-full relative">
      {/* Azure Skies */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "  radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />
      {/* Content above the background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundTop;
