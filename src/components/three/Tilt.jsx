import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Tilt — gives a child element a 3D pointer-tracking tilt on hover.
 * The element leans toward the cursor with perspective, plus a soft glow.
 */
export default function Tilt({ children, className = '', max = 12, scale = 1.04 }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('perspective(900px) rotateX(0deg) rotateY(0deg)');

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`);
  };

  const reset = () => setTransform('perspective(900px) rotateX(0deg) rotateY(0deg)');

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale }}
      style={{ transform, transformStyle: 'preserve-3d' }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}