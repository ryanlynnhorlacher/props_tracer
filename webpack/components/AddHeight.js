import React, { Component } from 'react';

class AddHeight extends Component {
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
            Add Height
          </button>
        </div>
      )
    }
    else {
      return (
        <div id={ "newFenceForm-"+this.props.matId } className="center">
          <form onSubmit={ this.props.updateHeightList(this.props.matId) }>
            <label>Add Height </label>
            <input ref="height" placeholder="Height"/>
            <input ref="priceperfoot" placeholder="Price Per Foot"/>
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

export default AddHeight;