import React, { Component } from 'react';
import "./css/styles.css";
import "./css/w3schools.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
      <div class="sidenav playfair">
        <img src="senior_portrait_square2.jpg" alt="portrait" class="img" width="200" height="200"/>
        <h2 class="closest">Caroline Abel</h2>
        <a href="mailto:carolineabel20@gmail.com" class="small montserrat tinks">carolineabel20@gmail.com </a>
        <br/>
        <br/>
        <a href="#aboutme" class="sidenavtitles">ABOUT ME</a>
        <a href="#education" class="sidenavtitles">EDUCATION</a>
        <a href="#experience" class="sidenavtitles">EXPERIENCE</a>
        <a href="#projects" class="sidenavtitles">PROJECTS</a>
        <a href="#contactme" class="sidenavtitles">CONTACT ME</a>
      </div>
      </div>
    )
  }
}
