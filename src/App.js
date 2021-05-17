import React, {useEffect, useState} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import home from './components/home/home.js';
import about from './components/about/about.js';
import projects from './components/projects/projects.js';
import NavBar from './components/navbar.js';
import ParticlesBg from 'particles-bg'

import './App.css';



function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
          setWidth(window.innerWidth);
      }
  useEffect(() => {
          window.addEventListener('resize', handleWindowSizeChange);
          return () => {
              window.removeEventListener('resize', handleWindowSizeChange);
          }
      }, []);
  
  let isMobile = (width <= 768);

  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={home} />
      <Route path="/projects" component={projects} />
      <Route path="/about" component={about} />
      <ParticlesBg type="cobweb" num={isMobile? 35 : 75} color="ffffff" bg={true} />
    </BrowserRouter>
  );
}

export default App;
