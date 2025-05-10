
import React, { useEffect, useState, useRef } from 'react';
import './App.css';

function ImageModal({ src, onClose }) {
  if (!src) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
    >
      <img src={src} alt="Preview" className="max-w-[90vw] max-h-[90vh] object-contain" />
    </div>
  );
}

function CopyContract() {
  const contract = "0xf22da9a24ad027cccb5f2d496cbe91de953d363513db08a3a734d361c7c17503::LOFI::LOFI";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center mt-6 mb-12 text-white font-mono text-lg lg:text-xl">
      <p className="mb-2">Contract Address:</p>
      <button
        onClick={handleCopy}
        className="text-green-300 hover:text-green-200 px-3 py-2 border border-green-400 rounded-md transition-all text-base lg:text-lg"
        title="Click to copy"
      >
        {contract}
      </button>
      {copied && <p className="text-sm mt-2 text-green-100">Copied to clipboard!</p>}
    </div>
  );
}

// You would also include HeroSection, TeamSection, TPSDisplay, StickerGallery, MemeGallery, SocialLinks, Footer
// For brevity, we're reconstructing only a portion here. Replace or append as needed in your full project.

export default function App() {
  const [tps, setTps] = useState(1000042);
  useEffect(() => {
    const interval = setInterval(() => {
      setTps((prev) => prev + Math.floor(Math.random() * 30 + 20));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#1d81c2] min-h-screen text-white font-sans text-[1.2rem] leading-relaxed">
      {/* Insert HeroSection here */}
      <CopyContract />
      {/* Insert TeamSection here */}
      {/* Insert TPSDisplay here */}
      {/* Insert StickerGallery here */}
      {/* Insert MemeGallery here */}
      {/* Insert SocialLinks here */}
      {/* Insert Footer here */}
    </main>
  );
}
