import React, {Component} from 'react';
import Customers from './Customers';
import UpdateUser from './auth/UpdateUser';
import Dashboard from './Dashboard';

class Admin extends Component {
	constructor(props) {
		super(props);
		this.showCustomers = this.showCustomers.bind(this);
		this.showUpdate = this.showUpdate.bind(this);
		this.showDash = this.showDash.bind(this);

		this.state = { showCustomers: false, showUpdate: false, showDash: false}
	}

	showCustomers() {
		if (this.state.showCustomers === true)
			return <Customers />
		else
			return null
	}

	showUpdate() {
		if (this.state.showUpdate === true)
			return <UpdateUser />
		else
			return null
	}

	showDash() {
		if (this.state.showDash === true)
			return <Dashboard />
		else
			return null
	}

	showCustomersButton() {
		if (this.state.showCustomers === true)
			return(
				<button className='btn col s12 m4 red' 
					onClick={ () => this.setState({showCustomers: !this.state.showCustomers })}>
					Hide Customer Reporting</button>
			)
		else
			return(
				<button className='btn col s12 m4' 
					onClick={ () => this.setState({ showCustomers: !this.state.showCustomers })}>
					Show Customer Reporting</button>
			)
	}

	showUpdateButton() {
		if (this.state.showUpdate === true)
			return(
				<button className='btn col s12 m4 red' 
					onClick={ () => this.setState({ showUpdate: !this.state.showUpdate })}>
					Hide Update User Form</button>
			)
		else
			return(
				<button className='btn col s12 m4' 
					onClick={ () => this.setState({ showUpdate: !this.state.showUpdate })}>
					Show Update User Form</button>
			)
	}

	showDashButton() {
		if (this.state.showDash === true)
			return(
				<button className='btn col s12 m4 red' 
					onClick={ () => this.setState({ showDash: !this.state.showDash })}>
					Hide Dasbhoard</button>
			)
		else
			return(
				<button className='btn col s12 m4' 
					onClick={ () => this.setState({ showDash: !this.state.showDash })}>
					Show Dasbhoard</button>
			)
	}

	render() {
		return(
			<div>
				<h3>Admin Options</h3>
				<div className='row'>
					{ this.showCustomersButton() }
					{ this.showUpdateButton() }
					{ this.showDashButton() }
				</div>
				{this.showCustomers()}
				{this.showUpdate()}
				{this.showDash()}
			</div>
		)
	}
}


export default Admin;