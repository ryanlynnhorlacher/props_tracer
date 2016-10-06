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
					<li key='auth-link-0'><Link to='admin' className='footer-color hide-on-med-and-down colasible-btn' 
						activeClassName={linkClass}>Admin</Link></li>,
					<li key='auth-link-2'><a href='#' className='footer-color hide-on-med-and-down colasible-btn' 
						onClick={this.logout}>Logout</a></li>

				]
			)
		} else {
			return(<Link to='/login' className='footer-color hide-on-med-and-down colasible-btn' activeClassName={linkClass}>Login</Link>);
		}
	}

	render() {
		return (
			<footer className="footer-color page-footer"> 
				<div className='footer-copyright'>
					<div className='container'>
						{ this.authLink() }
					</div>
				</div>
			</footer>
		)
	}

}
export default connect(null, null, null, {
  pure: false
})(footer);





