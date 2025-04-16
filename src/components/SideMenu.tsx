import React from "react";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white/90 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-700 hover:text-black"
      >
        ✕
      </button>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Controls</h2>
        <p className="text-sm text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
};

export default SideMenu;
