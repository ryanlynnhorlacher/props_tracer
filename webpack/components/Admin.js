import React, {Component} from 'react';
import Customers from './Customers';
import UpdateUser from './auth/UpdateUser';
import Dashboard from './Dashboard';
import Signup from './auth/Signup';
import FenceEditor from './FenceEditor';

class Admin extends Component {
	constructor(props) {
		super(props);
		this.showCustomers = this.showCustomers.bind(this);
		this.showUpdate = this.showUpdate.bind(this);
		this.showDash = this.showDash.bind(this);
		this.showSignup = this.showSignup.bind(this);
		this.showEditMaterial = this.showEditMaterial.bind(this);
		this.showCustomersButton = this.showCustomersButton.bind(this);
		this.showUpdateButton = this.showUpdateButton.bind(this);
		this.showDashButton = this.showDashButton.bind(this);
		this.showSignupButton = this.showSignupButton.bind(this);
		this.showEditMaterialButton = this.showEditMaterialButton.bind(this);

		this.state = { showCustomers: false, showUpdate: false, showDash: false, showEditMaterial: false}
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

	showEditMaterial() {
		if(this.state.showEditMaterial === true)
			return <FenceEditor />
		else
			return null
	}

	showEditMaterialButton() {
		if(this.state.showEditMaterial === true)
			return(
				<button className='btn col s12 m4 red'
					onClick={ () => this.setState({showEditMaterial: !this.state.showEditMaterial })}>
					Hide Materials</button>
			)
		else
			return(
				<button className='btn col s12 m4'
					onClick={ () => this.setState({showEditMaterial: !this.state.showEditMaterial }) }>
					Show Materials</button>
			)
	}

	showSignupButton() {
		if (this.state.showSignup === true)
			return(
				<button className='btn col s12 m4 red' 
					onClick={ () => this.setState({showSignup: !this.state.showSignup })}>
					Hide New User</button>
			)
		else
			return(
				<button className='btn col s12 m4' 
					onClick={ () => this.setState({ showSignup: !this.state.showSignup })}>
					Show New User</button>
			)
	}

	showCustomersButton() {
		if (this.state.showCustomers === true)
			return(
				<button className='btn col s12 m4 red' 
					onClick={ () => this.setState({showCustomers: !this.state.showCustomers })}>
					Hide Reporting</button>
			)
		else
			return(
				<button className='btn col s12 m4' 
					onClick={ () => this.setState({ showCustomers: !this.state.showCustomers })}>
					Show Reporting</button>
			)
	}

	showUpdateButton() {
		if (this.state.showUpdate === true)
			return(
				<button className='btn col s12 m4 red' 
					onClick={ () => this.setState({ showUpdate: !this.state.showUpdate })}>
					Hide User Info</button>
			)
		else
			return(
				<button className='btn col s12 m4' 
					onClick={ () => this.setState({ showUpdate: !this.state.showUpdate })}>
					Show User Info</button>
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
					{ this.showEditMaterialButton() }
				</div>
				{ this.showCustomers() }
				{ this.showUpdate() }
				{ this.showDash() }
				{ this.showSignup() }
				{ this.showEditMaterial() }
			</div>
		)
	}
}


export default Admin;