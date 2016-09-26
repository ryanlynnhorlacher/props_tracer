import React, {Component} from 'react';
import { Link } from 'react-router';

class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = { customers: null }
	}

	componentWillMount() { 
		$.ajax({
			url: 'api/v1/customers',
			type: 'GET',
			dataType: 'JSON'
		}).done( customers => {
			this.setState({ customers });

		}).fail( data => {
			console.log(data)
		})
	}

	displayCustomers() {
		let 
	}











	render() {
		return(
			<div>
				<h3>Admin</h3>
				<p>You are logged in!</p>
				<Link to='user/update'>Update Profile</Link>
			</div>
		)
	}
}


export default Admin;