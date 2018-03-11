import React, { Component } from "react";
import { connect } from "react-redux";
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import { saveComplaint } from '../actions/HomeAction';

class Home extends Component {
  componentDidMount = () => {
    // this.props.onSaveComplaint();
  };

  render = () => {
    const formStyle={
      background: "white",
      padding: 10
    }
    return (
      <div className="mui--text-center">
        <Row>
          <Col md="3" />
          <Col md="6">
            <div className="mui--text-left" style={formStyle}>
              <Input label="Incident Location" floatingLabel={true} />
              <Input label="Inciden Date" floatingLabel={true} />
              <Input label="Type of Incident" floatingLabel={true}/>
              <Textarea label="Please enter a description of the incident" floatingLabel={true} />
              <Input label="Your info - optional" floatingLabel={true} />
              <div className="mui--text-right"><Button variant="raised" color="primary">Submit</Button></div>
            </div>
          </Col>
          <Col md="3"/>
        </Row>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  onSaveComplaint(complaint) {
    dispatch(saveComplaint(complaint));
  }
});

function mapStateToProps(state) {
  return {
    complaint: state.homeReducer
  };
}

export default connect(null, null)(Home);
