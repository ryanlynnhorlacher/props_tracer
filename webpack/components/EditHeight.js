import React, { Component } from 'react';

class EditHeight extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props, displayForm: true }
    this.contents = this.contents.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  changeDisplay() {
    this.setState({...this.props, displayForm: !this.state.displayForm})
  }

  handleChange(e, heightId) {
    console.log(heightId)
    const height = this.props.height
    const updatedHeight = {
      height.name = heightId
    }
    this.props.updateHeight(heightId, updatedHeight);
  }

  contents() {
    if(this.state.displayForm === true) {
      return (
        <div className="block">
          <button type="button" onClick={ this.changeDisplay }>
            Edit
          </button>
        </div>
      )
    }
    else {
      return (
        <div id={ "EditFenceForm-"+this.props.heightId } className="center">
            <label>Edit Height </label>
            <form onSubmit={(e) => this.handleChange(e, this.props.height.id)}>
              <input ref="height" defaultValue={this.props.height.name} placeholder="Height"/>
              <input ref="priceperfoot" defaultValue={this.props.height.pricePerFoot} placeholder="Price Per Foot"/>
              <input type="submit"/>
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

export default EditHeight;