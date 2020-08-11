import React, { Component } from 'react';
import "./css/styles.css";
import "./css/w3schools.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';


export default class ContactMe extends Component {
  render() {
    return (
      <div id="contactme">
      <h3 class="main montserrat large"> CONTACT ME </h3>
      <p><a href="mailto:carolineabel@college.harvard.edu" class="main medium montserrat tinks"><EmailIcon/>carolineabel@college.harvard.edu</a></p>
      <p><a href="https://www.linkedin.com/in/caroline-abel" class="main medium montserrat tinks" target="_blank"><LinkedInIcon/>LinkedIn</a></p>
      <p><a href="https://github.com/cabel200" class="main medium montserrat tinks" target="_blank"><GitHubIcon/>GitHub</a></p>
      </div>
    )
  }
}
