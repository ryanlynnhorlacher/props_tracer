import React, { Component } from 'react'
import FenceChoices from './FenceChoices'

class Estimate extends Component {
	constructor(props) {
		super(props);
		this.state = null
	}



	render() {
		return(
			<div>
				<h1>This is the Estimate</h1>
				<FenceChoices />
			</div>
		)
	}

}
export default Estimate;
