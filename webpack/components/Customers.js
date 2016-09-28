import React, {Component} from 'react';
import { Link } from 'react-router';
import Customer from './Customer';

class Customers extends Component {
	constructor(props) {
		super(props);
		this.displayCustomers = this.displayCustomers.bind(this);
		this.state = this.state = { customers: [] }
	}

	componentWillMount() { 
		$.ajax({
			url: '/api/v1/customers',
			type: 'GET',
			dataType: 'JSON'
		}).done( customers => {
			this.setState({ customers: [...customers] });
		}).fail( data => {
			console.log('failed')
			console.log(data)
		})
	}
 
	displayCustomers() {
		let customers = this.state.customers.map( customer => {
			return(
				<li key={customer.id}><Link to={`/customers/${customer.id}`}>{customer.name}</Link></li>
			)
		})
		return customers
	}

	render() {
		return(
			<div>
				{ this.displayCustomers() }
			</div>
		)
	}
}
	export default Customers;