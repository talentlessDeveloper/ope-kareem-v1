import { motion } from 'framer-motion';
import CV from '../../assets/NewCv2.pdf';

const HeaderMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.ul
      className="fixed inset-0 bg-slate-300 -z-[1] pt-44 text-center space-y-4 text-2xl font-bold font-serif"
      initial={{ y: '-100%' }}
      animate={!open ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <li onClick={() => setOpen(false)}>
        <a
          href="#about"
          className="hover:text-orange-500 transition-colors duration-500"
        >
          About
        </a>
      </li>
      <li onClick={() => setOpen(false)}>
        <a
          href="#projects"
          className="hover:text-orange-500 transition-colors duration-500"
        >
          Projects
        </a>
      </li>
      <li onClick={() => setOpen(false)}>
        <a
          href="#contact"
          className="hover:text-orange-500 transition-colors duration-500"
        >
          Contact
        </a>
      </li>
      <li onClick={() => setOpen(false)}>
        <a
          href={CV}
          download
          className="hover:text-orange-500 transition-colors duration-500"
        >
          Resume
        </a>
      </li>
    </motion.ul>
  );
};

export default HeaderMenu;
