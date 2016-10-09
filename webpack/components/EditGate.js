import React, { Component } from 'react';

class EditGate extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props, displayForm: true, gate: {} }
    this.contents = this.contents.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  changeDisplay() {
    this.setState({...this.props, displayForm: !this.state.displayForm})
  }
 
  handleChange(e) {
    e.preventDefault();
    let price = this.refs.price.value;
    let width = this.refs.width.value;
    let style = this.refs.style.value;
    this.props.updateGateList(this.props.matId, this.state.gate.id, price, width, style, this.state.index)
  }
 
  contents() {
    if(this.state.displayForm === true) {
      return (
        <div className="block">
          <button className="btn-flat" type="button" onClick={ this.changeDisplay }>
            Edit Gate
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="center">
            <label>Edit Gate </label>
            <form onSubmit={(e) => this.handleChange(e)}>
              <input ref="price" defaultValue={this.props.gate.price} placeholder="Price"/>
              <input ref="width" defaultValue={this.props.gate.width} placeholder="Width"/>
              <input ref="style" defaultValue={this.props.gate.style} placeholder="Style"/>
              <button className="btn-flat" type="submit">Submit</button>
            </form>
          <button className="btn-flat" type="button" onClick={ this.changeDisplay }>
            Close Edit
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