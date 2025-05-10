
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
    <div className="text-center mt-4 text-white font-mono text-sm lg:text-base">
      <p className="mb-2">Contract Address:</p>
      <button
        onClick={handleCopy}
        className="text-green-300 hover:text-green-200 px-2 py-1 border border-green-400 rounded transition-all"
        title="Click to copy"
      >
        {contract}
      </button>
      {copied && <p className="text-xs mt-2 text-green-100">Copied to clipboard!</p>}
    </div>
  );
}
