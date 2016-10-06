import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';
import logoImage from '../images/logo.png';
import SideMenu from './SideMenu'


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
					<li key='auth-link-0'><Link to='admin' className='hide-on-med-and-down' 
						activeClassName={linkClass}>Admin</Link></li>,
					<li key='auth-link-2'><a href='#' className='hide-on-med-and-down' 
						onClick={this.logout}>Logout</a></li>

				]
			)
		} else {
			return(<li><Link to='/login' className='hide-on-med-and-down' activeClassName={linkClass}>Login</Link></li>);
		}
	}

	render() {
		return (
			<header>
				<div className='navbar-fixed'>
					<nav>
						<div className='nav-color nav-wrapper'>
							<img className='hide-on-small-only' src={logoImage} />
							<ul id='nav-mobile' className='right'>
								<SideMenu logout={this.logout} auth={this.props.auth} />
								<li><IndexLink to='/' className='hide-on-med-and-down' activeClassName={linkClass}>Map</IndexLink></li>
								<li><Link to='estimate' className='hide-on-med-and-down' activeClassName={linkClass}>Estimate</Link></li>
								<li><Link to='fences' className='hide-on-med-and-down' activeClassName={linkClass}>Fences</Link></li>
								<li><Link to='about' className='hide-on-med-and-down' activeClassName={linkClass}>About</Link></li>
								<li><Link to='/contact' className='hide-on-med-and-down' activeClassName={linkClass}>Contact Us</Link></li>
								
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

