import React, { Component } from 'react'

class Gates extends Component {
  constructor(props){
    super(props);
    this.replaceGateChoice = this.replaceGateChoice.bind(this);
  }

  replaceGateChoice(gate){
    this.refs.gateChoice.text = gate;
  }

  gateChoices() {
    let x = -1
      let gates = this.props.gates.map( gate => {
        x += 1
        return(
          <li key={x}><a onClick={() => {this.replaceGateChoice(gate.style)}}>{gate.style}</a></li>
        )
      })
      return gates
  }

	render() {
    console.log(this.props.gates)
		return(
			<div>
        <div className="col s4">
          <a className='dropdown-button btn' ref="gateChoice" data-activates='dropdown3'>Choose A Gate Type</a>
          <ul id='dropdown3' ref="gateList" className='dropdown-content' >
              {this.props.gates ? this.gateChoices() : <li><a>Choose a material first</a></li> }
          </ul>
        </div>
			</div>
		)
	}

}
export default Gates;
