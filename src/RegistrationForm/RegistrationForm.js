import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  updateSsn(ssn) {
    
  }

  validateSsn(ssn) {

  }

  handleSubmit(event) {

  }

  render() {

    return (

        <form className="registration" onSubmit={e => this.handleSubmit(e)}>
          <h2>Register</h2>
          <div className="registration__hint">* required field</div>
          <div className="form-group">
            <label htmlFor="ssn">SSN *</label>
            <input
              type="text"
              className="registration__control"
              name="ssn"
              id="ssn"
            />
          </div>

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
