import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';
import logoImage from '../images/logo.png';

let linkClass = 'red'


class SideMenu extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$(".button-collapse").sideNav({
			menuWidth: 300,
	    edge: 'right',
	    closeOnClick: true
		});     
	}

	authLink() {
		if(this.props.auth) {
			return (
				[
					<li key='auth-link-0'><Link to='admin' className='col m1' activeClassName={linkClass}>Admin</Link></li>,
					<li key='auth-link-2'><a href='#' className='col m1' onClick={this.props.logout}>Logout</a></li>

				]
			)
		} else {
			return( <li><Link to='/login' className='col m1' activeClassName={linkClass}>Login</Link></li> );
		}
	}

	render() {
		return (
			<div>
				<a href="#" data-activates="slide-out" className="hide-on-large-only button-collapse">Menu</a>
				<ul id="slide-out" className="side-nav">
					<img src={logoImage} />
					<li><IndexLink to='/' className='col m5' activeClassName={linkClass}>Map</IndexLink></li>
					<li><Link to='estimate' className='col m1' activeClassName={linkClass}>Estimate</Link></li>
					<li><Link to='fences' className='col m1' activeClassName={linkClass}>Fences</Link></li>
					<li><Link to='about' className='col m1' activeClassName={linkClass}>About</Link></li>
					<li><Link to='/contact' className='col m1' activeClassName={linkClass}>Contact Us</Link></li>
					{ this.authLink() }
				</ul>
			</div>
		)
	}
}

export default SideMenu;