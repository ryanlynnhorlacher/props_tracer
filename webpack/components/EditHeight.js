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
 
  handleChange(e) {
    e.preventDefault();
    let name = this.refs.height.value;
    let pricePerFoot = this.refs.pricePerFoot.value;
    this.props.updateHeightList(this.props.matId, this.state.height.id, name, pricePerFoot, this.state.index)
  }
 
  contents() {
    if(this.state.displayForm === true) {
      return (
        <div className="block">
          <button className="btn-flat" type="button" onClick={ this.changeDisplay }>
            Edit {this.props.height.name}ft
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="center">
            <label>Edit Height </label>
            <form onSubmit={(e) => this.handleChange(e)}>
              <input ref="height" defaultValue={this.props.height.name} placeholder="Height"/>
              <input ref="pricePerFoot" defaultValue={this.props.height.pricePerFoot} placeholder="Price Per Foot"/>
              <button className="btn-flat" type="submit">Submit</button>
            </form>
          <button className="btn-flat" type="button" onClick={ this.changeDisplay }>
            Close Edit {this.props.height.name}ft
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