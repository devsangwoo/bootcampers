import React from 'react';

interface SparkEffectProps {
  color?: string;
  size?: number;
}

export const SparkEffect: React.FC<SparkEffectProps> = ({ 
  color = 'rgba(255, 182, 193, 0.8)', 
  size = 20 
}) => {
  return (
    <div className="absolute pointer-events-none">
      <div 
        className="animate-spark"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: 'blur(1px)',
        }}
      />
    </div>
  );
};