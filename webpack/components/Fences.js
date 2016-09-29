import React, { Component } from 'react';
import chainLink from '../images/chainlink.png';
class Fences extends Component {
	constructor(props) {
		super(props);
	}

	
	componentDidMount() {
		$('.slider').slider({full_width: true});
		$('.materialboxed').materialbox();
		$('.collapsible').collapsible({
      accordion : false 
    });
    $('.modal-trigger-chain-single-gate').leanModal();
    $('.modal-trigger-chain-double-gate').leanModal();


	}
	

	render() {
		return(
			<div>
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
			
				<h1 className="center-align truncate grey-text text-darken-4"> FENCES</h1>
				
				<ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header">VINYL</div>
			      	<div className="collapsible-body">
				      	<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348cbe4b01dead0d3209f/1422710371898/DSCN0339.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
				      	<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
				      	<p>CUSTOM FENCE’S PREMIUM VINYL FENCING IS A SOPHISTICATED COMBINATION OF TRADITION AND TECHNOLOGY.  CONSTRUCTED OF HIGH-TECH POLYVINYL CHLORIDE COMPOUNDS, VINYL FENCING IS VIRTUALLY MAINTENANCE-FREE.  YOU’LL NEVER HAVE TO WORRY ABOUT PAINTING, ROTTING, TERMITES, CORROSION, OR RUST.  VINYL FENCING WILL RETAIN ITS BEAUTIFUL APPEARANCE, ENHANCING THE VALUE OF YOUR PROPERTY FOR YEARS TO COME. VINYL FENCE COMES IN MANY STYLES, SIZES, AND COLOR. BY CHOOSING FROM A VARIETY OF POST CAPS, YOU CAN FURTHER CUSTOMIZE YOUR FENCE.</p>
				      	<a className="waves-effect waves-light btn modal-trigger-chain-single-gate" href="#vinyl-gate">Single Gate</a>

			      	 	<div id="vinyl-gate" className="modal">
						    	<div className="modal-content">
							      <h4>Gate 1</h4>
							      <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
				      			<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
							   		<p></p>
							   	</div>
						    </div>
						  <a className="waves-effect waves-light btn modal-trigger-chain-double-gate" style={{float: 'right'}} href="#vinyl-double-gate">Double Gate</a>
			      	 <div id="vinyl-double-gate" className="modal">
						    <div className="modal-content">
						      <h4>Gate 2</h4>
						      <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
			      			<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
						   		<p></p>
						    </div>
						  </div>
			      </div>
			    </li>
			    <li>
			      <div className="collapsible-header"><i className="material-icons">filter_drama</i>WOOD</div>
			      	<div className="collapsible-body">
				      	<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34684e4b0ddced61356c3/52b346c7e4b0ab039835b050/1422710379755/CIMG0176.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
				      	<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34684e4b0ddced61356c3/52b34693e4b0ab039835afd5/1422710368651/CIMG0188.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
				      	<p>THE CONSISTENT PERFORMANCE AND AVAILABILITY OF OUR WOOD FENCING SYSTEMS OFFERS A VAST ARRAY OF DESIGN OPTIONS. THE LOW-DENSITY CEDAR, REDWOOD, PINE, AND CYPRESS HARDWOODS USED IN OUR FENCES ARE LESS LIKELY TO WARP, CHECK, OR CHANGE DIMENSION.</p>
				      	<a className="waves-effect waves-light btn modal-trigger-chain-single-gate" href="#wood-single-gate">Single Gate</a>
			      	 	<div id="wood-single-gate" className="modal">
							    <div className="modal-content">
							      <h4>Gate 1</h4>
							      <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34684e4b0ddced61356c3/52b346c7e4b0ab039835b050/1422710379755/CIMG0176.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
				      			<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34684e4b0ddced61356c3/52b34693e4b0ab039835afd5/1422710368651/CIMG0188.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
							   		<p></p>
						    	</div>
						    </div>
						  <a className="waves-effect waves-light btn modal-trigger-chain-double-gate" style={{float: 'right'}} href="#wood-double-gate">Double Gate</a>

			      	<div id="wood-double-gate" className="modal">
						    <div className="modal-content">
						      <h4>Gate 2</h4>
						      <img href="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  height='400px' width='400px' /> 
			      			<img href="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w" height='400px' width='400px' /> 
						   		<p></p>
						    </div>
						  </div>
			    	</div>
			    </li>

			    <li>
			      <div className="collapsible-header card-panel grey lighten-2 center"><h3>Chain Link</h3></div>
			      	<div className="collapsible-body">
				      	<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b349bfe4b0d40f9d02a7c2/52b349ebe4b0be429b3051fe/1422710404744/DSCN0408.JPG?format=2500w" style={{border:'0px', margin:'0px', float:'leff', height:'400px', width:'340px'}} /> 
				      	<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b349bfe4b0d40f9d02a7c2/52b349cfe4b0be429b3051df/1422710404760/DSCN0376.JPG?format=2500w" style={{border:'0px', margin:'0px', float:'right', height:'400px', width:'340px'}} /> 
				      	<p>KNOWN FOR ITS STRENGTH AND DURABILITY, CHAIN-LINK IS PERHAPS THE MOST ECONOMICAL TYPE OF FENCING AVAILABLE. WE LET YOU CHOOSE FROM A WIDE RANGE OF WEIGHTS (OR GAUGES) AND COATINGS. SO IT’S EASY TO ENHANCE YOUR LANDSCAPING WITH A FENCE THAT BLENDS NATURALLY WITH TREES, SHRUBS, AND BUSHES.</p>
				      	<a className="waves-effect waves-light btn modal-trigger-chain-single-gate" href="#chain-single-gate">Single Gate</a>
			      	 	<div id="chain-single-gate" className="modal">
						    	<div className="modal-content">
							      <h4>Gate 1</h4>
							      <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
				      			<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'right', height:'400px', width:'400px'}}  /> 
							   		<p></p>
						    	</div>
						  	</div>
						  	<a className="waves-effect waves-light btn modal-trigger-chain-double-gate" style={{float: 'right'}} href="#chain-double-gate">Double Gate</a>
			      	<div id="chain-double-gate" className="modal">
						    <div className="modal-content">
						      <h4>Gate 2</h4>
						      <img src={ chainLink } style={{border:'0px', margin:'15px', float:'leff', height:'300px', width:'200px'}} />  
			      			<img src={ chainLink } style={{border:'0px', margin:'15px', float:'right', height:'300px', width:'200px'}}  /> 
						   		<p>this is a the double gate they are nice</p>
						    </div>
						  </div>
			    	</div>
			    </li>


