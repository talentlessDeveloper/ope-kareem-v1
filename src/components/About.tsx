import { motion } from 'framer-motion';
import {
  clipPathVariant,
  homeVariant,
  textVariant,
  imgVariant,
} from '../utils/animation-variants';
import { useAnimateScreen } from '../hooks/useAnimate';

import Me from '../assets/img-repo-2-1.webp';

const About = () => {
  const { ref, control } = useAnimateScreen({ once: true, amount: 0.75 });
  return (
    <section className="relative" id="about">
      <motion.div
        variants={homeVariant}
        initial="hidden"
        animate={control}
        ref={ref}
        className="dev-container mt-40 pb-20 space-y-5 text-slate-100"
      >
        <motion.div
          variants={clipPathVariant}
          className="origin-left absolute z-10  inset-0 bg-slate-300 flex justify-center items-center"
        >
          <p className="text-black text-2xl lg:text-4xl">About Me</p>
        </motion.div>
        <div className="md:flex md:justify-center  md:gap-x-10">
          <div className="mb-6 md:mb-0   md:justify-end">
            <div className="overflow-y-hidden">
              <motion.img
                src={Me}
                alt="Ope Kareem At the Train Station"
                className="w-60 aspect-square rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                variants={imgVariant}
              />
            </div>
          </div>
          <div className="">
            <p className="overflow-hidden max-w-[480px]">
              <motion.span
                variants={textVariant}
                className="inline-block first-letter:text-slate-50 first-letter:text-4xl"
                transition={{ delay: 1 }}
              >
                Was formerly managing food production processes, now I channel
                that meticulousness into creating accessible and user friendly
                websites.
              </motion.span>
            </p>

            <p className="overflow-y-hidden max-w-[480px] mt-3">
              <motion.span
                variants={textVariant}
                className="inline-block first-letter:text-slate-50 first-letter:text-4xl"
                transition={{ delay: 1 }}
              >
                {' '}
                Beyond frontend development, my heart also beats for football,
                particularly for Chelsea Football Club. I find great joy in
                supporting my favorite team and witnessing their victories on
                the pitch. Additionally, I have a deep fascination with the
                enchanting realm of Korean culture. When I'm not coding, I
                immerse myself in the vibrant world of Korean music, dramas, and
                cuisine. These all help me create unique and meaningful
                experiences that resonate with users on a deeper level.
              </motion.span>
            </p>
            <p className="overflow-hidden max-w-[480px] mt-3">
              <motion.span
                variants={textVariant}
                className="inline-block first-letter:text-slate-50 first-letter:text-4xl"
                transition={{ delay: 1 }}
              >
                Here is me introducing myself in Korean. 제 이름은 카림이고 저는
                프론트엔드 개발자입니다. (My name is Kareem, and I am a frontend
                developer.) That&apos;s as far as I can go 😅😄.
              </motion.span>
            </p>
            <p className="overflow-hidden max-w-[480px]">
              <motion.span
                variants={textVariant}
                className="inline-block first-letter:text-2xl first-letter:text-slate-50 mt-5"
              >
                Community is also important to me, it&apos;s what has helped my
                growth, and in my little way of giving back, I mentor students{' '}
                <motion.a
                  href="https://www.altschoolafrica.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-orange-500 hover:text-orange-200 transition-colors duration-300"
                  variants={textVariant}
                >
                  <span>@</span> AltSchool Africa
                </motion.a>{' '}
                and also the Frontend Community Manager
                <motion.a
                  href="https://nexascale.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center  text-orange-500 hover:text-orange-200 transition-colors duration-300"
                  variants={textVariant}
                >
                  <span>@</span> NexaScale
                </motion.a>
              </motion.span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
