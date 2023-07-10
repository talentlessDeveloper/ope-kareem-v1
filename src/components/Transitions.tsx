import React from 'react';
import { motion } from 'framer-motion';

const Transitions = (OgComponent: React.FC) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="flex justify-center items-center  fixed inset-0 bg-slate-300 origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="text-black text-4xl "
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Ope Kareem
        </motion.p>
      </motion.div>
      <motion.div
        className=" fixed inset-0  bg-slate-300 origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* 
      <motion.div
        className=" flex justify-center items-center fixed left-0 w-[50vw] top-0 h-screen bg-white origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="text-red-500 text-4xl "
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          Kareem Opeyemi
        </motion.p>
      </motion.div> */}

      {/* <motion.div
        className=" fixed right-0 w-[50vw] top-0 h-screen bg-black origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      /> */}
    </>
  );
};

export default Transitions;
