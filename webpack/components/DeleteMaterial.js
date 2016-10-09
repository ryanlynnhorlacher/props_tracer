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
          <button className="btn-flat" type="button" onClick={ this.changeDisplay }>
            Delete {this.props.mat.material}
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="center">
          <button type="button" className="btn red btn-flat" onClick={ (event) => this.matDelete(event) }>
            DELETE {this.props.mat.material}
          </button>  
          <button className="btn-flat" type="button" onClick={ this.changeDisplay }>
            Close Delete {this.props.mat.material}
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