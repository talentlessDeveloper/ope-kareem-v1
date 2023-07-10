import { motion, useScroll, useTransform } from "framer-motion";
import LogoSpan from "./LogoSpan";

type HeaderLogoProps = {
  rangeA: number[];
  rangeB: number[];
};

const HeaderLogo = ({ rangeA, rangeB }: HeaderLogoProps) => {
  const { scrollY } = useScroll();
  const x1 = useTransform(scrollY, [0, 60], [...rangeA]);
  const x2 = useTransform(scrollY, [0, 60], [...rangeB]);
  return (
    <span className='inline-flex justify-center overflow-y-hidden font-bold font-playfair text-2xl'>
      <motion.span
        className='inline-block text-slate-900 '
        style={{ x: x1 }}
        transition={{ duration: 0.5, ease: "anticipate" }}
      >
        O
      </motion.span>{" "}
      <LogoSpan speed={0.2}>P</LogoSpan> <LogoSpan speed={0.4}>E</LogoSpan>{" "}
      <motion.span
        className='inline-block ml-3 text-red-500'
        style={{ x: x2 }}
        transition={{ duration: 0.5, ease: "anticipate" }}
      >
        K
      </motion.span>{" "}
      <LogoSpan speed={0.6}>A</LogoSpan> <LogoSpan speed={0.8}>R</LogoSpan>{" "}
      <LogoSpan speed={1}>E</LogoSpan> <LogoSpan speed={1.2}>E</LogoSpan>{" "}
      <LogoSpan speed={1.4}>M</LogoSpan>
    </span>
  );
};

export default HeaderLogo;
