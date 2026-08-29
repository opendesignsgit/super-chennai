'use client'

import React, { useRef, useEffect, useLayoutEffect, useState, HTMLAttributes } from 'react';

// SSR Safe LayoutEffect (Prevents Next.js SSR warnings)
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export interface AutoShrinkTextProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  /** Maximum font size in pixels (default: 60) */
  maxFontSize?: number;
  /** Minimum allowed font size in pixels (default: 12) */
  minFontSize?: number;
  /** Step size for font precision (default: 1) */
  step?: number;
  /** Maximum number of lines allowed (default: 1) */
  maxLines?: number;
  /** Optional container width class or style (e.g., "w-full") */
  className?: string;
}

export const AutoShrinkText: React.FC<AutoShrinkTextProps> = ({
  text,
  maxFontSize = 60,
  minFontSize = 12,
  step = 1,
  maxLines = 1,
  className = '',
  style,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState<number>(maxFontSize);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    const textNode = textRef.current;

    if (!container || !textNode) return;

    // Helper to test if text fits within container constraints
    const fits = (testSize: number): boolean => {
      textNode.style.fontSize = `${testSize}px`;

      const isOverflowingHeight =
        textNode.offsetHeight > container.clientHeight;
      const isOverflowingWidth =
        textNode.offsetWidth > container.clientWidth;

      if (maxLines === 1) {
        return !isOverflowingWidth;
      }

      // Check max lines threshold using line-height estimation
      const estimatedLineHeight = testSize * 1.2;
      const currentLines = Math.round(textNode.offsetHeight / estimatedLineHeight);

      return !isOverflowingHeight && currentLines <= maxLines;
    };

    // Binary search for optimal font size
    let low = minFontSize;
    let high = maxFontSize;
    let bestSize = minFontSize;

    while (low <= high) {
      const mid = Math.floor((low + high) / (2 * step)) * step;

      if (fits(mid)) {
        bestSize = mid;
        low = mid + step; // Try larger size
      } else {
        high = mid - step; // Try smaller size
      }
    }

    setFontSize(bestSize);
    setIsCalculated(true);
  }, [text, maxFontSize, minFontSize, maxLines, step]);

  // Recalculate on container resize
  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === 'undefined') return;

    const resizeObserver = new ResizeObserver(() => {
      setIsCalculated(false);
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full ${className}`}
      style={{
        ...style,
        display: '-webkit-box',
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: 'vertical',
      }}
      {...props}
    >
      <span
        ref={textRef}
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: 1.2,
          display: 'inline-block',
          visibility: isCalculated ? 'visible' : 'hidden',
          whiteSpace: maxLines === 1 ? 'nowrap' : 'normal',
          wordBreak: maxLines === 1 ? 'normal' : 'break-word',
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default AutoShrinkText;