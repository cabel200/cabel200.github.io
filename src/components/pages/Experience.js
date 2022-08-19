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
            <p class="montserrat">June 2022-August 2022</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
              <h3 class="close playfair">SIMON MARKETS (Acquired by iCapital August 2022)</h3>
              <h4 class="close playfair">Backend Engineer Intern</h4>
              <h4 class="close playfair">New York, NY</h4>
              <p class="close montserrat">Created API to support saving annuity allocations in investor tools using Scala, Akka, ZIO, and more. Collaborated with Backend, Frontend, and QA engineering teams. Configured VS Code IDE to support Scala development and wrote documentation for SIMON engineers.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p class="montserrat">May 2021-February 2022</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
              <h3 class="close playfair">LOVAGE LABS INC.</h3>
              <h4 class="close playfair">Full Stack Software Engineer</h4>
              <p class="close montserrat">First paid engineer at pre-seed AI startup collaborating with founders on software engineering and DevOps. Utilized FastAPI, AWS, HashiCorp products, Dialogflow, Stripe, MongoDB Atlas, and more.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p class="montserrat">April-June 2021</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
              <h3 class="close playfair">ENVIRONMENTAL DEFENSE FUND</h3>
              <h4 class="close playfair">Volunteer Web App Developer through Develop for Good</h4>
              <p class="close montserrat">Helped create website for community members to report environmental hazards.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p class="montserrat">February 2021-January 2022</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
              <h3 class="close playfair">ARTIFICIAL INTELLIGENCE FOR SOCIAL GOOD LAB</h3>
              <h4 class="close playfair">Research Assistant</h4>
              <h4 class="close playfair">Harvard University</h4>
              <p class="close montserrat">Learning legal wildlife trade transportation cost to identify illegal wildlife trade using gradient descent.</p>
          </TimelineContent>
        </TimelineItem>
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
              <h3 class="close playfair">CS50 (INTRODUCTION TO CS)</h3>
              <h4 class="close playfair">Teaching Fellow</h4>
              <h4 class="close playfair">Harvard CS Department</h4>
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
