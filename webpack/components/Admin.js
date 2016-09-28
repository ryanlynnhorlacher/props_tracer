import React, {Component} from 'react';
import Customers from './Customers';

class Admin extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<Customers />
			</div>
		)
	}
}


export default Admin;