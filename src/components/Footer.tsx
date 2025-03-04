'use client';

import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-12">
      <div className="flex justify-center">
        <a href="https://ieee.ics.uci.edu/" target="_blank" rel="noopener noreferrer">
          <img src="/bithacks-logo.png" className="h-40 rounded-md"/>
        </a>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="mailto:ieee.ucirvine@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="/mail.png" className="w-auto h-8" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(38%) saturate(4218%) hue-rotate(231deg) brightness(89%) contrast(102%)', objectFit: 'contain' }} />
        </a>
        <a href="https://www.instagram.com/ieee_uci/" target="_blank" rel="noopener noreferrer">
        <img src="/instagram.svg" className="w-auto h-8" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(38%) saturate(4218%) hue-rotate(231deg) brightness(89%) contrast(102%)', objectFit: 'contain' }} />
        </a>
        <a href="https://discord.com/invite/vmZNBcRFeg" target="_blank" rel="noopener noreferrer">
          <img src="/discord.svg" className="w-auto h-8" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(38%) saturate(4218%) hue-rotate(231deg) brightness(89%) contrast(102%)', objectFit: 'contain' }} />
        </a>
      </div>
      <div className="text-center text-md font-jersey" style={{ color: '#322FAC' }}>
        &copy; 2025 BitHacks | Made with 👾 and 💜 from BitHacks
      </div>
    </footer>
  );
};

  export default Footer;