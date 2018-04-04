import React, { Component } from "react";
import { connect } from "react-redux";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Button from "muicss/lib/react/button";
import Textarea from "muicss/lib/react/textarea";
import { saveComplaint, storeComplaintDetails } from "../actions/HomeAction";
import TextField from "material-ui/TextField";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Home extends Component {
  componentDidMount = () => {};

  onSubmitComplaint = () => {
    this.props.onSaveComplaint(this.props.complaintDetails);
  };

  onLocationChange = event => {
    const complaintDetails = Object.assign({}, this.props.complaintDetails);
    const location = event.target.value;
    complaintDetails.location = location;
    this.props.onStoreComplaintDetails(complaintDetails);
  };

  onIncidentDateChange = event => {
    const complaintDetails = Object.assign({}, this.props.complaintDetails);
    const incidentDate = event.target.value;
    complaintDetails.incidentDate = incidentDate;
    this.props.onStoreComplaintDetails(complaintDetails);
  };

  onIncidentTypeChange = event => {
    const complaintDetails = Object.assign({}, this.props.complaintDetails);
    const incidentType = event.target.value;
    complaintDetails.incidentType = incidentType;
    this.props.onStoreComplaintDetails(complaintDetails);
  };

  onDescriptionChange = event => {
    const complaintDetails = Object.assign({}, this.props.complaintDetails);
    const description = event.target.value;
    complaintDetails.desc = description;
    this.props.onStoreComplaintDetails(complaintDetails);
  };

  onUserInfoChange = event => {
    const complaintDetails = Object.assign({}, this.props.complaintDetails);
    const userInfo = event.target.value;
    complaintDetails.userInfo = userInfo;
    this.props.onStoreComplaintDetails(complaintDetails);
  };

  processSaveComplaintResponse = () => {
    const response = this.props.saveComplaintResponse;
    let responseComponent;
    if (response.responseCode === 0) {
      responseComponent = (
        <div>
          <label style={{ color: "green" }}>Success!</label>
          <br />
          <label>Incident Id: {response.result}</label>
        </div>
      );
    } else if (response.responseCode !== 0 && response.result === "") {
      responseComponent = (
        <div>Unable to process your request, please try again!</div>
      );
    }
    return responseComponent;
  };

  render = () => {
    return (
      <div className="mui--text-center">
        <div className="mui--text-left">
          <Row>
            <Col md="12">
              <div style={{ background: "white", borderBottom: 1 }}>
                <div
                  style={{
                    paddingTop: 35,
                    paddingRight: 0,
                    paddingBottom: 35,
                    paddingLeft: 0
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="12u 12u(mobile)">
                      <section>
                        <header>
                          <h2>Submit a complaint</h2>
                        </header>
                        <TextField
                          onChange={this.onLocationChange}
                          fullWidth={true}
                          floatingLabelText="Incident Location"
                          value={this.props.complaintDetails.location}
                        />
                        <TextField
                          onChange={this.onIncidentDateChange}
                          fullWidth={true}
                          floatingLabelText="Incident Date"
                          value={this.props.complaintDetails.incidentDate}
                        />
                        <TextField
                          onChange={this.onIncidentTypeChange}
                          fullWidth={true}
                          floatingLabelText="Type of Incident"
                          value={this.props.complaintDetails.incidentType}
                        />
                        <TextField
                          onChange={this.onDescriptionChange}
                          fullWidth={true}
                          multiLine={true}
                          floatingLabelText="Please enter a description of the incident"
                          value={this.props.complaintDetails.desc}
                        />
                        <TextField
                          onChange={this.onUserInfoChange}
                          fullWidth={true}
                          floatingLabelText="Your info - optional"
                          value={this.props.complaintDetails.userInfo}
                        />
                        <SelectField style={{width:"100%"}}
                          floatingLabelText="Choose a category"
                          value={3}
                        >
                          <MenuItem value={1} primaryText="Political Corruption" />
                          <MenuItem value={2} primaryText="Child Abuse" />
                          <MenuItem value={3} primaryText="Discrimination" />
                          <MenuItem value={4} primaryText="Domestic Violence" />
                          <MenuItem value={5} primaryText="Violation of Company Policy" />
                          <MenuItem value={5} primaryText="Government Fraud" />
                          <MenuItem value={5} primaryText="Elder Abuse" />
                          <MenuItem value={5} primaryText="Fraud" />
                          <MenuItem value={5} primaryText="Terrorism" />
                          <MenuItem value={5} primaryText="Insurance Fraud" />
                          <MenuItem value={5} primaryText="Bullying" />
                          <MenuItem value={5} primaryText="Pay Inequality" />
                          <MenuItem value={5} primaryText="Missing Person Location" />

                          <MenuItem value={5} primaryText="Prostitution" />
                          <MenuItem value={5} primaryText="Hate Crime" />
                          <MenuItem value={5} primaryText="Smuggling" />
                          <MenuItem value={5} primaryText="Murder" />
                          <MenuItem value={5} primaryText="Health and Safety Violations" />
                          <MenuItem value={5} primaryText="Unregistered Sex Offender" />
                          <MenuItem value={5} primaryText="Harassement" />
                          <MenuItem value={5} primaryText="ID Theft" />
                          <MenuItem value={5} primaryText="Threats" />
                          <MenuItem value={5} primaryText="Visa Abuse" />
                          <MenuItem value={5} primaryText="Human Trafficking" />
                          <MenuItem value={5} primaryText="Corporate Abuse" />
                          <MenuItem value={5} primaryText="Tax Fraud" />
                          <MenuItem value={5} primaryText="Other" />
                        </SelectField>
                        <div className="mui--text-right">
                          <Button
                            variant="raised"
                            color="danger"
                            onClick={this.onSubmitComplaint}
                          >
                            Submit
                          </Button>
                        </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row> 
          <Col md="12">
          {this.processSaveComplaintResponse()}
          </Col>
          </Row>
        </div>

        <Row>
          <Col md="12">
            <div id="content-wrapper">
              <div id="content">
                <div className="container">
                  <div className="row">
                    <div className="4u 12u(mobile)">
                      <section>
                        <header>
                          <h2>Who We Are</h2>
                          <h3>A subheading about who we are</h3>
                        </header>
                        <a href="#" className="feature-image">
                          <img src="images/pic05.jpg" alt="" />
                        </a>
                        <p>
                          something to describe us here
                        </p>
                      </section>
                    </div>
                    <div className="4u 12u(mobile)">
                      <section>
                        <header>
                          <h2>What We Do</h2>
                          <h3>A subheading about what we do</h3>
                        </header>
                        <ul className="check-list">
                          <li>Sed mattis quis rutrum accum</li>
                          <li>Eu varius nibh suspendisse lorem</li>
                          <li>Magna eget odio amet mollis justo</li>
                          <li>Facilisis quis sagittis mauris</li>
                          <li>Amet tellus gravida lorem ipsum</li>
                        </ul>
                      </section>
                    </div>
                    <div className="4u 12u(mobile)">
                      <section>
                        <header>
                          <h2>What People Are Saying</h2>
                          <h3>And a final subheading about our clients</h3>
                        </header>
                        <ul className="quote-list">
                          <li>
                            <img src="images/pic06.jpg" alt="" />
                            <p>"Neque nisidapibus mattis"</p>
                            <span>Jane Doe, CEO of UntitledCorp</span>
                          </li>
                          <li>
                            <img src="images/pic07.jpg" alt="" />
                            <p>"Lorem ipsum consequat!"</p>
                            <span>John Doe, President of FakeBiz</span>
                          </li>
                          <li>
                            <img src="images/pic08.jpg" alt="" />
                            <p>"Magna veroeros amet tempus"</p>
                            <span>Mary Smith, CFO of UntitledBiz</span>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
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
