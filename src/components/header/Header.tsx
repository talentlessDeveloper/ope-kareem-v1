import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  headerTextSlideUp,
  headerVariant,
} from '../../utils/animation-variants';
// import PdfViewer from '../PdfViewer';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import MenuButton from './MenuButton';

import pdf from '../../assets/NewCv2.pdf';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // const [viewResume, setViewResume] = useState(false);

  // const handleResume = () => {
  //   setViewResume(true);
  //   console.log(viewResume);
  // };

  // const closeResume = () => {
  //   setViewResume(false);
  // };
  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariant}
        className="fixed top-5 left-0 right-0 overflow-hidden z-10 "
      >
        <nav className="bg-slate-200 text-black w-11/12 mx-auto max-w-2xl rounded-full h-[50px] flex items-center ">
          <ul className="hidden md:flex justify-between items-center   px-4 text-base font-serif w-full">
            <div className="flex gap-x-3 overflow-y-hidden">
              <motion.li variants={headerTextSlideUp}>
                <a href="#about" className="font-dm">
                  About
                </a>
              </motion.li>
              <motion.li variants={headerTextSlideUp}>
                <a href="#experience" className="font-dm">
                  Experience
                </a>
              </motion.li>
              <motion.li variants={headerTextSlideUp}>
                <a href="#projects" className="font-dm">
                  Projects
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
            <div className="flex gap-x-3 items-center overflow-y-hidden">
              <motion.li variants={headerTextSlideUp}>
                <a href="#contact">Contact</a>
              </motion.li>
              <motion.li variants={headerTextSlideUp}>
                {/* <button
                  onClick={handleResume}
                  className="bg-emerald-500 text-slate-100 hover:bg-emerald-800 transition-all duration-300  px-3 py-1 rounded"
                >
                  Resume
                </button> */}
                {/* <Link to="/resume">Resume</Link> */}
                <a
                  href={pdf}
                  download
                  target="_blank"
                  className="w-fit  text-black font-semibold transition-colors duration-300 hover:text-orange-500"
                >
                  Resume
                </a>
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
        <HeaderMenu open={openMenu} setOpen={setOpenMenu} />
      </motion.header>
      {/* {viewResume ? <PdfViewer closeResume={closeResume} /> : null} */}
      <Outlet />
    </>
  );
};

export default Header;