			    <li>
			      <div className="collapsible-header"><i className="material-icons">filter_drama</i>ORNAMENTAL IRON</div>
			      	<div className="collapsible-body">
				      	<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34b33e4b01176ccb30b88/53c94b1fe4b017caa105e66e/1405700907032/photo+3.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
				      	<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34b33e4b01176ccb30b88/52b34b44e4b0c1e8721bb97d/1422710388982/DSCN0416.JPG?format=2500w" style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
				      	<p>MONUMENTAL IRON WORKS®, CLASSIC PREMIER™ IRON SERIES, MONTAGE®, ECHELON™, COLONIAL ALUMINUM®, REMINGTON RESIDENTIAL FENCE™, JERITH ALUMINUM, AND FORTRESS VERSAI CONSTITUTE THE FINEST SELECTION OF ORNAMENTAL FENCE SYSTEMS.</p>
				      	<a className="waves-effect waves-light btn modal-trigger-chain-single-gate" href="#ornamental_iron_single-gate">Single Gate</a>
			      		<div id="ornamental_iron_single-gate" className="modal">
							    <div className="modal-content">
							      <h4>Gate 1</h4>
							      <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34b33e4b01176ccb30b88/53c94b1fe4b017caa105e66e/1405700907032/photo+3.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
				      			<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34b33e4b01176ccb30b88/52b34b44e4b0c1e8721bb97d/1422710388982/DSCN0416.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
							   		<p></p>
							    </div>
						  	</div>
						  <a className="waves-effect waves-light btn modal-trigger-chain-double-gate" style={{float: 'right'}} href="#chain-double-gate">Double Gate</a>
			      	<div id="chain-double-gate" className="modal">
						    <div className="modal-content">
						      <h4>Gate 2</h4>
						      <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
			      			<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
						   		<p></p>
						    </div>
						  </div>
			    	</div>
			    </li>
			  </ul>
	   </div>
		)
	}
}


export default Fences;