import { motion } from 'framer-motion';
import { textVariant } from '../utils/animation-variants';

const stacks = [
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind',
  'CSS',
  'SCSS',
  'Framer-Motion',
];

const Hero = () => {
  return (
    <section>
      <div className="dev-container  pt-40 pb-10">
        <h1 className="text-slate-100 tracking-tighter text-[clamp(32px,15vw,6rem)] leading-[90px] overflow-y-hidden">
          <motion.span variants={textVariant} className="inline-block">
            <span className="text-emerald-500">O</span>pe{' '}
            <span className="text-red-500">K</span>areem
          </motion.span>
        </h1>
        <h2 className="text-slate-100 tracking-tighter text-[clamp(1.85rem,15vw,6rem)] pl-5 lg:pl-10 leading-[clamp(3rem,10vw,5.5rem)] overflow-y-hidden">
          <motion.span variants={textVariant} className="inline-block">
            Fr<span className="text-emerald-500">o</span>ntend
          </motion.span>{' '}
          <motion.span variants={textVariant} className="inline-block pl-5">
            Devel<span className="text-orange-500">o</span>per
          </motion.span>
        </h2>

        <div className="flex justify-end mt-20">
          <ul className="grid grid-cols-2 gap-y-1">
            {stacks.map((stack) => {
              return (
                <li key={stack} className="overflow-y-hidden text-slate-100 ">
                  <motion.span className="inline-block" variants={textVariant}>
                    {stack}
                  </motion.span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
