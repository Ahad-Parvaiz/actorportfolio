
import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-50">
      <div className="w-24 h-24">
        {/* Helix animation from uiball.com */}
        <svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="#ef4444" className="w-full h-full">
          <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
            <circle cx="22" cy="22" r="6" strokeOpacity="0">
              <animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="22" cy="22" r="6" strokeOpacity="0">
              <animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="22" cy="22" r="8">
              <animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>
      <p className="mt-4 text-lg font-mono text-red-500 animate-pulse">Login Successful 🔓 Actor’s World ⚡...</p>
    </div>
  );
};

export default Preloader;