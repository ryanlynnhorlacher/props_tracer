import React, { Component } from 'react';
 
class AddGate extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props, displayForm: true }
    this.contents = this.contents.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.createGate = this.createGate.bind(this);
  }

  changeDisplay(event) {
    event.preventDefault()
    this.setState({...this.props, displayForm: !this.state.displayForm})
  }

  createGate(event) {
    event.preventDefault()
    let price = this.refs.price.value
    let style = this.refs.style.value
    let width = this.refs.width.value
    this.props.addGate(price, style, width, this.props.matId)
    this.refs.gateForm.reset()
  }

  contents() {
    if(this.state.displayForm === true) {
      return (
        <div className="block">
          <button type="button" onClick={ this.changeDisplay }>
            Add Gate
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="center">
          <form ref="gateForm" onSubmit={(event) => this.createGate(event) }>
            <label>Add Gate </label>
            <input ref="price" placeholder="Gate Price"/>
            <input ref="style" placeholder="Gate Style"/>
            <input ref="width" placeholder="Gate Width"/>
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

export default AddGate;