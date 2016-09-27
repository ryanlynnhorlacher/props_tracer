import React, { Component } from 'react';
import linkedInImage from '../images/linkedin.png';
import githubImage from '../images/github.png';
import devPointLabsImage from '../images/devpointlabs.png';

class ProfileLink extends Component {
	constructor(props) {
		super(props)
		this.state = { ...this.props, displayName: true }
		this.contents = this.contents.bind(this);
		this.changeDisplay = this.changeDisplay.bind(this);
	}

	changeDisplay() {
		this.setState({...this.props, displayName: !this.state.displayName})
	}

	contents() {
		if(this.state.displayName === true) { 
			return (
				<div className="col m6 s12 profile center round" onMouseEnter={ this.changeDisplay }>
					<div className='purple round'>
						<h4 className="white-text profile-name-box">{ this.state.person.name }</h4>
					</div>
				</div>
			)		
		}
		else {
			return(
			<div className="col m6 s12 profile no-marg center round" onMouseLeave={ this.changeDisplay }>
				<div className='purple round'>	
					<a className="" target="_blank" href={ this.state.person.linkedin }><img src={linkedInImage} /></a>
					<br />
					<a className="" target="_blank" href={ this.state.person.github }><img src={githubImage} /></a>
					<br />
					<a className="" href={ this.state.person.email } target="_top"><strong className="white-text">{ this.state.person.email }</strong></a>			
				</div>
			</div>
			)
		}
	}
	render() {
		return(
				this.contents()
		)
	}
}

export default ProfileLink; 