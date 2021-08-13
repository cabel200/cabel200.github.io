import React, { Component } from 'react';
import ProjectCard from "./ProjectCard.js";
import "./css/styles.css";
import "./css/w3schools.css";



export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
      <h3 class="main montserrat large"> PROJECTS </h3>
      <div class="main">
        <ProjectCard photoUrl='lovage.jpeg' title='Lovage Labs' paragraph='Work includes developing billing script to automate both metered and unmetered billing of customers. Creating internal customer onboarding page connected to database expediting the customer onboarding process. Researching and integrating HashiCorp Products, AWS, and other DevOps technologies. Writing HashiCorp Vault backup script using AWS Lambda and S3 buckets. '/> 
        <ProjectCard photoUrl='dfg.png' title='Environmental Defense Fund' paragraph='Helped create website for community members to report environmental hazards.'/>  
        <ProjectCard photoUrl='harvard.jpeg' title='Artificial Intelligence for Social Good Lab' paragraph='Learning legal wildlife trade transportation cost to identify illegal wildlife trade using gradient descent.'/>  
        <ProjectCard photoUrl='coved.jpg' title='CovEducation' paragraph='Worked part-time on a volunteer web development team to build a new website using React.js for CovEducation, a non-profit continuing K-12 education in the US during the COVID-19 outbreak.'/>
        <ProjectCard photoUrl='cute_robot.ico'title='BotBegone' paragraph='Worked with two other students to create a website that gamifies Twitter bothunting. Users can submit links to Twitter accounts and a neural network will determine whether the account is a human or botnet based on a variety of factors including follower count and followee count. Links can also be reported to researchers who work to take down botnets. Users compete to identify the most botnets and earn badges.'/>
        <ProjectCard photoUrl='gsa.png' title='World War II Oral Histories' paragraph='Created website to preserve World War II Oral Histories collected for Girl Scout Gold Award Project.'/>
        <ProjectCard photoUrl='gwc.png' title='Immigration Nation' paragraph='Worked with 3 other people to create a website that facilitates access to resources including English classes, restaurants, and cultural centers for immigrants in the Greater New York City Area.'/>
        <ProjectCard photoUrl='ieee.jpg' title='“Adaptive Feedback Protocol for Underwater Vehicles via Software-Defined Acoustic Modems”' paragraph='Worked with 4 other students to research underwater transmission of information adjusting for factors including path attenuation, colored noise, Doppler shifting, multipath propagation, and bandwidth limitations.'/>
      </div>
      </div>

    )
  }
}

// photoUrl='coved.jpg'
// photoUrl='./coved.jpg'
