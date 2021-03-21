import React, { Component } from 'react';
import "./css/styles.css";
import "./css/w3schools.css";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


export default class Experience extends Component {
  render() {
    return (
      <div id="experience">
      <h3 class="main montserrat large"> EXPERIENCE </h3>
      <div class="container">
      <Timeline align="left">
        <TimelineItem>
          <TimelineOppositeContent>
            <p class="montserrat">September-December 2020</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
              <h3 class="close playfair">CS50 (INTRODUCTION TO CS) TEACHING FELLOW </h3>
              <p class="close montserrat">Led weekly section of ~25 students, graded assignments, ran office hours, and advised final projects. Languages: C, Python, SQL, JavaScript, and HTML/CSS.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p class="montserrat">May-August 2020</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
            </TimelineDot>
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent>
              <h3 class="close playfair">HBS CREDENTIAL OF READINESSS (CORe) ONLINE</h3>
              <h4 class="close playfair">Certificate In Progress</h4>
              <p class="close montserrat">Three business courses—Business Analytics, Economics for Managers, and Financial Accounting.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p class="montserrat">June-August 2020</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
            </TimelineDot>
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent>
            <h3 class="close playfair">COVEDUCATION</h3>
            <h4 class="close playfair">Volunteer Web Developer</h4>
            <p class="close montserrat">Working 3-5 hours weekly building a new website using React.js for CovEducation, a non-profit continuing K-12 education in the US during the COVID-19 outbreak.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p class="montserrat">May-August 2019</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
            </TimelineDot>
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent>
            <h3 class="close playfair">R. SEELAUS & CO, INC.</h3>
            <h4 class="close playfair">Paid Summer Intern</h4>
            <h4 class="close playfair">Summit, NJ</h4>
            <p class="close montserrat">Worked in Asset Management and Broker Dealer Arms. Earned Bloomberg Market Concepts Certificate.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p class="montserrat">July 2018</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
            </TimelineDot>
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent>
            <h3 class="close playfair">NJ GOVERNOR’S SCHOOL OF ENGINEERING AND TECHNOLOGY</h3>
            <h4 class="close playfair">Scholar</h4>
            <h4 class="close playfair">Rutgers University, NJ</h4>
            <p class="close montserrat">Collaboration with Mandela Washington Fellow in drone medicine delivery to Africa. Paper “Adaptive Feedback Protocol for Underwater Vehicles via Software-Defined Acoustic Modems” Presented at 2018 IEEE MIT Undergraduate Research Technology Conference, Awarded ‘Best Paper’</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p class="montserrat">January-March 2018</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
            </TimelineDot>
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent>
            <h3 class="close playfair">MORRIS COUNTY ARTS WORKSHOP</h3>
            <h4 class="close playfair">Instructor in Introduction to Computer Science</h4>
            <h4 class="close playfair">Mendham Township, NJ</h4>
            <p class="close montserrat">Taught middle school students programming in Scratch and web design.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p class="montserrat">July-August 2017</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <h3 class="close playfair">GIRLS WHO CODE SUMMER IMMERSION PROGRAM</h3>
            <h4 class="close playfair">AppNexus</h4>
            <h4 class="close playfair">New York, NY</h4>
            <p class="close montserrat">Final Project: Immigration Nation. Website facilitated access to resources for immigrants in the Greater New York City Area</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </div>
  </div>
    )
  }
}
