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
          <button className="btn-flat" type="button" onClick={ this.changeDisplay }>
            Delete Gate
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="center">
          <button type="button" className="btn red btn-flat" onClick={ (event) => this.gateDelete(event) }>
            DELETE GATE
          </button>  
          <button type="button" className="btn-flat" onClick={ this.changeDisplay }>
            Close Delete
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