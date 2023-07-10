import { motion } from 'framer-motion';

const HeaderMenu = ({ open }: { open: boolean }) => {
  return (
    <motion.ul
      className="fixed inset-0 bg-slate-300 -z-[1] pt-44 text-center space-y-4 text-2xl font-bold font-serif"
      initial={{ y: '-100%' }}
      animate={!open ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <li>
        <a
          href=""
          className="hover:text-slate-200 transition-colors duration-500"
        >
          About
        </a>
      </li>
      <li>
        <a
          href=""
          className="hover:text-slate-200 transition-colors duration-500"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href=""
          className="hover:text-slate-200 transition-colors duration-500"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href=""
          className="hover:text-slate-200 transition-colors duration-500"
        >
          Resume
        </a>
      </li>
    </motion.ul>
  );
};

export default HeaderMenu;
