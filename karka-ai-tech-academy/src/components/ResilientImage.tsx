import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackLabel?: string;
  loading?: 'lazy' | 'eager';
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative overflow-hidden bg-slate-900',
  fallbackLabel,
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={containerClassName}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={className}
        />
      ) : (
        <div className="w-full h-full min-h-[180px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-center">
          <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-3">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium text-slate-300 max-w-[200px] truncate">
            {fallbackLabel || alt}
          </span>
        </div>
      )}
    </div>
  );
};
