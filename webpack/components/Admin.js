import React, {Component} from 'react';
import Customers from './Customers';
import UpdateUser from './auth/UpdateUser';

class Admin extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<Customers />
				<UpdateUser />
			</div>
		)
	}
}


export default Admin;