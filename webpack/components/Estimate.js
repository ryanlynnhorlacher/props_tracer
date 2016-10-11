import React, { Component } from 'react';
import FenceChoices from './FenceChoices';
import Map from './Map';
import CustomerInput from './CustomerInput';
import FinalEstimate from './FinalEstimate';
import ReactDOM from 'react-dom'

class Estimate extends Component {
	constructor(props) {
		super(props);
		this.setDistance = this.setDistance.bind(this);
		this.setCustomerInfo = this.setCustomerInfo.bind(this);
		this.setEstimateInfo = this.setEstimateInfo.bind(this);
		this.showFinalEstimate = this.showFinalEstimate.bind(this);
		this.addCustomer = this.addCustomer.bind(this);
		this.renderFinalEstimate = this.renderFinalEstimate.bind(this);
		this.dontRenderFinalEstimate = this.dontRenderFinalEstimate.bind(this);
		this.showCustomerInput = this.showCustomerInput.bind(this);
		this.showFenceChoices = this.showFenceChoices.bind(this);

		this.state = { 
			showCustomerInput: false,
			showFenceChoices: false,
			showingFinalEstimate: false,
			customer: {email: null, phone: null, name: null},
			estimate: {location: null, distance: null, finalPrice: null,
			fenceMaterial: null, fenceHeight: null, gateCount: null, gateType: null },
			finalEstimateInfo: null
		}
	}

	componentDidMount() {
    window.scrollTo(0, 0)
	}

	showFinalEstimate() {
		this.setState({
			showingFinalEstimate: true,
			showFenceChoices: false,
			showCustomerInput: false
		})
	}

	setDistance(distance) {
		this.setState({ estimate:{ distance: distance},
										showFenceChoices: true })
	}

	setCustomerInfo(name, location, email, phone) {
		this.setState({ customer: {email, phone, name}, 
			estimate: {...this.state.estimate, location}
		})
	}

	setEstimateInfo( pricePerFoot, fenceMaterial, fenceHeight, gateCount, gatePrice, gateType) {
		let finalPrice = this.state.estimate.distance * pricePerFoot + gatePrice
		this.setState({
			estimate: { finalPrice: finalPrice,
			fenceMaterial: fenceMaterial, fenceHeight: fenceHeight, gateCount: gateCount,
			distance: this.state.estimate.distance, gateType},
			showCustomerInput: true
		})
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
	    console.log(data)
	  })
	}

	renderFinalEstimate() {
		if(this.state.showingFinalEstimate === true )
			return(
					<FinalEstimate finalEstimateInfo={this.state.finalEstimateInfo} gateType={this.state.estimate.gateType} />
			)
		else
			return null
	}

	showFenceChoices() {
		if(this.state.showFenceChoices ===  true )
			return(
					<FenceChoices setEstimateInfo={this.setEstimateInfo} />
			)
	}

	showCustomerInput() {
		if(this.state.showCustomerInput === true)
			return(
					<CustomerInput setCustomerInfo={this.setCustomerInfo} showFinalEstimate={this.showFinalEstimate}
						addCustomer={this.addCustomer} />
			)
	}

	dontRenderFinalEstimate() {
		if(this.state.showingFinalEstimate === false)
			return(
				<div id='beforeEstimate'>
					<Map setDistance={this.setDistance} />
				</div>
			)
		else
			return null
	}



	render() {
		return(
			<div id='estimateDiv'>
				{this.renderFinalEstimate() }
				{this.dontRenderFinalEstimate() }
				{this.showFenceChoices() }
				{this.showCustomerInput() }
			</div>
		)
	}

}
export default Estimate;
