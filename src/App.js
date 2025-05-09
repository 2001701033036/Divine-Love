import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import About from './pages/About';
import  Contact from './pages/Contact';
import Header from './pages/Header';

import { FocusCardsDemo } from './pages/PhotoGallery';

import { SpotlightPreview } from './pages/Spotlight';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="App">
    <Header/>
    <SpotlightPreview/>
    
    <About/>
   
<FocusCardsDemo/>
    <Contact/>
   
    </div>
  );
}

export default App;
