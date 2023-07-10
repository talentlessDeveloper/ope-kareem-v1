import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
// import { useInView } from 'react-intersection-observer';

// type UseAnimateProps = {
//   once: boolean;
//   threshold: number
// };

export const useAnimateScreen = (options = { once: true, amount: 0.5 }) => {
  // const divRef = useRef();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, options);

  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start('visible');
      console.log(inView);
    } else {
      control.start('hidden');
    }
  }, [inView, control]);

  return { ref, control };
};
