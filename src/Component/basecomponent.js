import React from 'react'
import Dashboardheader from './header/dashboardheader';
import Blogs from './Body/blogs';
import Home from './Body/home';
import Projects from './Body/projects';
import Experience from './Body/Experience';
import Footer from './Footer/Footer';
import Downloadresume from './Body/downloadresume';

function Basecomponent() {
  return (
    <div>
      <Dashboardheader />
      <section id="home">
        <Home />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <Downloadresume />
      <Footer/>
    </div>
  );
}

export default Basecomponent;
