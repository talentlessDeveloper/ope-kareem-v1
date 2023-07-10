import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Radar from "./Radar";

type MovieIntroCountdownProps = {
  setShowCountdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const MovieIntroCountdown = ({
  setShowCountdown,
}: MovieIntroCountdownProps) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count < 0) {
      clearInterval(countdown);
      setShowCountdown(false);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [count, setShowCountdown]);

  // const circleVariants = {
  //   hidden: { scale: 0 },
  //   visible: { scale: 1, transition: { duration: 0.5 } },
  //   exit: { scale: 0, transition: { duration: 0.5 } },
  // };

  return (
    <div className='  h-screen bg-black '>
      <div className='w-11/12 mx-auto  flex items-center justify-between h-full'>
        <div className='space-y-8 w-[15%] flex flex-col items-center lg:space-y-14'>
          {Array.from({ length: 6 }, (_, i) => {
            return (
              <div
                key={`leftpocket${i}`}
                className='bg-white w-10 h-5  lg:w-12 lg:h-6 rounded-3xl'
              ></div>
            );
          })}
        </div>
        <AnimatePresence>
          <motion.div className='relative flex flex-col justify-center items-center text-black w-[65%] h-[294px] bg-[#f1f2f4b8] lg:h-[450px] before:h-full before:absolute before:content before:w-[2px] before:bg-black before:-translate-x-1/2 before:left-1/2  after:w-full after:absolute after:content after:h-[2px] after:bg-black after:top-1/2 after:-translate-y-1/2'>
            <div className='w-40 h-40 bg-transparent border border-white border-solid rounded-full flex justify-center items-center lg:w-96 lg:h-96'>
              <div className='w-11/12 aspect-square  mx-auto bg-transparent border border-white border-solid rounded-full'>
                <Radar />
              </div>
            </div>
            <motion.p
              className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-6xl lg:text-9xl origin-bottom'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {count}
            </motion.p>
          </motion.div>
        </AnimatePresence>
        <div className='space-y-8 w-[15%] flex flex-col items-center lg:space-y-14'>
          {Array.from({ length: 6 }, (_, i) => {
            return (
              <div
                key={`rightpocket${i}`}
                className='bg-white w-10 h-5  lg:w-12 lg:h-6 rounded-3xl'
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieIntroCountdown;
