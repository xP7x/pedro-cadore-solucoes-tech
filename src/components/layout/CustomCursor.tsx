import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [data-cursor-text], [role="button"]');
      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute('data-cursor-text');
        setCursorText(text || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // Smooth trailing ring effect loop
    let animationFrameId: number;
    const follow = () => {
      setTrailingPos(prev => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2
      }));
      animationFrameId = requestAnimationFrame(follow);
    };
    follow();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small Central Dot */}
      <div
        className="fixed pointer-events-none z-[99999] rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          backgroundColor: isHovered ? '#22d3ee' : '#ffffff',
          transform: 'translate(-50%, -50%)',
          boxShadow: isHovered ? '0 0 12px #22d3ee' : 'none'
        }}
      />

      {/* Trailing Outer Glow Ring / Capsule with Text */}
      <div
        className="fixed pointer-events-none z-[99998] rounded-full border flex items-center justify-center transition-all duration-300 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: cursorText ? '100px' : isHovered ? '50px' : '32px',
          height: cursorText ? '36px' : isHovered ? '50px' : '32px',
          borderRadius: cursorText ? '9999px' : '50%',
          transform: 'translate(-50%, -50%)',
          borderColor: isHovered ? 'rgba(34, 211, 238, 0.8)' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: cursorText ? 'rgba(11, 13, 18, 0.9)' : isHovered ? 'rgba(34, 211, 238, 0.12)' : 'transparent',
          backdropFilter: cursorText ? 'blur(8px)' : 'none'
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider px-2">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
