import React, { Component } from 'react';
import "./css/styles.css";
import "./css/w3schools.css";
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default class Intro extends Component {
  render() {
    return (
      <div>
        <img src="blue_back.jpg" alt="background blue" class="introbackdrop" width="1430px" height="975px"/>
        <div class="centered">
          <h2 class="playfair close">Hi I'm Caroline!</h2>
          <p class="montserrat close medium"> I'm a junior at Harvard College studying Computer Science. </p>
          <a href='/CarolineAbelTechCvAugust21.docx' download><Button variant="contained" class="montserrat"><ArrowDownwardIcon fontSize="small"/>DOWNLOAD CV</Button></a>
        </div>
      </div>
    )
  }
}
