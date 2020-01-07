import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
    this.ssnRef = React.createRef();
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const ssn = this.ssnRef.current.value.trim()
    if (ssn.length !== 9) {
      this.setState({error: "SSN is must be 9 characters"})
    } else {
      this.setState({error: null})
    }
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
              ref={this.ssnRef}
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
          {this.state.error && <span>{this.state.error}</span>}
        </form>
    );
  }
}
export default RegistrationForm;
