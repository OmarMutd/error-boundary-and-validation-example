import React, { Component } from "react";

class RegistrationForm extends Component {

  state = {ssn: {value: '', touched: false}};

  validateSsn = () => {

    if (this.state.ssn.value.length !== 9 && this.state.ssn.touched) {
      return "SSN must be nine characters"
    }

    return null
  }

  setSsn = (ssn) => {
      this.setState({ssn: {value: ssn, touched: true}});
  }; 

  handleSubmit = (event) => {
    event.preventDefault()
    // submission logic goes here
  }

  render() {

    return (

        <form className="registration" onSubmit={e => this.handleSubmit(e)}>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="ssn">SSN*</label>
            <input
              type="text"
              className="registration__control"
              name="ssn"
              id="ssn"
              onChange={e => this.setSsn(e.target.value)}
            />
          </div>
          {this.validateSsn() && <span>{this.validateSsn()}</span>}
          <div className="registration__button__group">
            <button
              type="submit"
              className="registration__button"
            >
              Save
            </button>
          </div>
          
        </form>
    );
  }
}
export default RegistrationForm;
