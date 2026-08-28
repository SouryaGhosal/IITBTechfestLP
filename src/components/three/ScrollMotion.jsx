import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ScrollMotion — directional, scroll-driven entrance (and optional exit).
 * `from` controls the axis an element travels: left/right/up/down/scale.
 * Elements glide in as they enter the viewport, settle at rest, and (with
 * `fadeOut`) drift back out as they leave. `delay` staggers cascades.
 */
export default function ScrollMotion({
  children,
  className = '',
  from = 'up',
  distance = 110,
  fadeOut = false,
  blur = false,
  delay = 0,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const s = 0.12 + delay;
  const e = 0.38 + delay;

  const xFrom = from === 'left' ? -distance : from === 'right' ? distance : 0;
  const yFrom = from === 'up' ? distance : from === 'down' ? -distance : 0;

  const x = useTransform(scrollYProgress, [s, e], [xFrom, 0]);
  const y = useTransform(scrollYProgress, [s, e], [yFrom, 0]);
  const scale = useTransform(scrollYProgress, [s, e], [from === 'scale' ? 0.82 : 1, 1]);

  const opacityIn = useTransform(scrollYProgress, [s, e], [0, 1]);
  const opacityInOut = useTransform(scrollYProgress, [s, e, 0.78, 1], [0, 1, 1, 0]);
  const opacity = fadeOut ? opacityInOut : opacityIn;

  const blurV = useTransform(scrollYProgress, [s, e], [blur ? 12 : 0, 0]);
  const filter = useTransform(blurV, (b) => `blur(${b}px)`);

  return (
    <motion.div ref={ref} style={{ x, y, scale, opacity, filter }} className={className}>
      {children}
    </motion.div>
  );
}