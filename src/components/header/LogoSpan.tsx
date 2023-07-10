import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

type LogoSpanProps = {
  speed: number;
  children: ReactNode;
};

const LogoSpan = ({ speed, children }: LogoSpanProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200 * speed], [100, 0]);
  return (
    <motion.span
      style={{ y }}
      className="inline-block"
      transition={{ duration: 0.5, ease: 'anticipate' }}
    >
      {children}
    </motion.span>
  );
};

export default LogoSpan;
