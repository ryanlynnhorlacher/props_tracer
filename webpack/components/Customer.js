import React, {Component} from 'react';

class Customer extends Component {
	constructor(props) {
		super(props);
		this.state = {customer: {id: null, name: null, email: null, estimates: []}};
		this.displayEstimates = this.displayEstimates.bind(this);
	}

	componentWillMount() {
	 $.ajax({
	 	url: `/api/v1/customers/${this.props.params.id}`,
	 	type: 'GET',
	 	dataType: 'JSON'
	 }).done( customer => {
	 	this.setState({customer: { estimates: customer.customer.estimates, id: customer.customer.id, 
	 		name: customer.customer.name, email: customer.customer.email}})
	 }).fail(data => {
	 	console.log(data)
	 })
	}


	displayEstimates() {
		let estimates = this.state.customer.estimates.map( estimate => {
			return(
				<div key={`${estimate.id}`}>
					<li>Location: {estimate.location}</li>
					<li>Estimated Price: ${estimate.finalPrice}</li>
					<li>Gate Count: {estimate.gateCount}</li>
					<li>Date Submitted: {estimate.dateSubmitted.slice(0, 10)}</li>
					<li>Status: {estimate.status}</li>
					<br />
				</div>
			)
		})
		return estimates
	}


	render() {
		return(
			<div>
				<h3>Customer Info</h3>
				<ul>
					<li>{this.state.customer.name}</li>
					<li>{this.state.customer.email}</li>
				</ul>
				<h4>Estimates</h4>
				<ul>
					{this.displayEstimates()}
				</ul>
			</div>
			)
	}

}

export default Customer;