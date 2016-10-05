import React, { Component } from 'react';

class AddMaterial extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props, displayForm: true }
    this.contents = this.contents.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.createMaterial = this.createMaterial.bind(this);
  }

  changeDisplay(e) {
    e.preventDefault;
    this.setState({...this.props, displayForm: !this.state.displayForm});
  }

  createMaterial(event) {
    event.preventDefault()
    name = this.name.value
    this.props.addMaterial(name);
    this.materialForm.reset();
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
          <form ref={(input) => this.materialForm = input} onSubmit={(e) => this.createMaterial(e)}>
            <label>Add Material </label>
            <input ref={(input) => this.name = input} name="name" placeholder="Material Name"/>
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