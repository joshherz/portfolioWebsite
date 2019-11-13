import React from 'react';
import Sidebar from './Sidebar.jsx';
import ProjectList from './ProjectList.jsx';
import ProjectTile from './ProjectTile.jsx';
import GifTile from './GifTile.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projectsVR: [
        {
          title: "ChemVR",
          desc: "With React360, visualize the chemical structure of various amino acids in VR all from within your browser",
          url: "https://chemvr.com",
          compatibleWithOculus: true,
          compatibleWithHololens: false,
        }
        // {
        //   title: "OChemXR",
        //   desc: "Utilize the newly developed WebXR API to visualize holograms of molecular structuress via your Hololens AR Headset or AR-enabled Android phone",
        //   url: "http://ochemxr.com",
        //   compatibleWithOculus: false,
        //   compatibleWithHololens: true,

        // }
      ],
      projectsAR: [
        {
          title: "OChemAR",
          desc: "Utilize the newly developed WebXR API to visualize holograms of molecular structuress via your Hololens AR Headset or AR-enabled Android phone",
          url: "http://ochemar.com",
          compatibleWithOculus: false,
          compatibleWithHololens: true,  
          projectStylingClassName: "projectTilePurple"
        }
      ]
    }
  }
  render() {
    return (
      <div id="outer-container">
          <div id="inner-container">
          <header id="header"><b className="textCenter">Herz Dev</b> <span><img className="donutCenter" src="https://joshportfoliowebsite.s3-us-west-1.amazonaws.com/donut.svg"></img></span></header>
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
            <div id="page-wrap-dark-blue">
              <div id="projects">
                <ProjectList projectsData={this.state.projectsVR} />
              </div>
            </div>
            <div id="page-wrap-purple">
              <div id="projects">
                <ProjectList projectsData={this.state.projectsAR} />
              </div>
            </div>
            <div id="page-wrap-gif">
              <div id="projects">
                <GifTile />
              </div>
            </div>
          </div>
      </div>




    )
  }
}
export default App;
