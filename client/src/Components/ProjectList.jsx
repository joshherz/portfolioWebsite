import React from 'react';

class ProjectList extends React.Component {
  constructor(props){
    this.state = {};
    this.compatibleWith = this.compatibleWith.bind(this);
  }
  compatibleWith(/*takes boolean value*/){
      //if true, returns svg icon of vr/ar headset project is compatible with
      return('placeholder');
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

