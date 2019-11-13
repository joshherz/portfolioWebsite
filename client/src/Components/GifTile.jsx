import React from 'react';

class GifTile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  

  render(){
    
    return(
      <div id="projectTile">
        {/* <Image src={require("https://github.com/joshherz/ochemxr/blob/master/ochemxrargif.gif?raw=true")}  style={{height: 200, width: 200}} resizeMode='contain'/> */}
        
        <img className="animated-gif" src="https://github.com/joshherz/ochemxr/blob/master/ochemxrargif.gif?raw=true"></img>
        
       
      </div>
    )
  }
}
export default GifTile;
