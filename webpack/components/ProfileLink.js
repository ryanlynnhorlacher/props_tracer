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
				<div className="profile block purple valign-wrapper round card" onMouseEnter={ this.changeDisplay }>
					<img className="left inline" height="100vh" width="100vw" />
					<h4 className="inline valign white-text">{ this.state.person.name }</h4><br />
				</div>
			)		
		}
		else {
			return(
<<<<<<< 5219e1923e0233794804d84f002eefc5be85bbb8
			<div className="profile block purple round card" onMouseLeave={ this.changeDisplay }>
				<a className="top-pad" target="_blank" href={ this.state.person.linkedin }><img src={linkedInImage} /></a><br />
				<a target="_blank" href={ this.state.person.github }><img src={githubImage} /></a><br />
				<a href={ this.state.person.email } target="_top"><strong className="white-text">{ this.state.person.email }</strong></a>
=======
			<div className="profile purple card col s5 offset-s2" onMouseLeave={ this.changeDisplay }>
				<a href={ this.state.person.linkedin }><img src={linkedInImage} /></a><br />
				<a href={ this.state.person.github }><img src={githubImage} /></a><br />
				<strong className="white-text">{ this.state.person.email }</strong>
>>>>>>> profile link component finished needs styled
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