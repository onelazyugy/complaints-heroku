import React, { Component } from "react";
import { connect } from "react-redux";
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import { saveComplaint, storeComplaintDetails } from '../actions/HomeAction';

class Home extends Component {
  componentDidMount = () => {};

  onSubmitComplaint = () => {
    this.props.onSaveComplaint(this.props.complaintDetails);
  };

  onLocationChange = (event) => {
    const complaintDetails = Object.assign({}, this.props.complaintDetails);
    const location = event.target.value;
    complaintDetails.location = location;
    this.props.onStoreComplaintDetails(complaintDetails);
  };

  onIncidentDateChange = (event) => {
    const complaintDetails = Object.assign({}, this.props.complaintDetails);
    const incidentDate = event.target.value;
    complaintDetails.incidentDate = incidentDate;
    this.props.onStoreComplaintDetails(complaintDetails);
  };

  onIncidentTypeChange = (event) => {
    const complaintDetails = Object.assign({}, this.props.complaintDetails);
    const incidentType = event.target.value;
    complaintDetails.incidentType = incidentType;
    this.props.onStoreComplaintDetails(complaintDetails);
  };

  onDescriptionChange = (event) => {
    const complaintDetails = Object.assign({}, this.props.complaintDetails);
    const description = event.target.value;
    complaintDetails.description = description;
    this.props.onStoreComplaintDetails(complaintDetails);
  };

  onUserInfoChange = (event) => {
    const complaintDetails = Object.assign({}, this.props.complaintDetails);
    const userInfo = event.target.value;
    complaintDetails.userInfo = userInfo;
    this.props.onStoreComplaintDetails(complaintDetails);
  };

  processSaveComplaintResponse = () => {
    const response = this.props.saveComplaintResponse;
    let responseComponent;
    if(response.responseCode === 0) {
      responseComponent = <div>Incident Id: {response.result}</div>
    } else {
      // responseComponent = <div>Unable to process your request, please try again!</div>
    }
    return responseComponent;
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
              <Input label="Incident Location" floatingLabel={true} onChange={this.onLocationChange}/>
              <Input label="Inciden Date" floatingLabel={true} onChange={this.onIncidentDateChange}/>
              <Input label="Type of Incident" floatingLabel={true} onChange={this.onIncidentTypeChange}/>
              <Textarea label="Please enter a description of the incident" floatingLabel={true} onChange={this.onDescriptionChange}/>
              <Input label="Your info - optional" floatingLabel={true} onChange={this.onUserInfoChange}/>
              <div className="mui--text-right"><Button variant="raised" color="primary" onClick={this.onSubmitComplaint}>Submit</Button></div>
              
              {this.processSaveComplaintResponse()}
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
  },
  onStoreComplaintDetails(complaint) {
    dispatch(storeComplaintDetails(complaint));
  }
});

function mapStateToProps(state) {
  return {
    saveComplaintResponse: state.saveComplaintReducer,
    complaintDetails: state.complaintDetailsReducer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
