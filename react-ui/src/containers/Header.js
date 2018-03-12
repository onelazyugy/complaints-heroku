import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../media/megaphone.png';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router-dom";

class Header extends Component {
  render = () => {
    const bg = {
      background: "#ffffff",
      position: "fixed",
      top: 0
    }
    return (
      <div>
        <AppBar style={bg}
          title={<Link to={"/"} style={{ textDecoration: 'none' }}>ANONYMOUS COMPLAINT REPORT</Link>}
          iconElementLeft={<Link to={"/"}><img src={logo} className="app-logo" alt="logo" /></Link>}
          iconElementRight={<Link to={"/about"}><FlatButton label="About" style={{color: "black"}}/></Link>}
        />
      </div>
    );
  }
}

export default connect(null, null)(Header);
