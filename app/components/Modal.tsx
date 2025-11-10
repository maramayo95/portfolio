"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  animation?: "scale" | "slide" | "fade" | "bounce";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const animationVariants = {
  scale: {
    initial: { scale: 0.75, y: 20, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 0.75, y: 20, opacity: 0 },
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  slide: {
    initial: { y: -50, scale: 0.95, opacity: 0 },
    animate: { y: 0, scale: 1, opacity: 1 },
    exit: { y: -50, scale: 0.95, opacity: 0 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  bounce: {
    initial: { scale: 0.3, rotate: -10, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0.5, rotate: 10, opacity: 0 },
    transition: { type: "spring", stiffness: 400, damping: 15, bounce: 0.6 },
  },
};

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  animation = "fade",
  size = "md",
  children,
}) => {
  const variant = animationVariants[animation];

  return (
    <div className="z-[999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(147,51,234,0.15) 50%, rgba(239,68,68,0.1) 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
            }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm  min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className={`relative w-full ${sizeClasses[size]} rounded-2xl p-6 
    bg-[black]/80 dark:bg-black/60 
    backdrop-blur-xl 
    border border-white/20 
    shadow-2xl 
    text-gray-100
    `}
              onClick={(e) => e.stopPropagation()}
              initial={variant.initial}
              animate={variant.animate}
              exit={variant.exit}
            >
              {title && (
                <h3 className="text-lg font-semibold mb-4 text-gray-100">
                  {title}
                </h3>
              )}

              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>

              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
