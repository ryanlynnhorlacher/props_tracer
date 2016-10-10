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

	render() {
		return (
			<header>
				<div className='navbar-fixed'>
					<nav>
						<div className='nav-color nav-wrapper'>
							<IndexLink to='/'><img className='hide-on-small-only' src={logoImage} /></IndexLink>
							<ul id='nav-mobile' className='right'>
								<SideMenu logout={this.logout} auth={this.props.auth} />
								<li><IndexLink to='/' className='hide-on-med-and-down' activeClassName={linkClass}>Home</IndexLink></li>
								<li><Link to='estimate' className='hide-on-med-and-down' activeClassName={linkClass}>Estimate</Link></li>
								<li><Link to='fences' className='hide-on-med-and-down' activeClassName={linkClass}>Fences</Link></li>
								<li><Link to='about' className='hide-on-med-and-down' activeClassName={linkClass}>About</Link></li>
								<li><Link to='contact' className='hide-on-med-and-down' activeClassName={linkClass}>Contact Us</Link></li>
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

