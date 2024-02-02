import React from 'react'
import Dashboardheader from './header/dashboardheader';
import Blogs from './Body/blogs';
import Home from './Body/home';
import Projects from './Body/projects';

function Basecomponent() {
  return (
    <div>
      <Dashboardheader />
      <Home />
      <Projects />
      <Blogs />
      
    </div>
  );
}

export default Basecomponent;
