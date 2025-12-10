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
        <ProjectCard photoUrl='harvard.jpeg' title='Systems Design Independent Study' paragraph='Refactored and streamlined input verification system using Python for the AI for Social Good Lab PAWS Project, which supports a ML pipeline to identify high risk poaching areas and optimal park ranger patrol routes.'/> 
        <ProjectCard photoUrl='hands.jpeg' title='US Homelessness Visualizations' paragraph='Built website with two students to visualize homelessness crisis using D3.js, HTML, and CSS. See GitHub linked below.'/> 
        <ProjectCard photoUrl='simon.jpeg' title='SIMON Markets Internship' paragraph='Created API to support saving annuity allocations in investor tools using Scala, Akka, ZIO, and more. Collaborated with Backend, Frontend, and QA engineering teams. Configured VS Code IDE to support Scala development and wrote documentation for SIMON engineers.'/> 
        <ProjectCard photoUrl='plates..png' title='DHall TTC' paragraph='Worked with two students to design and implement a modified Top-Trading Cycle (TTC) mechanism that allows Harvard students to rank their dining hall preferences and swap their meal swipe for a meal in another dining hall. This mechanism can maintain strategy-proofness and Pareto-optimal matchings across
preference ordering. See GitHub linked below.'/> 
        <ProjectCard photoUrl='lovage.jpeg' title='Lovage Labs' paragraph='Work included developing billing script to automate both metered and unmetered billing of customers. Created internal customer onboarding page connected to database expediting the customer onboarding process. Researched and integrated HashiCorp Products, AWS, and other DevOps technologies. Wrote HashiCorp Vault backup script using AWS Lambda and S3 buckets. Created script to support phone provisioning for customers. Helped with website development and blog.'/> 
        <ProjectCard photoUrl='dfg.png' title='Environmental Defense Fund' paragraph='Helped create website for community members to report environmental hazards.'/>  
        <ProjectCard photoUrl='harvard.jpeg' title='Artificial Intelligence for Social Good Lab' paragraph='Worked on learning legal wildlife trade transportation cost to identify illegal wildlife trade using gradient descent.'/>  
        <ProjectCard photoUrl='coved.jpg' title='CovEducation' paragraph='Worked part-time on a volunteer web development team to build a new website using React.js for CovEducation, a non-profit continuing K-12 education in the US during the COVID-19 outbreak.'/>
        <ProjectCard photoUrl='cute_robot.ico'title='BotBegone' paragraph='Worked with two other students to create a website that gamifies Twitter bothunting. Users can submit links to Twitter accounts and a neural network will determine whether the account is a human or botnet based on a variety of factors including follower count and followee count. Links can also be reported to researchers who work to take down botnets. Users compete to identify the most botnets and earn badges. See GitHub linked below.'/>
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
