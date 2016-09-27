import React, { Component } from 'react';

class Fences extends Component {
	constructor(props) {
		super(props);
	}

	
	componentDidMount() {
		$('.slider').slider({full_width: true});
		$('.materialboxed').materialbox();
	}
	

	render() {
		return(
			<div>
				<h1 className="center-align truncate grey-text text-darken-4"> FENCES</h1>
				<div className="slider">
		    	<ul className="slides pagination">
			      <li>
			        <img 
			        src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w " 
			        href='one' />
			        <div className="caption center-align">
			        	<h2>VINYL</h2>
			        </div>
			      </li>

			      <li>
			        <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/553ab790e4b05ab385dc04b2/1429911445408/photo+2.JPG?format=2500w" href='two' />
			        <div className="caption center-align">
			        <h2>VINYL</h2>
			        </div>
			      </li>
			    
			      <li>
			        <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34684e4b0ddced61356c3/52b34693e4b0ab039835afd5/1422710368651/CIMG0188.JPG?format=2500w" href='three' />
			        <div className="caption center-align">
			        <h2>WOOD</h2>
			        </div>   
			      </li>
			     
			      <li>
			        <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34684e4b0ddced61356c3/52b346c7e4b0ab039835b050/1422710379755/CIMG0176.JPG?format=2500w" href='four' /> 
			        <div className="caption center-align">
			        <h2>WOOD</h2>
			        </div>
			      </li>
			      <li>
			        <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b349bfe4b0d40f9d02a7c2/52b349cfe4b0be429b3051df/1422710404760/DSCN0376.JPG?format=2500w" href='four' />
			        <div className="caption center-align">
			        <h2>CHAIN LINK</h2>
			        </div> 
			      </li>
			      <li>
			        <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b349bfe4b0d40f9d02a7c2/52b349ebe4b0be429b3051fe/1422710404744/DSCN0408.JPG?format=2500w" href='four' /> 
			        <div className="caption center-align">
			        <h2>CHAIN LINK</h2>
			        </div>
			      </li>
			      <li>
			        <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34b33e4b01176ccb30b88/52b34b4ee4b0c1e8721bb999/1422710392819/DSCN0403.JPG?format=2500w" href='four' /> 
			        <div className="caption center-align">
			        <h2>ORNAMENTAL IRON</h2>
			        </div>
			      </li>
			      <li>
			        <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34b33e4b01176ccb30b88/53c94b1fe4b017caa105e66e/1405700907032/photo+3.JPG?format=2500w" href='four' /> 
			        <div className="caption bottom-left">
			        <h2>ORNAMENTAL IRON</h2>
			        </div>
			      </li>
		    	</ul>
	    	</div>
	    </div>
		)
	}
}

export default Fences;