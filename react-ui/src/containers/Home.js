import React, { Component } from "react";
import { connect } from "react-redux";
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Button from 'muicss/lib/react/button';
import Textarea from 'muicss/lib/react/textarea';
import { saveComplaint, storeComplaintDetails } from '../actions/HomeAction';

import TextField from 'material-ui/TextField';

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
    complaintDetails.desc = description;
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
      responseComponent = <div><label style={{color:"green"}}>Success!</label><br /><label>Incident Id: {response.result}</label></div>
    } else if(response.responseCode !== 0 && response.result === "") {
      responseComponent = <div>Unable to process your request, please try again!</div>
    }
    return responseComponent;
  };

  render = () => {
    return (
      <div className="mui--text-center">
        <Row>
          <Col md="3" />
          <Col md="6">
            <div className="mui--text-left" >
              <TextField onChange={this.onLocationChange} fullWidth={true} floatingLabelText="Incident Location" value={this.props.complaintDetails.location}/>
              <TextField onChange={this.onIncidentDateChange} fullWidth={true} floatingLabelText="Incident Date" value={this.props.complaintDetails.incidentDate}/>
              <TextField onChange={this.onIncidentTypeChange} fullWidth={true} floatingLabelText="Type of Incident" value={this.props.complaintDetails.incidentType}/>
              <TextField onChange={this.onDescriptionChange} fullWidth={true} multiLine={true} floatingLabelText="Please enter a description of the incident" value={this.props.complaintDetails.desc}/>
              <TextField onChange={this.onUserInfoChange} fullWidth={true} floatingLabelText="Your info - optional" value={this.props.complaintDetails.userInfo}/>
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
