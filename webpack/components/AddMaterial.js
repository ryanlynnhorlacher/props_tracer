import React, { Component } from 'react';

class AddMaterial extends Component {
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
            Add Material
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="center">
          <form onSubmit={ this.props.updateMaterialList(name) }>
            <label>Add Material </label>
            <input ref="material" name="name" placeholder="Material Name"/>
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

export default AddMaterial;