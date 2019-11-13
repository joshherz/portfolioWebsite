import React from 'react';

class ProjectList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfProjectBanners: 2,
    };
    this.compatibleWith = this.compatibleWith.bind(this);
    this.oculusSVG = "https://joshportfoliowebsite.s3-us-west-1.amazonaws.com/oculus.svg";
    this.valveIndexSVG = "https://joshportfoliowebsite.s3-us-west-1.amazonaws.com/valveIndex2.svg";
    this.hololensSVG = "https://joshportfoliowebsite.s3-us-west-1.amazonaws.com/hololens.svg";

  }
  compatibleWith(booleanValue){
      //if true, returns svg icon of vr/ar headset project is compatible with
     if(booleanValue){
       return(
         <div>
           <img src={this.oculusSVG}></img> <br/>
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
      <div id={this.props.projectsData[0].projectStylingClassName}>
        <ul>
          {this.props.projectsData.map((singleProject, index) => {
            return(
              <li key={index}>
                <h1>{singleProject.title}</h1>
                <p><a href={singleProject.url}>Visit {singleProject.title}.com</a></p>
                <p>{singleProject.desc}</p>
                <div>
                  <h2>Best Experienced With: {this.compatibleWith(singleProject.compatibleWithOculus) /*if true, should display oculus SVG*/} </h2>
                </div>
              </li>
              
            )
          })}
        </ul>
      </div>
    )
  }
}
export default ProjectList;
