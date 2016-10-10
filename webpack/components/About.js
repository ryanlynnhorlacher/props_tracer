import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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

	componentDidMount() {
    window.scrollTo(0, 0)
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
							<h5>What is Prop Tracer?</h5>
							<p className="left-align"> 
								PropTracer is a tool for finding quick answers for residential customers looking to buy a fence.
								It allows someone to find answers for themselves by utilizing technology from Google Maps. 
								Just select the streches of your property where you want a fence, pick the options and Voila!
								You have a quick and easy fence estimate.
							</p>
							<p className="left-align"> 
								PropTracer is a white label product for fence companies to implement into their websites. 
								It allows the company to customize the fence prices, sizes and materials to their company's needs. 
								Thanks for coming to our site, We're happy you could check us out!
								<br />
								<br />
								<span>Special Thanks to DevPoint Labs!</span>
							</p>
						</span>
					</div>
				</div>

				<div className="row center">
					<h2>Our Team</h2>
					<ProfileLinks showProfileLinks={this.showProfileLinks} links={this.state.links} />
				</div>

		  	<div className="card-small center">
					<a href="http://www.devpointlabs.com"><img src={devPointLabsImage} /></a>
		  	</div>
		 </div>
		)
	}

}
export default About;
