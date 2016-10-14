import React, { Component } from 'react';
import FenceChoices from './FenceChoices';
import Map from './Map';
import CustomerInput from './CustomerInput';
import FinalEstimate from './FinalEstimate';
import ReactDOM from 'react-dom'
import SelfMeasurement from './SelfMeasurement'

class Estimate extends Component {
	constructor(props) {
		super(props);
		this.setDistance = this.setDistance.bind(this);
		this.setCustomerInfo = this.setCustomerInfo.bind(this);
		this.setEstimateInfo = this.setEstimateInfo.bind(this);
		this.showFinalEstimate = this.showFinalEstimate.bind(this);
		this.addCustomer = this.addCustomer.bind(this);
		this.renderFinalEstimate = this.renderFinalEstimate.bind(this);
		this.showMap = this.showMap.bind(this);
		this.showCustomerInput = this.showCustomerInput.bind(this);
		this.showFenceChoices = this.showFenceChoices.bind(this);

		this.state = {
			showSelfMeasurement: false,
			showMap: true, 
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
			showCustomerInput: false,
			showSelfMeasurement: false
		})
	}

	setDistance(distance) {
		console.log(distance)
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
	      gate_count: est.gateCount, status: 'Not contacted' }}
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

	showMap() {
		if(this.state.showMap === true)
			return(
				<div id='beforeEstimate' className='center'>
				<h6>To input distance manually:</h6>
				<button className='btn btn-flat' onClick={ () => this.setState({showMap: false, 
					showSelfMeasurement: true}) }>Manual Input</button>
					<Map setDistance={this.setDistance} />
				</div>
			)
		else if(this.state.showMap === false && this.state.showSelfMeasurement ===  true)
			return(
				<div className='center'>
					<SelfMeasurement setDistance={this.setDistance} />
					<button className='btn red'onClick={() => this.setState({ showMap: true, 
						showSelfMeasurement: false }) }
						>Cancel</button>
				</div>
			)
	}

	render() {
		return(
			<div id='estimateDiv'>
			<h2 className='center'>HOW TO USE:</h2>
			<div className='card col s12 left-align text-bg flow-text round'>
				<ul className='browser-default'>
					<li>Find your property</li>
					<li>Draw your fence by clicking on the map</li>
					<li>Select fence options and input customer information</li>
					<li>The Estimate Details will appear after submission</li>
				</ul>
			</div>
				{this.renderFinalEstimate() }
				{this.showMap() }
				{this.showFenceChoices() }
				{this.showCustomerInput() }
			</div>
		)
	}

}
export default Estimate;
