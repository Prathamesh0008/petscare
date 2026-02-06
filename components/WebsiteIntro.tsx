'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPaw } from 'react-icons/fa';

interface WebsiteIntroProps {
  onIntroComplete: () => void;
}

export default function WebsiteIntro({ onIntroComplete }: WebsiteIntroProps) {
  const [stage, setStage] = useState<'initial' | 'moving' | 'complete'>('initial');

  useEffect(() => {
    const t1 = setTimeout(() => setStage('moving'), 2000);
    const t2 = setTimeout(() => {
      setStage('complete');
      setTimeout(onIntroComplete, 400);
    }, 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onIntroComplete]);

  if (stage === 'complete') return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          stage === 'initial'
            ? 'opacity-100'
            : 'opacity-0'
        }`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552053831-71594a27632d?w=1920&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CENTERED CONTAINER */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* LOGO */}
        <div
          className="absolute transition-all duration-700 ease-out"
          style={{
            width: stage === 'initial' ? 320 : 40,
            height: stage === 'initial' ? 320 : 40,
            top: stage === 'initial' ? '50%' : '28px',
            left: stage === 'initial' ? '50%' : '32px',
            transform:
              stage === 'initial'
                ? 'translate3d(-50%, -50%, 0)'
                : 'translate3d(0, 0, 0)',
          }}
        >
          <div className="relative w-full h-full">
            {/* Glow */}
            {stage === 'initial' && (
              <div className="absolute -inset-6 rounded-full bg-orange-400/40 blur-3xl" />
            )}

            {/* Image */}
            <div
              className={`relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-all ${
                stage === 'initial'
                  ? 'border-8 border-white'
                  : 'border-2 border-amber-500'
              }`}
            >
              <Image
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60"
                alt="PawHaven"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* TEXT (perfectly centered) */}
        {stage === 'initial' && (
          <div className="absolute mt-[420px] text-center space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white">
              Welcome
            </h1>
            <p className="text-2xl md:text-3xl text-white/90">
              to PawHaven Vashi
            </p>

            <div className="flex justify-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-150" />
              <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-300" />
            </div>
          </div>
        )}
      </div>

      {/* Loading */}
      {stage === 'initial' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80">
          Loading shelter…
        </div>
      )}
    </div>
  );
}
