"use client";
import React from "react";

export default function DownloadCV() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/matias_aramayo_cv.pdf";
    link.download = "matias_aramayo_cv.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-3 cursor-pointer bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
    >
      Get Resume
    </button>
  );
}
