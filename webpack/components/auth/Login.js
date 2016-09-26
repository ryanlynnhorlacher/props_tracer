import React from 'react';
import { connect } from 'react-redux';
import { handleLogin } from './actions';
import {Link} from 'react-router';

class Login extends React.Component {
	constructor(props) {
		super(props);
		let location = this.props.location.query.redirect;
		let redirectLocation = '/';
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { error: false, redirectRoute: redirectLocation};
	}

	handleSubmit(e) {
		e.preventDefault();
		let email = this.refs.email.value;
		let password = this.refs.password.value;
		this.props.dispatch(handleLogin(
			email, password, this.state.redirectRoute, 
			this.props.history)
		);
	}

	render() {
		return(
			<div>
				<h3 className="center">Login</h3>
				<div className="container text-bg round center">
					<form onSubmit={this.handleSubmit}>
						<input ref='email' required placeholder='Email' />
						<input ref='password' required placeholder='Password' type='password' />
						<button className='btn' type='submit'>Login</button>
					</form>
				</div>
				<h3 className="center signup"><Link to='/signup'>Sign up</Link></h3>
			</div>
		)
	}
}

export default connect()(Login);

