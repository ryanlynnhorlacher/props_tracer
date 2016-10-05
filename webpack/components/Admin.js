import React, {Component} from 'react';
import Customers from './Customers';
import UpdateUser from './auth/UpdateUser';
import Dashboard from './Dashboard';
import Signup from './auth/Signup';

class Admin extends Component {
	constructor(props) {
		super(props);
		this.showCustomers = this.showCustomers.bind(this);
		this.showUpdate = this.showUpdate.bind(this);
		this.showDash = this.showDash.bind(this);
		this.showSignup = this.showSignup.bind(this);

		this.state = { showCustomers: false, showUpdate: false, showDash: false}
	}

	showSignup() {
		if (this.state.showSignup === true) 
			return <Signup />
		else
			return null
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

	showSignupButton() {
		if (this.state.showSignup === true)
			return(
				<button className='btn col s12 m4 red' 
					onClick={ () => this.setState({showSignup: !this.state.showSignup })}>
					Hide New User Form</button>
			)
		else
			return(
				<button className='btn col s12 m4' 
					onClick={ () => this.setState({ showSignup: !this.state.showSignup })}>
					Show New User Form</button>
			)
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
					{ this.showSignupButton() }
				</div>
				{ this.showCustomers() }
				{ this.showUpdate() }
				{ this.showDash() }
				{ this.showSignup() }
			</div>
		)
	}
}


export default Admin;