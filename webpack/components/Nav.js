import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';
import logoImage from '../images/logo.png';

let linkClass = 'red'

class Nav extends Component {
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
					<li key='auth-link-0'><Link to='admin' activeClassName={linkClass}>Admin</Link></li>,
					<li key='auth-link-1'><Link to='user/update' activeClassName={linkClass}>Update</Link></li>,
					<li key='auth-link-2'><a href='#' onClick={this.logout}>Logout</a></li>

				]
			)
		} else {
			return(<li><Link to='/login' activeClassName={linkClass}>Login</Link></li>);
		}
	}

	render() {
		return (
			<header>
				<div className='navbar-fixed'>
					<nav>
						<div className='nav-color nav-wrapper'>
							<img src={logoImage} />
							{/*<Link to='/' className='brand-logo'>Redux Rails Auth</Link>*/}
							<ul id='nav-mobile' className='right'>
								<li><IndexLink to='/' activeClassName={linkClass}>Map</IndexLink></li>
								<li><Link to='estimate' activeClassName={linkClass}>Estimate</Link></li>
								<li><Link to='fences' activeClassName={linkClass}>Fences</Link></li>
								<li><Link to='about' activeClassName={linkClass}>About</Link></li>
								<li><Link to='/contact' activeClassName={linkClass}>Contact Us</Link></li>
								{ this.authLink() }
							</ul>
						</div>
					</nav>
				</div>
			</header>
		)
	}

}
export default connect(null, null, null, {
  pure: false
})(Nav);

