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
				<div className=" profile purple card col s5 offset-s2" onMouseEnter={ this.changeDisplay }>
					<img className="left inline" height="96px" width="96px" />
					<h5 className="inline underline white-text">{ this.state.person.name }</h5><br />
				</div>
			)		
		}
		else {
			return(
			<div className="profile purple card col s5 offset-s2" onMouseLeave={ this.changeDisplay }>
				<a href={ this.state.person.linkedin }><img src={linkedInImage} /></a><br />
				<a href={ this.state.person.github }><img src={githubImage} /></a><br />
				<strong className="white-text">{ this.state.person.email }</strong>
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