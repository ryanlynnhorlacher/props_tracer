import React, {Component} from 'react';
import { Link } from 'react-router';
import Customer from './Customer';
import SearchForm from './SearchForm'

class Customers extends Component {
	constructor(props) {
		super(props);
		this.displayCustomers = this.displayCustomers.bind(this);
		this.newSearch = this.newSearch.bind(this);
		this.showCustomersButton = this.showCustomersButton.bind(this);
		this.showCustomers = this.showCustomers.bind(this)
		this.state = { customers: [], showCustomers: false };
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
		if (this.state.showCustomers === true) {
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
	}

	showCustomers() {
		this.setState({
			showCustomers: !this.state.showCustomers
		})
	}

	showCustomersButton() {
		if (this.state.showCustomers === false) {
			return(
				<button className='btn' onClick={ this.showCustomers }>Show Search Results</button>
			)
		} else {
			return(
				<button className='btn' onClick={ this.showCustomers }>Hide Search Results</button>
			)
		}
	}



	render() {
		return(
			<div>
				<SearchForm newSearch={this.newSearch} />
				{ this.showCustomersButton() }
				<hr />
				{ this.displayCustomers() }
			</div>
		)
	}
}

const styles = {
	customerNames: { height: '25px', listStyle: 'none', margin: '3px'}
}
	export default Customers;

