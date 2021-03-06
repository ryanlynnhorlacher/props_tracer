import React, { Component } from 'react';

class EditMaterial extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props, displayForm: true }
    this.contents = this.contents.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeDisplay() {
    this.setState({...this.props, displayForm: !this.state.displayForm})
  }

  handleChange(e) {
    e.preventDefault();
    let name = this.refs.material.value;
    this.props.updateMaterialList(this.props.matId, name, this.state.index)
  }
 
  contents() {
    if(this.state.displayForm === true) {
      return (
        <div className="block">
          <button className="btn-flat" type="button" onClick={ this.changeDisplay }>
            Edit {this.props.mat.material}
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="center">
            <label>Edit material</label>
            <form onSubmit={(e) => this.handleChange(e)}>
              <input ref="material" defaultValue={this.props.mat.material} placeholder="Material Name"/>
              <button className="btn-flat" type="submit">Submit</button>
            </form>
          <button className='btn-flat' type="button" onClick={ this.changeDisplay }>
            Close Edit {this.props.mat.material}
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

export default EditMaterial;