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

	render() {
		return (
			<div>
				<a href="#" data-activates="slide-out" className="hide-on-large-only button-collapse"><i className="material-icons">menu</i></a>
				<ul id="slide-out" className="side-nav">
					<img src={logoImage} />
					<li><IndexLink to='/' className='col m5' activeClassName={linkClass}>Home</IndexLink></li>
					<li><Link to='estimate' className='col m1' activeClassName={linkClass}>Estimate</Link></li>
					<li><Link to='fences' className='col m1' activeClassName={linkClass}>Fences</Link></li>
					<li><Link to='about' className='col m1' activeClassName={linkClass}>About</Link></li>
					<li><Link to='/contact' className='col m1' activeClassName={linkClass}>Contact Us</Link></li>
				</ul>
			</div>
		)
	}
}

export default SideMenu;