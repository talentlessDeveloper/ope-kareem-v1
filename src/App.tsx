import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MovieIntroCountdown from './components/MovieIntro';
import TransitionsHome from './pages/Home';
import TransitionsProject from './pages/Project';

function App() {
  const [showCountdown, setShowCountdown] = useState(true);
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            index
            path="/"
            element={
              showCountdown ? (
                <MovieIntroCountdown setShowCountdown={setShowCountdown} />
              ) : (
                <TransitionsHome />
              )
            }
          />
          <Route path="project/:path" element={<TransitionsProject />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;