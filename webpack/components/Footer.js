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
					<button className='btn-flat' key='auth-link-0'><Link to='admin' activeClassName={linkClass}>Admin</Link></button>,
					<button className='btn-flat' key='auth-link-2'><a href='#' onClick={this.logout}>Logout</a></button>
				]
			)
		} else {
			return(<button className='btn-flat'><Link to='/login' className='btn-flat' activeClassName={linkClass}>Login</Link></button>);
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