import React from 'react';
import {Link} from 'react-router';

const Admin = () => (
	<div>
		<h3>Admin</h3>
		<p>You are logged in!</p>
		<Link to='user/update'>Update Profile</Link>
	</div>
)

export default Admin;