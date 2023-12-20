import { motion } from 'framer-motion';
import { useAnimateScreen } from '../hooks/useAnimate';
import { homeVariant } from '../utils/animation-variants';

const Experience = () => {
  const { ref, control } = useAnimateScreen({ once: true, amount: 0.25 });
  return (
    <section className="relative" id="experience">
      <motion.div
        variants={homeVariant}
        initial="hidden"
        animate={control}
        ref={ref}
        className="dev-container  mt-40 pb-20 space-y-5 text-slate-100"
      >
        <div className="flex flex-col  md:justify-center md:items-start md:flex-row gap-3 md:gap-10">
          <div className="md:w-60">
            <p className="md:text-right text-sm font-semibold text-orange-50 leading-8">
              August 2023 - present
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <h2 className="text-2xl text-orange-500 font-semibold">
              <span>Intern</span>. <span>Sterling Bank</span>
            </h2>
            <p className="max-w-[480px]">
              As an intern at{' '}
              <span className="text-orange-500 font-semibold text-2xl">
                Sterling
              </span>
              , I played a pivotal role in enhancing user onboarding
              experiences. I contributed to the implementation of TIN
              regularization, ensuring seamless onboarding for business owners
              onto the platform. Additionally, I worked on bolstering security
              measures using axios interceptors, I facilitated token refresh
              processes, reinforcing the safety of user interactions within the
              system.
            </p>
            <ul className="flex flex-wrap gap-2 items-center">
              <li>React</li> <li>CSS</li> <li>Html</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col  md:justify-center md:items-start md:flex-row gap-3 md:gap-10">
          <div className="md:w-60">
            <p className="md:text-right text-sm font-semibold text-orange-50 leading-8">
              September 2023 - November 2023
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <h2 className="text-2xl text-orange-500 font-semibold">
              <span>Frontend Developer</span>. <span>Co.Lab</span>
            </h2>
            <p className="max-w-[480px]">
              As a frontend developer for{' '}
              <span className="text-orange-500 font-semibold text-2xl">
                Heal Haven
              </span>{' '}
              a mental health app connecting patients with therapists based on
              cultural beliefs, I optimized user journeys using React and React
              Router with loaders for efficient data fetching. Collaborating
              with a cross-functional team, including a designer, product
              manager, and backend developer, I ensured seamless integration and
              prioritized type safety and validation using Zod for a secure and
              user-friendly experience.
            </p>
            <ul className="flex flex-wrap gap-2 items-center">
              <li>React</li> <li>Tailwindcss</li> <li>Zod</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
