import React, { Component } from 'react';
import FenceChoices from './FenceChoices';
import Map from './Map';
import CustomerInupt from './CustomerInput';
import FinalEstimate from './FinalEstimate';

class Estimate extends Component {
	constructor(props) {
		super(props);
		this.state = null
	}



	render() {
		return(
			<div>
				<Map />
				<FenceChoices />
				<CustomerInput />
				<FinalEstimate />
			</div>
		)
	}

}
export default Estimate;
