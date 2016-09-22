import React, { Component } from 'react'
import { Link } from 'react-router'
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';

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
					<li key='auth-link-0'><Link to='/admin'>Admin</Link></li>,
					<li key='auth-link-1'><Link to='/user/update'>Update</Link></li>,
					<li key='auth-link-2'><a href='#' onClick={this.logout}>Logout</a></li>

				]
			)
		} else {
			return(<li><Link to='/login'>Login</Link></li>);
		}
	}

	render() {
		return (
			<header>
				<div className='navbar-fixed'>
					<nav>
						<div className='nav-wrapper'>
							{/*<Link to='/' className='brand-logo'>Redux Rails Auth</Link>*/}
							<ul id='nav-mobile' className='right'>
								<li><Link to='/'>Map</Link></li>
								<li><Link to='/estimate'>Estimate</Link></li>
								<li><Link to='/fences'>Fences</Link></li>
								<li><Link to='/about'>About</Link></li>
								<li><Link to='/contact'>Contact Us</Link></li>
								{ this.authLink() }
							</ul>
						</div>
					</nav>
				</div>
			</header>
		)
	}

}
export default connect()(Nav);

