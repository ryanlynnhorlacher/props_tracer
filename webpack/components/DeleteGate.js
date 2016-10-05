import React, { Component } from 'react';
 
class DeleteGate extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props, displayForm: true }
    this.contents = this.contents.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(e) {
    e.preventDefault;
    this.setState({...this.props, displayForm: !this.state.displayForm});
  }

  gateDelete(e){
    e.preventDefault()
    this.props.deleteGate(this.props.matId, this.props.gateId)
  }

  contents() {
    if(this.state.displayForm === true) {
      return (
        <div className="block">
          <button type="button" onClick={ this.changeDisplay }>
            Delete Gate
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="center">
          <button type="button" className="btn red" onClick={ (event) => this.gateDelete(event) }>
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

export default DeleteGate;