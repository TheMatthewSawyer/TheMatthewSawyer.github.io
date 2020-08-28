import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import NavbarMain from './NavbarMain';
import Button from 'react-bootstrap/Button';

function SwitchRouter() {

  var userLocation = 'home';
  if (window.location.pathname !== '/') {
    userLocation = window.location.pathname.substring(1);
    console.log(userLocation)
  }

  const [page, setPage] = useState(`${userLocation}`);

  const clickHandler = (e) => {
    setPage(e.target.name);
  }

  switch (page) {

    case "home":
      return (
        <div>
          <NavbarMain setPage={setPage} />
          <Home />
        </div>
      );

    case "about":
      return (
        <div>
          <NavbarMain setPage={setPage} />
          <About />
        </div>
      );

    case "":
      return (
        <div>
          <NavbarMain setPage={setPage} />
          <Home />
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