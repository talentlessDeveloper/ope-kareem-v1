import { motion } from 'framer-motion';

import { homeVariant } from '../utils/animation-variants';
import Hero from '../components/Hero';
import About from '../components/About';
import Project from '../components/Project';
import Transitions from '../components/Transitions';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <motion.div variants={homeVariant} initial="hidden" animate="visible">
      <Header />
      <Hero />
      <About />
      <Project />
      <Footer />
    </motion.div>
  );
};

const TransitionsHome = Transitions(Home);
export default TransitionsHome;
