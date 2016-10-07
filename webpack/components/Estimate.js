import React, { Component } from 'react';
import FenceChoices from './FenceChoices';
import Map from './Map';
import CustomerInput from './CustomerInput';
import FinalEstimate from './FinalEstimate';
 

class Estimate extends Component {
	constructor(props) {
		super(props);
		this.setDistance = this.setDistance.bind(this);
		this.setCustomerInfo = this.setCustomerInfo.bind(this);
		this.setEstimateInfo = this.setEstimateInfo.bind(this);
		this.showFinalEstimate = this.showFinalEstimate.bind(this);
		this.addCustomer = this.addCustomer.bind(this);
		this.renderFinalEstimate = this.renderFinalEstimate.bind(this);

		this.state = { showingFinalEstimate: false, 
										customer: {email: null, phone: null, name: null},
										estimate: {location: null, distance: null, finalPrice: null, 
										fenceMaterial: null, fenceHeight: null, gateCount: null },
										finalEstimateInfo: null
		}
	}

	showFinalEstimate() {
		this.setState({showingFinalEstimate: true})
	}

	setDistance(distance) {
		console.log(distance)
		this.setState({ estimate:{ distance: distance}})
	}

	setCustomerInfo(name, email, phone){
		this.setState({ customer: {email, phone, name}})
		console.log('set Cust Info')
	}

	setEstimateInfo(location, pricePerFoot, fenceMaterial, fenceHeight, gateCount, gatePrice) {
		console.log(fenceMaterial)
		let finalPrice = this.state.estimate.distance * pricePerFoot + gatePrice
		this.setState({estimate: {location: location, finalPrice: finalPrice, 
											fenceMaterial: fenceMaterial, fenceHeight: fenceHeight, gateCount: gateCount, 
											distance: this.state.estimate.distance}})
	}


	addCustomer() {
		let cust = this.state.customer
		let est = this.state.estimate
	  $.ajax({
	    url: '/api/v1/customers',
	    type: 'POST',
	    dataType: 'JSON',
	    data: { customer: { name: cust.name, email: cust.email, phone_number: cust.phone }, estimate: {location: est.location, distance: est.distance, 
	      final_price: est.finalPrice, fence_material: est.fenceMaterial, fence_height: est.fenceHeight, 
	      gate_count: est.gateCount }}
	  }).done(estimateInfo => {
	  	console.log(estimateInfo)
	    this.setState({ finalEstimateInfo: estimateInfo })
	  }).fail(data =>{
	    console.log('FAIL')
	    console.log(data)
	  })
	}

	renderFinalEstimate() {
		if(this.state.showingFinalEstimate === true ) {
				return(

						<FinalEstimate finalEstimateInfo={this.state.finalEstimateInfo} />

				)
		} else if(this.state.showingFinalEstimate === false) {
			return(
				<div id='beforeEstimate'>
					<Map setDistance={this.setDistance} />
					<FenceChoices setEstimateInfo={this.setEstimateInfo} />
					<CustomerInput setCustomerInfo={this.setCustomerInfo} showFinalEstimate={this.showFinalEstimate}
						addCustomer={this.addCustomer} />
				</div>
			)
		}
	}



	render() {
		return(
			<div id='estimateDiv'>
				{this.renderFinalEstimate() }
			</div>
		)
	}

}
export default Estimate;
