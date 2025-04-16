import React, { useState } from "react";
import SideMenu from "../components/SideMenu";

const CafeAurora: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/assets/cafe-aurora.png")' }}
    >
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed bottom-6 right-6 bg-white/80 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg transition z-50"
      >
        ☰
      </button>

      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};

export default CafeAurora;
