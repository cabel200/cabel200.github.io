import React, { Component } from 'react';
import "./css/styles.css";
import "./css/w3schools.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default class ProjectCard extends Component {
  render() {
    return (
        <Card class="bordercolor" style={{display:'flex'}}>
          <div>
            <CardMedia style={{height: 170, width: 170, display: 'flex', flexDirection:'column'}} title="project photo" image= {this.props.photoUrl}/>
          </div>
          <div>
           <CardContent style={{display: 'flex', flexDirection:'column', flex: '1 0 auto',}}>
            <h4 class="montserrat">{this.props.title}</h4>
            <p class="montserrat">{this.props.paragraph}</p>
           </CardContent>
         </div>
       </Card>
    )
  }
}

// {this.props.photoUrl}
// <CardMedia
//   image="./senior_portrait_square2.jpg"
//   title="SOMETHING"/>
