'use client';
import { useEffect, useRef } from 'react';

// Import the Sakura class (you may need to export it from SakuraEffect.js)
import {Sakura} from './SakuraEffect.js'; // Adjust the path if needed

export default function SakuraEffectComponent({ selector = '#sakura-container', options = {} }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    // Create Sakura effect on the container
    if (containerRef.current) {
      // Give the container an id if it doesn't have one
      containerRef.current.id = selector.replace('#', '');
      const sakura = new Sakura(selector, options);

      // Cleanup on unmount
      return () => {
        sakura.stop();
      };
    }
  }, [selector, options]);

  return (
    <div
      ref={containerRef}
      id={selector.replace('#', '')}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1, // Adjust as needed
      }}
    />
  );
}

