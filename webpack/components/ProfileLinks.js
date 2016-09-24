import React, { Component} from 'react';
import linkedInImage from '../images/linkedin.png';
import githubImage from '../images/github.png';
import devPointLabsImage from '../images/devpointlabs.png';

class ProfileLinks extends Component {
	constructor(props){
		super(props);
		this.state = {mouseOver: false}
	}


	dean() {
		if (this.state.mouseOver === true) {
			return(<div>The mouse is over the thing</div>)
		} else {
			return(<div>The mouse is not over</div>)
		}
	}

	mouseOver() {
		this.setState({ mouseOver: true})
	}

	render() {

//	let links = this.props.links
//	let blah = this.refs.profile.text


// 		this.setState({
			
// 			<div>
// 				<a href="https://www.linkedin.com/in/dean-joseph-746281124"><img src={linkedInImage} /></a><br />
// 				<a href="http://github.com/dean-joseph"><img src={githubImage} /></a><br />
// 				<strong className="white-text">placeholder@placeholder.com</strong>
// 			</div>
			
// 		});



// dean

// 						<a href="https://www.linkedin.com/in/dean-joseph-746281124"><img src={linkedInImage} /></a><br />
// 						<a href="http://github.com/dean-joseph"><img src={githubImage} /></a><br />
// 						<strong className="white-text">placeholder@placeholder.com</strong>

// ryan
// 						<a href="https://www.linkedin.com/in/ryan-horlacher-4aa0a695"><img src={linkedInImage} /></a><br />
// 						<a href="http://github.com//ryanlynnhorlacher"><img src={githubImage} /></a><br />
// 						<strong className="white-text">placeholder@placeholder.com</strong>

// christian 
// 						<a href="https://www.linkedin.com/in/christian-lisonbee-363280124"><img src={linkedInImage} /></a><br />
// 						<a href="http://github.com//kollthrale"><img src={githubImage} /></a><br />
// 						<strong className="white-text">placeholder@placeholder.com</strong>

// jordan
// 						<a href="https://www.linkedin.com/in/jordan-peterson-71b281124"><img src={linkedInImage} /></a><br />
// 						<a href="http://github.com/krustles"><img src={githubImage} /></a><br />
// 						<strong className="white-text">JORDANRPETERSON@GMAIL.COM</strong>


		return(
			<div>
				<div className="row">
					<div className="purple card col s5" ref="profile" onMouseOver={ this.props.mouseOver }>
						{/*dean*/}

						{/*<img className="left inline" height="96px" width="96px" />
						<h5 className="inline underline white-text">Dean Joseph</h5><br />*/}
					

					</div>
					<div className="purple card col s5 offset-s2">
						<img className="left inline" height="96px" width="96px" />
						<h5 className="inline underline white-text">Ryan Horlacher</h5><br />
					</div>
				</div>
				<div className="row">
					<div className="purple card profile col s5">
						<img className="left inline" height="96px" width="96px" />
						<h5 className="inline underline white-text">Christian Lisonbee</h5><br />
					</div>
					<div className="purple card col s5 offset-s2">
						<img className="left inline" height="96px" width="96px" />
						<h5 className="inline underline white-text">Jordan Peterson</h5><br />
					</div>
				</div>
			</div>
		)
	}
}

export default ProfileLinks;