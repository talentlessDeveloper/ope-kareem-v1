import { forwardRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Transitions from '../components/Transitions';
import { projectData } from '../utils/projects';
import { motion } from 'framer-motion';
import {
  homeVariant,
  imgVariant,
  textVariant,
} from '../utils/animation-variants';

type ProjectState = {
  title: string;
  techLists: string[];
  text: string;
  intro: string;
  img: string;
  link: string;
  live: string;
  reverse: boolean;
  id: number;
  path: string;
  features: string[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Project = forwardRef((_props, _ref) => {
  const navigate = useNavigate();
  const { path } = useParams();
  // const [loading, setLoading] = useState()

  const [project, setProject] = useState<ProjectState>();
  useEffect(() => {
    const foundProject = projectData.find((p) => p.path === path);
    setProject(foundProject);
  }, [path]);
  return (
    <section className="text-slate-100">
      <motion.div
        className="dev-container py-20 lg:py-36"
        initial="hidden"
        animate="visible"
        variants={homeVariant}
      >
        <button onClick={() => navigate(-1)}>
          <svg
            fill="#fff"
            height="50px"
            width="50px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 26.676 26.676"
            xmlSpace="preserve"
            stroke="#fff"
            className="hover:fill-orange-500 transition-all duration-500 hover:stroke-orange-500"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g>
                {' '}
                <path d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59 c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815 C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029 c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562 C26.18,21.891,26.141,21.891,26.105,21.891z"></path>{' '}
              </g>{' '}
            </g>
          </svg>
        </button>

        <div className=" lg:flex lg:gap-x-1">
          <div className="my-5 lg:w-1/2 lg:flex lg:justify-center lg:items-center lg:mb-0">
            <h1 className="text-3xl lg:text-[6rem] lg:leading-[5.5rem] overflow-hidden">
              <motion.span variants={textVariant} className="inline-block">
                {project?.title}
              </motion.span>
            </h1>
          </div>
          <div className="space-y-3 lg:w-1/2 lg:space-y-8">
            <p className="text-xl overflow-hidden">
              <motion.span variants={textVariant} className="inline-block">
                {project?.intro}
              </motion.span>
            </p>
            <p className="text-xl overflow-hidden">
              <motion.span variants={textVariant} className="inline-block">
                {project?.text}
              </motion.span>
            </p>
          </div>
        </div>
        <div className="lg:flex lg:gap-x-8  mt-12 lg:mt-28">
          <div className="lg:w-1/2 overflow-hidden">
            <motion.img
              variants={imgVariant}
              src={project?.img}
              alt={project?.title}
            />
            <div className="flex gap-x-2 justify-end mt-5">
              <a
                href={project?.link}
                rel="noreferrer"
                target="_blank"
                aria-label="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 stroke-zinc-300  hover:stroke-zinc-50 transition-all"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href={project?.live}
                rel="noreferrer"
                target="_blank"
                aria-label="External"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 stroke-slate-300 hover:stroke-slate-50 transition-all"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2   pt-10">
            <p className="text-xl lg:text-3xl font-bold">Technologies used</p>
            <ul className=" grid gap-1 grid-cols-[repeat(auto-fit,minmax(5rem,_1fr))]  mt-3">
              {project?.techLists.map((tech) => {
                return (
                  <li
                    key={`${project.title}-${tech}`}
                    className="overflow-hidden"
                  >
                    <motion.span
                      className="inline-block"
                      variants={textVariant}
                    >
                      {tech}
                    </motion.span>
                  </li>
                );
              })}
            </ul>
            <p className="text-xl lg:text-3xl font-bold mt-10">Features</p>
            <ul className="mt-3 pl-5 lg:pl-10 list-inside">
              {project?.features.map((feature, i) => {
                return (
                  <li
                    key={`${project.title}-${i}-featurs`}
                    className="list-disc overflow-hidden text-lg"
                  >
                    <motion.span
                      className="inline-block"
                      variants={textVariant}
                    >
                      {feature}
                    </motion.span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

const TransitionsProject = Transitions(Project);

export default TransitionsProject;
