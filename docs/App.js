import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/pages/Sidebar';
import Intro from './components/pages/Intro';
import AboutMe from './components/pages/AboutMe';
import Education from './components/pages/Education';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';

class App extends Component {
  render() {
  return (
    <div>
      <Sidebar></Sidebar>
        <div>
          <Intro></Intro>
          <AboutMe></AboutMe>
          <br/>
          <Education></Education>
          <br/>
          <Experience></Experience>
          <br/>
          <Projects></Projects>
          <br/>
          <ContactMe></ContactMe>
        </div>
    </div>
    );
  }
}

export default App;
