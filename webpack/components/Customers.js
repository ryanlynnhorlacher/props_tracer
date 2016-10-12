import React, {Component} from 'react';
import { Link } from 'react-router';
import Customer from './Customer';
import SearchForm from './SearchForm'

class Customers extends Component {
	constructor(props) {
		super(props);
		this.displayCustomers = this.displayCustomers.bind(this);
		this.newSearch = this.newSearch.bind(this);
		this.prevPage = this.prevPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
		this.state = { customers: [], offset: 0 };
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
			url: `/api/v1/customers?order=${order}&searchTerm=${searchTerm}&
				category=${category}&status=${status}&offset=${this.state.offset}`,
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

	nextPage() {
		this.setState({ offset: this.state.offset + 20 })
		this.refs.searchForm.searchTimer()
	}

	prevPage() {
		this.setState({ offset: this.state.offset - 20 })
		this.refs.searchForm.searchTimer()
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
				<SearchForm ref='searchForm' newSearch={this.newSearch} />
				{ this.displayCustomers() }
					<button onClick={this.prevPage} className='btn-flat' >Prev page</button>
					<button onClick={this.nextPage} className='btn-flat' >Next page</button>
				<hr />
			</div>
		)
	}
}

const styles = {
	customerNames: { height: '25px', listStyle: 'none', margin: '3px'}
}
	export default Customers;

