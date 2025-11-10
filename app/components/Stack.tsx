'use client'

import React from 'react';
import IconGridWithModal from './IconGridModal';

// SVG Icon Components (cleaned up and optimized)


// Wrapper for individual icons to give them the glassy container style and hover effects
export const IconWrapper = ({ children, className = "", isHighlighted = false, isHovered = false, animationDelay = 0 }: { children: React.ReactNode; className?: string; isHighlighted?: boolean; isHovered?: boolean; animationDelay?: number }) => (
    <div className={`
        backdrop-blur-xl rounded-2xl flex items-center justify-center transition-all duration-300
        ${isHighlighted 
            ? 'dark:bg-gray-700/50 bg-gray-100/80 border border-blue-400/50 dark:shadow-blue-500/20 shadow-blue-400/30 shadow-2xl animate-breathing-glow' 
            : `dark:bg-white/5 bg-white/60 border border-gray-200/50 dark:border-white/10 ${!isHovered && 'animate-float'}`
        }
        ${isHovered 
            ? 'dark:bg-gray-600/50 bg-gray-200/80 border-blue-400/60 scale-110 dark:shadow-blue-400/30 shadow-blue-400/40 shadow-2xl' 
            : 'dark:hover:bg-white/10 hover:bg-gray-100/80 dark:hover:border-white/20 hover:border-gray-300/60'
        }
        ${className}
    `}
    style={{ animationDelay: `${animationDelay}s` }}
    >
        {children}
    </div>
);

// The grid of icons, now with animations and precise SVG connecting lines


// The main App component that brings everything together
export default function Stack() {
  return (
    <div className="w-full flex items-center justify-center font-sans p-8 overflow-hidden">
        {/* Style block to define the animations. */}
        <style>
            {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }

                @keyframes breathing-glow {
                    0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); }
                    50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.1); }
                    100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); }
                }
                @keyframes breathing-glow-light {
                    0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.2); }
                    50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.05); }
                    100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.2); }
                }
                .animate-breathing-glow {
                    animation: breathing-glow 3s ease-in-out infinite;
                }
                .dark .animate-breathing-glow {
                    animation: breathing-glow 3s ease-in-out infinite;
                }
                :not(.dark) .animate-breathing-glow {
                    animation: breathing-glow-light 3s ease-in-out infinite;
                }
            `}
        </style>

        {/* Enhanced background with a radial gradient */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className="relative z-[999] container mx-auto flex items-center justify-end">
            <IconGridWithModal />
        </div>
    </div>
  );
}
