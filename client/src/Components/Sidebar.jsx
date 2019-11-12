import React from 'react';

class Sidebar extends React.Component{
  render() {
    return (
      <Menu>
        <a className="menu-item" href="#chemvr">
        ChemVR
        </a>
        <a className="menu-item" href="#ochemxr">
        OchemXR
        </a>
        <a className="menu-item" href="#collaborate">
        Collaborate With Me
        </a>
      </Menu>
    )
  }
}
export default Sidebar;