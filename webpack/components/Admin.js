import React, {Component} from 'react';
import Customers from './Customers';
import UpdateUser from './auth/UpdateUser';
import Dashboard from './Dashboard';

class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = { showCustomers: false, showUpdate: false, showDash: false}
	}

	render() {
		return(
			<div>
				<Customers />
				<UpdateUser />
				<Dashboard />
			</div>
		)
	}
}


export default Admin;