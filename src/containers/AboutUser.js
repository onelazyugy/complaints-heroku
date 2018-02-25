import React, { Component } from "react";
import { connect } from "react-redux";

class AboutUser extends Component {
  constructor(props) {
    super(props);
    console.log('About User page props:', this.props);
  }

  render = () => {
    return (
      <div>
        <h4>About User Page</h4>
      </div>
    );
  };
}

export default connect(null, null)(AboutUser);
