import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';
import logoImage from '../images/logo.png';
import SideMenu from './SideMenu'


let linkClass = 'red'


class footer extends Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this)
	}

	logout(e) {
		e.preventDefault();
		this.props.dispatch(handleLogout(this.props.history));
	}

	authLink() {
		if(this.props.auth) {
			return (
				[
					<Link className='btn-flat no-ol' key='auth-link-0' to='admin' activeClassName={linkClass}>Admin</Link>,
					<a className='btn-flat no-ol' key='auth-link-2' href='#' onClick={this.logout}>Logout</a>
				]
			)
		} else {
			return(<Link className='btn-flat no-ol' to='/login' activeClassName={linkClass}>Employee Login</Link>); 
		}
	}

	render() {
		return (
			<footer className="footer-color page-footer"> 
					<div className='container center'>
						{ this.authLink() }
					</div>
			</footer>
		)
	}

}
export default connect(null, null, null, {
  pure: false
})(footer);