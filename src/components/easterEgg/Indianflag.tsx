'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';

type Flower = {
  id: number;
  left: number;
  top: number;
  rotate: number;
  scale: number;
  emoji: string;
  xMove: number;
  yMove: number;
};

type Confetti = {
  id: number;
  left: number;
  top: number;
  color: string;
  size: number;
  xMove: number;
  yMove: number;
  rotation: number;
};

// Custom CSS for animations
const styles = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
  
  .animate-shine {
    animation: shine 3s ease-in-out infinite;
  }
  @keyframes flower-throw {
    0% {
      opacity: 1;
      transform: translateY(0) translateX(0) scale(1) rotate(0deg);
    }
    50% {
      opacity: 1;
      transform: translateY(-20px) translateX(var(--x-move)) scale(1.1) rotate(180deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-50px) translateX(var(--x-move-final)) scale(0.8) rotate(360deg);
    }
  }
  
  @keyframes confetti-burst {
    0% {
      opacity: 1;
      transform: translateY(0) translateX(0) scale(1) rotate(0deg);
    }
    25% {
      opacity: 1;
      transform: translateY(-15px) translateX(var(--x-move)) scale(1.2) rotate(90deg);
    }
    75% {
      opacity: 0.7;
      transform: translateY(-30px) translateX(var(--x-move-final)) scale(0.9) rotate(270deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-45px) translateX(var(--x-move-final)) scale(0.3) rotate(360deg);
    }
  }
`;

const IndianFlag = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  // Remove flowers after animation
  useEffect(() => {
    if (flowers.length > 0) {
      const timer = setTimeout(() => setFlowers([]), 1500);
      return () => clearTimeout(timer);
    }
  }, [flowers]);

  // Remove confetti after animation
  useEffect(() => {
    if (confetti.length > 0) {
      const timer = setTimeout(() => setConfetti([]), 1800);
      return () => clearTimeout(timer);
    }
  }, [confetti]);

  // Flower throw handler
  const throwFlowers = () => {
    // Generate flowers from strategic positions on the flag
    const flowerPositions = [
      { left: 8, top: 8, xMove: -15, yMove: -35 }, // top-left
      { left: 38, top: 8, xMove: 15, yMove: -35 }, // top-right
      { left: 8, top: 30, xMove: -20, yMove: -40 }, // bottom-left
      { left: 38, top: 30, xMove: 20, yMove: -40 }, // bottom-right
      { left: 23, top: 18, xMove: 0, yMove: -45 }, // center (chakra area)
    ];
    
    const newFlowers = flowerPositions.map((pos, i) => ({
      id: Date.now() + i,
      left: pos.left + Math.random() * 4 - 2,
      top: pos.top + Math.random() * 4 - 2,
      rotate: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.4,
      emoji: ["🌸", "🌺", "🌻", "🌼", "💐"][i % 5],
      xMove: pos.xMove + Math.random() * 10 - 5,
      yMove: pos.yMove + Math.random() * 10 - 5
    }));

    // Generate confetti around the flag
    const confettiColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
    const newConfetti = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + 1000 + i,
      left: -10 + Math.random() * 70, // spread around flag
      top: -5 + Math.random() * 50,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      size: 2 + Math.random() * 4,
      xMove: Math.random() * 60 - 30,
      yMove: -20 - Math.random() * 25,
      rotation: Math.random() * 360
    }));
    
    setFlowers(newFlowers);
    setConfetti(newConfetti);
  };
  // Inject custom CSS styles
  useEffect(() => {
    const styleId = 'indian-flag-styles';
    
    // Check if styles are already injected
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }
    
    // Cleanup function to remove styles when component unmounts
    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <div className="absolute top-1/2 -translate-y-[50%] -left-16 w-[50px] h-[40px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-1 cursor-pointer" onClick={throwFlowers}>
      <div className="relative h-full">
        {/* Flag Container */}
        <div className="relative bg-white rounded-md shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 h-full">
          {/* Flag Pole */}
          <div className="absolute -left-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full"></div>
          
          {/* Flag */}
          <div className="relative h-full flex flex-col">
            {/* Saffron Stripe */}
            <div className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            </div>
            
            {/* White Stripe with Chakra */}
            <div className="flex-1 bg-white relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent animate-pulse"></div>
              
              {/* Ashoka Chakra */}
              <div className="relative w-3 h-3 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Outer Circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#1e40af" 
                    strokeWidth="2"
                  />
                  
                  {/* Inner Circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="8" 
                    fill="none" 
                    stroke="#1e40af" 
                    strokeWidth="2"
                  />
                  
                  {/* 12 Spokes */}
                  {Array.from({ length: 12 }, (_, i) => {
                    const angle = (i * 360) / 12;
                    const radians = (angle * Math.PI) / 180;
                    const x1 = Math.round((50 + 8 * Math.cos(radians)) * 1000) / 1000;
                    const y1 = Math.round((50 + 8 * Math.sin(radians)) * 1000) / 1000;
                    const x2 = Math.round((50 + 42 * Math.cos(radians)) * 1000) / 1000;
                    const y2 = Math.round((50 + 42 * Math.sin(radians)) * 1000) / 1000;
                    
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#1e40af"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
            
            {/* Green Stripe */}
            <div className="flex-1 bg-gradient-to-r from-green-500 to-green-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine"></div>
          
          {/* Flower Animation */}
          {flowers.map(flower => (
            <span
              key={flower.id}
              style={{
                position: 'absolute',
                left: `${flower.left}px`,
                top: `${flower.top}px`,
                fontSize: `${flower.scale * 16}px`,
                transform: `rotate(${flower.rotate}deg)`,
                pointerEvents: 'none',
                zIndex: 10,
                '--x-move': `${flower.xMove * 0.5}px`,
                '--x-move-final': `${flower.xMove}px`,
                animation: `flower-throw 1.5s cubic-bezier(.25,.46,.45,.94) forwards`,
              } as React.CSSProperties}
            >{flower.emoji}</span>
          ))}
          
          {/* Confetti Animation */}
          {confetti.map(piece => (
            <div
              key={piece.id}
              style={{
                position: 'absolute',
                left: `${piece.left}px`,
                top: `${piece.top}px`,
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                backgroundColor: piece.color,
                borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                pointerEvents: 'none',
                zIndex: 9,
                '--x-move': `${piece.xMove * 0.5}px`,
                '--x-move-final': `${piece.xMove}px`,
                animation: `confetti-burst 1.8s cubic-bezier(.25,.46,.45,.94) forwards`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndianFlag;