import React, { Component } from 'react';

class EditGate extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props, displayForm: true }
    this.contents = this.contents.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay() {
    this.setState({...this.props, displayForm: !this.state.displayForm})
  }

  contents() {
    if(this.state.displayForm === true) {
      return (
        <div className="block">
          <button type="button" onClick={ this.changeDisplay }>
            Edit Gate
          </button>
        </div>
      )
    }
    else {
      return (
        <div id={ "EditGateForm-"+this.props.matId } className="center">
          <form onSubmit={ this.props.updateGateList(this.props.matId) }>
            <label>Edit Gate </label>
            <input ref="gate-style" placeholder="Gate Style"/>
            <input ref="gate-price" placeholder="Gate Price"/>
            <input ref="gate-width" placeholder="Gate Width"/>
            <input type="submit" />
          </form>
          <button type="button" onClick={ this.changeDisplay }>
            Close
          </button>
        </div>
      )
    }
  }

  render() {
    return (
      this.contents()
    )
  }
}

export default EditGate;