import React from 'react';

class ProjectList extends React.Component {
  constructor(props){
    this.state = {};
    this.compatibleWith = this.compatibleWith.bind(this);
    this.oculusSVG = "https://joshportfoliowebsite.s3-us-west-1.amazonaws.com/oculus.svg";
    this.valveIndexSVG = "https:joshportfoliowebsite.s3-us-west-1.amazonaws.com/valveIndex2.svg";
    this.hololensSVG = "https://joshportfoliowebsite.s3-us-west-1.amazonaws.com/hololens.svg";

  }
  compatibleWith(/*takes boolean value*/){
      //if true, returns svg icon of vr/ar headset project is compatible with
     if(compatibleWithOculus){
       return(
         <div>
           <img src={this.oculusSVG}></img>
           <img src={this.valveIndexSVG}></img>
         </div>
       )
     } else{
       return(
         <img src={this.hololensSVG}></img>
       )
     }
  }

  render(){

    //returns map function that has input of projectsData
    //and outputs banners that list the project name, compatibleWithDevice info, and link
    return(
      <div>

      </div>
    )
  }
}

