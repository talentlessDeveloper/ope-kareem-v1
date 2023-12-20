import { AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import MovieIntroCountdown from './components/MovieIntro';
import { Route, Routes, useLocation } from 'react-router-dom';
import TransitionsHome from './pages/Home';
import TransitionsProject from './pages/Project';

function App() {
  // const [showCountdown, setShowCountdown] = useState(true);
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<TransitionsHome />} />
          <Route path="project/:path" element={<TransitionsProject />} />
          {/* <Route path="resume" element={<PdfViewer />} /> */}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
