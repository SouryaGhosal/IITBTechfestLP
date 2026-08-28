import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Reveal — continuous scroll-driven motion.
 * Content drifts in from the lower-left, settles in the center, then drifts out
 * to the upper-right as it leaves — appearing and disappearing with the scroll,
 * with a soft blur at the edges.
 */
export default function Reveal({ children, className = '', drift = 70 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [drift, 0, -drift]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-drift * 0.4, 0, drift * 0.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const filter = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['blur(8px)', 'blur(0px)', 'blur(0px)', 'blur(8px)']);

  return (
    <motion.div ref={ref} style={{ y, x, opacity, filter }} className={className}>
      {children}
    </motion.div>
  );
}