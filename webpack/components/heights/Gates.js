import React, { Component } from 'react'

class Gates extends Component {
  constructor(props){
    super(props);

    this.replaceGateGateChoice = this.replaceGateChoice.bind(this);
    this.state = this.props
  }


  replaceGateChoice(gate){
    this.refs.heightChoice.text = gate;
  }

  gateChoices() {
    if (this.state.material) {
      let gates = this.state.material.map( map => {
        return(
          <li key={map.material}><a onClick={() => {this.replaceGateChoice(map.gate)}}>{map.gate}</a></li>
        )
      })
      return gates
    }
  }

	render() {
		return(
			<div>
        <div className="col s4">
          <a className='dropdown-button btn' ref="gateChoice" data-activates='dropdown3'>Choose A Gate Type</a>
          <ul id='dropdown3' ref="gateList" className='dropdown-content' >
             {this.state.material ? this.gateChoices() : null }
              {this.gateChoices()}
          </ul>
        </div>
			</div>
		)
	}

}
export default Gates;
