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
          <button className="btn-flat" type="button" onClick={ this.changeDisplay }>
            Delete {this.props.height.name}ft
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="center">
          <button type="button" className="btn red btn-flat" onClick={ (event) => this.heightDelete(event) }>
            DELETE {this.props.height.name}ft
          </button>  
          <button className="btn-flat" type="button" onClick={ this.changeDisplay }>
            Close Delete {this.props.height.name}ft
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