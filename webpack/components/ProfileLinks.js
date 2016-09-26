import React, { Component} from 'react';
import ProfileLink from './Profilelink'
let people

class ProfileLinks extends Component {
	constructor(props){
		super(props);
		this.state = {team: [ { name: "Jordan Peterson", github: "http://github.com/krustles", email: "jordanrpeterson@gmail.com", linkedin: "https://www.linkedin.com/in/jordan-peterson-71b281124"},
									 { name: "Ryan Horlacher", github: "https://www.linkedin.com/in/ryan-horlacher-4aa0a695", email: "ryan@ryan.com", linkedin: "https://www.linkedin.com/in/ryan-horlacher-4aa0a695"},
									 { name: "Dean Joseph", github: "http://github.com/dean-joseph", email: "Dean@dean.com", linkedin: "https://www.linkedin.com/in/dean-joseph-746281124" },
									 { name: "Christian Lisonbee", github: "http://github.com//kollthrale", email: "christian@christian.com", linkedin: "https://www.linkedin.com/in/christian-lisonbee-363280124"}
								 ]} 
	}

 	componentWillMount() {
  	people = this.state.team.map(person => {
  		return (
 				<ProfileLink key={person.name} person={ person } />
  		)
  	})     
	}

	render() {
		return(
			<div>
				<div className="row">
					<div className="col s5 profile">	
						{ people[0] }
					</div>
					<div className="col s5 offset-s2 profile">	
						{ people[1] }
					</div>
				</div>
				<div className="row">
					<div className="col s5 profile">	
						{ people[2] }
					</div>
					<div className="col s5 offset-s2 profile">	
						{ people[3] }
					</div>
				</div>
			</div>
		)
	}
}

export default ProfileLinks;