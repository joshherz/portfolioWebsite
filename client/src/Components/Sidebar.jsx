import React from 'react';
import { slide as Menu } from "react-burger-menu";

class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <Menu width={ '60%' } >
       {/* <Menu {...this.props}> */}
        <a className="bm-name">
        Josh Herz
        </a>
        <a className="bm-email" >
        jherz.dev@gmail.com
        </a>
        <a className="bm-item" href="#chemvr">
        ChemVR
        </a>
        <a className="menu-item" href="#ochemxr">
        OchemXR
        </a>
        <a className="menu-item" href="#collab">
        Collab With Me
        </a>
        
      </Menu>
    )
  }
}
export default Sidebar;