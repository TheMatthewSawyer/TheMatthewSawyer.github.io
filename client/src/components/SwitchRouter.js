import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NavbarMain from './NavbarMain';
import Button from 'react-bootstrap/Button';
import background from './images/background.webp';

function SwitchRouter() {

  var userLocation = `${window.location.hash.substring(1, window.location.hash.length)}`;

  if (!userLocation) {
    userLocation = 'home';
  }

  const [page, setPage] = useState(`${userLocation}`);
  const [hasSeen, setHasSeen] = useState(false);
  const [hasSeenProject, setHasSeenProject] = useState(false);
  const [birdsClicked, setBirdsClicked] = useState(0);

  const clickHandler = (e) => {
    setPage(e.target.name);
  }

  switch (page) {

    case "":
    case "home":
      if (window.location.hash !== '#home') {
        window.location.hash = '#home';
      }
      return (
        <div>
          <NavbarMain setPage={setPage} />
          <Home hasSeen={hasSeen} setHasSeen={setHasSeen} />
        </div>
      );

    case "about":
      if (window.location.hash !== '#about') {
        window.location.hash = '#about';
      }
      return (
        <div>
          <NavbarMain setPage={setPage} />
          <About background={background} birdsClicked={birdsClicked} setBirdsClicked={setBirdsClicked}/>
        </div>
      );

    case "projects":
      if (window.location.hash !== '#projects') {
        window.location.hash = '#projects';
      }
      return (
        <div>
          <NavbarMain setPage={setPage} />
          <Projects hasSeenProject={hasSeenProject} setHasSeenProject={setHasSeenProject}/>
        </div>
      );

    default:
      return (
        <div>
          404 - Page not found! Click <Button variant="outline-primary" name='home' onClick={clickHandler}>here</Button> to return home!
        </div>
      );

  }
}
export default SwitchRouter;