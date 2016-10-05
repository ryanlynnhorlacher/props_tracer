import React, { Component } from 'react';

class AddHeight extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props, displayForm: true }
    this.contents = this.contents.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.createHeight = this.createHeight.bind(this);
  }

  changeDisplay(e) {
    e.preventdefault
    this.setState({...this.props, displayForm: !this.state.displayForm})
  }

  createHeight(event) {
    event.preventDefault()
    let height = this.refs.height.value
    let pricePerFoot = this.refs.pricePerFoot.value
    this.props.addHeight(height, pricePerFoot, this.props.matId)
    this.refs.heightForm.reset()
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
        <div className="center">
          <form ref="heightForm" onSubmit={ (event) => this.createHeight(event) }>
            <label>Add Height </label>
            <input ref="height" placeholder="Height"/>
            <input ref="pricePerFoot" placeholder="Price Per Foot"/>
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