import { motion } from 'framer-motion';
import { projectData } from '../utils/projects';
import {
  clipPathVariant,
  homeVariant,
  textVariant,
} from '../utils/animation-variants';
import { useAnimateScreen } from '../hooks/useAnimate';
import { Link } from 'react-router-dom';

// const h3Variant = {

// }

const Project = () => {
  const { ref, control } = useAnimateScreen({ once: true, amount: 0.25 });
  return (
    <section id="projects" className="relative">
      <motion.div
        className="dev-container mt-40 pb-20 motion-reduce:transition-none motion-reduce:transform-none"
        variants={homeVariant}
        animate={control}
        ref={ref}
      >
        {/* <motion.div
          variants={clipPathVariant}
          className="origin-left absolute z-10  inset-0 bg-slate-300 flex justify-center  pt-64 lg:pt-80 motion-reduce:transition-none motion-reduce:transform-none"
        >
          <p className="text-black text-3xl lg:text-5xl -mt-20">Projects</p>
        </motion.div> */}
        {projectData.map((project) => {
          const { reverse, title, path } = project;
          return (
            <Link
              to={`project/${path}`}
              key={title}
              className={`text-slate-400 py-6 md:py-8 border-t border-b border-t-slate-300 border-b-slate-300 border-solid uppercase overflow-y-hidden flex ${
                reverse ? 'justify-end' : 'justify-start'
              }`}
            >
              <motion.h3
                variants={textVariant}
                className="text-[clamp(1.25rem,10vw,6rem)]  "
              >
                {[...title].map((t, i) => (
                  <motion.span
                    whileHover={{ y: -10 }}
                    key={`${title}-${i}`}
                    className="inline-block hover:text-slate-200 duration-300 motion-reduce:transition-none motion-reduce:transform-none"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.h3>
            </Link>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Project;
