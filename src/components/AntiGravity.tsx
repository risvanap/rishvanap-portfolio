import React, { useState, useEffect } from 'react';

interface AntiGravityProps {
  children: React.ReactNode;
  className?: string;
}

export const AntiGravity: React.FC<AntiGravityProps> = ({ children, className = "" }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let frameId: number;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = (time - startTime) / 1000;
      // Smooth sinusoidal floating anti-gravity oscillation
      const y = Math.sin(elapsed * 1.8) * 5;
      setOffsetY(y);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div 
      className={`relative transition-transform duration-100 ease-out ${className}`}
      style={{
        transform: `translateY(${offsetY}px)`,
        willChange: 'transform'
      }}
    >
      {/* Subtle anti-gravity energy aura */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-500/20 rounded-2xl blur-md -z-10 pointer-events-none opacity-50" />
      {children}
    </div>
  );
};

export default AntiGravity;
