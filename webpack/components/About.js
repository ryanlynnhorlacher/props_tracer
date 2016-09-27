import React, { Component } from 'react'
import ProfileLinks from './ProfileLinks';
import linkedInImage from '../images/linkedin.png';
import githubImage from '../images/github.png';
import devPointLabsImage from '../images/devpointlabs.png';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {links: [] }
		this.showProfileLinks = this.showProfileLinks.bind(this);
	}

	showProfileLinks() {

	}

	render() {
		return(
			<div className="center">
				<h1 className="center">About This Project</h1>
				<div className="row">
        	<div className="card s12 text-bg round">
						<span className="flow-text center">
							<h5>Prop Tracer</h5>
							<p> Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
							 Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
							 Blah Blah Blah Blah Blah Blah Blah Blah </p>
						</span>
					</div>
				</div>
			
				<div className="row center">
					<h2>Our Team</h2>
					<ProfileLinks showProfileLinks={this.showProfileLinks} links={this.state.links} />
				</div>

		  	<div className="card-small center">
					<a href="http://www.devpointlabs.com"><img src={devPointLabsImage} /></a>  
					<h3>Devpoint Labs is a place of learning</h3>
		  	</div>
		 </div>
		)
	}
 
}
export default About;