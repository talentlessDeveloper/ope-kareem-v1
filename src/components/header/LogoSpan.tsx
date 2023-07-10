/* eslint-disable react/prop-types */
import { useScroll, useTransform, motion } from "framer-motion";

const LogoSpan = ({ speed, children }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200 * speed], [100, 0]);
  return (
    <motion.span
      style={{ y }}
      className='inline-block'
      transition={{ duration: 0.5, ease: "anticipate" }}
    >
      {children}
    </motion.span>
  );
};

export default LogoSpan;
