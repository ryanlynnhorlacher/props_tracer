import React, { Component } from 'react';
 
class DeleteMaterial extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props, displayForm: true }
    this.contents = this.contents.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(e) {
    e.preventDefault();
    this.setState({...this.props, displayForm: !this.state.displayForm});
  }

  matDelete(e){
    e.preventDefault()
    this.props.deleteMaterial(this.props.matId, this.props.index)
  }

  contents() {
    if(this.state.displayForm === true) {
      return (
        <div className="block">
          <button type="button" onClick={ this.changeDisplay }>
            Delete Material
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="center">
          <button type="button" className="btn red" onClick={ (event) => this.matDelete(event) }>
            DELETE
          </button>  
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

export default DeleteMaterial;