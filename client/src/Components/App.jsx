import React from 'react';
import Sidebar from './Sidebar.jsx';
import ProjectList from './ProjectList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "ChemVR",
          desc: "With React360, visualize the chemical structure of various amino acids in VR all from within your browser",
          url: "https://chemvr.com",
          compatibleWithOculus: true,
          compatibleWithHololens: false,
        },
        {
          title: "OChemXR",
          desc: "Utilize the newly developed WebXR API to visualize holograms of molecular structuress via your Hololens AR Headset or AR-enabled Android phone",
          url: "http://ochemxr.com",
          compatibleWithOculus: false,
          compatibleWithHololens: true,

        }
      ]
    }
  }
  render() {
    return (
      <div>Testing App
        <div>Rendering Sidebar Component
        <Sidebar></Sidebar>
        <div id="main">
          <div id="projects">
            <ProjectList projectsData = {this.state.projects} />
          </div>
        </div>
        </div>
      </div>

    )
  }
}
export default App;