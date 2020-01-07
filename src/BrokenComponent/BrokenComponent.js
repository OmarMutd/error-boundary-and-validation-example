import React from 'react'

class BrokenComponent extends React.Component {

  state = {
    string: "My string"
  }

  breakComponent = () => {
    this.setState({
      string: 12345.00
    })
  }

  render() {
    return (
      <p className="page">
        {this.state.string.toLowerCase()}
        <br/>
        <br/>
        <button onClick={this.breakComponent}>Break this Component</button>
      </p>
    );
  }

}

export default BrokenComponent
