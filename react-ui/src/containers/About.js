import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  constructor(props) {
    super(props);
    console.log('About page props:', this.props);
  }

  render = () => {
    return (
      <div>
        <h4>Let your voice be heard and freely to report anything. Your report will remain anonymous</h4>
      </div>
    );
  };
}

export default connect(null, null)(About);
