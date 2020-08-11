import React, { Component } from 'react';
import "./css/styles.css";
import "./css/w3schools.css";
// Bootstrap Card

export default class Education extends Component {
  render() {
    return (
      <div id="education">
      <h3 class="main montserrat large"> EDUCATION </h3>
      <div class="card-deck main">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title montserrat">Harvard University</h3>
            <h4 class="card-text montserrat">Cambridge, MA</h4>
            <h4 class="card-text montserrat">A.B. in Computer Science</h4>
            <h4 class="card-text montserrat">Class of 2023</h4>
            <p class="card-text montserrat">Courses including CS50, AM22a, CS51, CS20</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3 class="card-title montserrat">Oak Knoll School</h3>
            <h4 class="card-text montserrat">Summit, NJ</h4>
            <h4 class="card-text montserrat">Class of 2019</h4>
            <p class="card-text montserrat">Cum Laude Society, High Honors, National AP Scholar,</p>
            <p class="card-text montserrat">Holy Child Spirit Award, Girl Scout Gold Award</p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
