import React, { Component } from 'react';
 
class DeleteHeight extends Component {
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

  heightDelete(e){
    e.preventDefault()
    this.props.deleteHeight(this.props.matId, this.props.heightId)
  }

  contents() {
    if(this.state.displayForm === true) {
      return (
        <div className="block">
          <button type="button" onClick={ this.changeDisplay }>
            Delete Height
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="center">
          <button type="button" className="btn red" onClick={ (event) => this.heightDelete(event) }>
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

export default DeleteHeight;