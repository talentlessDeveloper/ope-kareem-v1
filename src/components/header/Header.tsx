import { motion } from 'framer-motion';
import {
  headerVariant,
  headerTextSlideUp,
} from '../../utils/animation-variants';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import MenuButton from './MenuButton';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariant}
        className="fixed top-5 left-0 right-0 overflow-hidden z-10 "
      >
        <nav className="bg-slate-200 text-black w-11/12 mx-auto max-w-lg  rounded-full h-[50px] flex items-center ">
          <ul className="hidden md:flex justify-between items-center   px-4 text-base font-serif w-full">
            <div className="flex gap-x-3 overflow-y-hidden">
              <motion.li variants={headerTextSlideUp}>
                <a href="#about" className="font-dm">
                  About
                </a>
              </motion.li>
              <motion.li variants={headerTextSlideUp}>
                <a href="#projects" className="font-dm">
                  Project
                </a>
              </motion.li>
            </div>
            <div className="overflow-y-hidden">
              <motion.li variants={headerTextSlideUp}>
                <Link to="/" className="">
                  <HeaderLogo rangeA={[65, 0]} rangeB={[22, 0]} />
                </Link>
              </motion.li>
            </div>
            <div className="flex gap-x-3 overflow-y-hidden">
              <motion.li variants={headerTextSlideUp}>
                <a href="#contact">Contact</a>
              </motion.li>
              <motion.li variants={headerTextSlideUp}>
                <button>Resume</button>
              </motion.li>
            </div>
          </ul>
          <div className="flex justify-between w-full px-6 md:hidden ">
            <Link to="/">
              <HeaderLogo rangeA={[0, 0]} rangeB={[-38, 0]} />
            </Link>

            <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </div>
        </nav>
        <HeaderMenu open={openMenu} />
      </motion.header>
      <Outlet />
    </>
  );
};

export default Header;
