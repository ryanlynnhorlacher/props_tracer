import React, {Component} from 'react';
import EstimateCard from './EstimateCard';

class Customer extends Component {
	constructor(props) {
		super(props);
		this.displayEstimates = this.displayEstimates.bind(this);
		this.deleteEstimate = this.deleteEstimate.bind(this);
		this.state = {customer: {id: null, name: null, email: null, estimates: []}};
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

	deleteEstimate(id) {
		let result = confirm("Are you sure you want to delete this estimate?");
		if (result) {
			$.ajax({
				url: `/api/v1/estimates/${id}`,
				type: 'DELETE',
				dataType: 'JSON'
			}).done( data => {
				console.log('record deleted');
				this.setState({ customer: {estimates: 
					this.state.customer.estimates.filter( i => i.id !== id ) } })
			}).fail( data => {
				console.log(data);
			})
		}
	}

	displayEstimates() {
		if (this.state.customer.estimates.length > 0) {
			let estimates = this.state.customer.estimates.map( estimate => {
				return(
					<EstimateCard delete={this.deleteEstimate} key={`${estimate.id}`} id={this.state.customer.id}
					estimate={estimate} />
				)
			})
			return estimates
		} else 
			return <h5>There are no estimates for this customer</h5>
	}


	render() {
		return(
			<div>
				<h3>{this.state.customer.name}</h3>
				<h6>{this.state.customer.email}</h6>
				<h4>Estimates</h4>
				<hr/>
				<div className='row'>
					{this.displayEstimates()}
				</div>
			</div>
			)
	}

}

export default Customer;