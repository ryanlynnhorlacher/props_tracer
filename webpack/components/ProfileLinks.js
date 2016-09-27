import React, { Component} from 'react';
import ProfileLink from './Profilelink'

class ProfileLinks extends Component {
	constructor(props){
		super(props);
		this.displayComponents = this.displayComponents.bind(this);
		this.state = {team: [ { name: "Jordan Peterson", github: "http://github.com/krustles", email: "jordanrpeterson@gmail.com", linkedin: "https://www.linkedin.com/in/jordan-peterson-71b281124"},
									 { name: "Ryan Horlacher", github: "https://www.linkedin.com/in/ryan-horlacher-4aa0a695", email: "ryan@ryan.com", linkedin: "https://www.linkedin.com/in/ryan-horlacher-4aa0a695"},
									 { name: "Dean Joseph", github: "http://github.com/dean-joseph", email: "Dean@dean.com", linkedin: "https://www.linkedin.com/in/dean-joseph-746281124" },
									 { name: "Christian Lisonbee", github: "http://github.com//kollthrale", email: "christian@christian.com", linkedin: "https://www.linkedin.com/in/christian-lisonbee-363280124"}
								 ]} 
	}

 	displayComponents() {
  	let people = this.state.team.map(person => {
  		return (
 				<ProfileLink key={person.name} person={ person } />
  		)
  	}) 
  	return people    
	}

	render() {
		return(
			<div className='row center-align'>
				{this.displayComponents()}
			</div>
		)
	}
}

export default ProfileLinks;

	// 	return(
	// 		<div className="center-align">
	// 				<div className="col s12 m6 bottom-pad">	
	// 					{ people[0] }
	// 				</div>

	// 				<div className="col s1">
	// 				</div>

	// 				<div className="col s12 m6 bottom-pad">	
	// 					{ people[1] }
	// 				</div>

	// 				<div className="col s1">
	// 				</div>

	// 				<div className="col s12 m6 bottom-pad">	
	// 					{ people[2] }
	// 				</div>

	// 				<div className="col s1">
	// 				</div>

	// 				<div className="col s12 m6 bottom-pad">	
	// 					{ people[3] }
	// 				</div>
	// 		</div>
	// 	)
