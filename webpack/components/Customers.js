import React, {Component} from 'react';
import { Link } from 'react-router';
import Customer from './Customer';
import SearchForm from './SearchForm'

class Customers extends Component {
	constructor(props) {
		super(props);
		this.displayCustomers = this.displayCustomers.bind(this);
		this.newSearch = this.newSearch.bind(this);
		this.state = { customers: [] };
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

	newSearch(order, searchTerm, category, status) {
		$.ajax({
			url: `/api/v1/customers?order=${order}&searchTerm=${searchTerm}&category=${category}&status=${status}`,
			type: 'GET',
			dataType: 'JSON'
		}).done(customers => {
			this.setState({ customers: [...customers] });
			console.log('success!')
			console.log(customers)
		}).fail( data => {
			console.log('failed');
			console.log(data);
		})

	}

	displayCustomers() {
			let x = 0
			let customers = this.state.customers.map( customer => {
				return(
					<li className='valign-wrapper card col s12' style={styles.customerNames} key={x += 1}>
						<Link to={`/customers/${customer.id}`} className='valign'>{customer.name}</Link>
					</li>
				)
			})
			return customers
	}

	render() {
		return(
			<div className=''>
				<h3 className="center">Customer Reports</h3>
				<SearchForm newSearch={this.newSearch} />
				{ this.displayCustomers() }
				<hr />
			</div>
		)
	}
}

const styles = {
	customerNames: { height: '25px', listStyle: 'none', margin: '3px'}
}
	export default Customers;

