import React, { Component } from 'react';
import chainLink from '../images/chainlink.png';
import chainLink2 from '../images/chainlink2.png';
import chainGate from '../images/chaingate.png';
import chainGate2 from '../images/chaingate2.png';
import fence from '../images/fence.png';
import vGate from '../images/vgate.png';
import vGate2 from '../images/vgate2.png';
import singlev from '../images/singlev.png';
import ogate from '../images/ogate.png';
import ofence from '../images/ofence.png';
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
			        src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348fee4b01dead0d320e0/1422710375986/6ft+White+Privacy.jpg?format=2500w " 
			        href='one' />
			        <div className="caption center-align">
			        	<h2>VINYL</h2>
			        </div>
			      </li>

			      <li>
			        <img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348d9e4b01dead0d320b5/1422710376111/DSCN0335.JPG?format=2500w" href='two' />
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
			        <div className="caption center-align">
			        	<h2>ORNAMENTAL IRON</h2>
			        </div>
			      </li>
		    	</ul>
	    	</div>
			
				<h1 className="center-align truncate grey-text text-darken-4" style={{textDecoration:'underline'}}>FENCES</h1>
				
				<ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header waves-effect waves-red cardpanel center" style={{textDecoration:'underline'}}><h3>VINYL</h3></div>
			      	<div className="collapsible-body">
			      		<div className='row'>
			      			<div className='col s12 m6'>
						      	<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348cbe4b01dead0d3209f/1422710371898/DSCN0339.JPG?format=2500w"  style={{border:'0px', margin:'0px', height:'auto', width:'100%'}}  /> 
					      	</div>
					      	<div className='col s12 m6'>
						      	<img  className="right" src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  style={{border:'0px', marginLeft: '', height:'auto', width:'100%'}} />
						      </div>
				      	</div>
				      	<p>PREMIUM VINYL FENCING IS A SOPHISTICATED COMBINATION OF TRADITION AND TECHNOLOGY.  CONSTRUCTED OF HIGH-TECH POLYVINYL CHLORIDE COMPOUNDS, VINYL FENCING IS VIRTUALLY MAINTENANCE-FREE.  YOU’LL NEVER HAVE TO WORRY ABOUT PAINTING, ROTTING, TERMITES, CORROSION, OR RUST.  VINYL FENCING WILL RETAIN ITS BEAUTIFUL APPEARANCE, ENHANCING THE VALUE OF YOUR PROPERTY FOR YEARS TO COME. VINYL FENCE COMES IN MANY STYLES, SIZES, AND COLOR. BY CHOOSING FROM A VARIETY OF POST CAPS, YOU CAN FURTHER CUSTOMIZE YOUR FENCE.</p>
				      		<div className='row' >
				      			<a className="colasible-btn modal-trigger-chain-single-gate left" style={{ marginLeft: "30px"}} href="#vinyl-gate">Single Gate</a>
						  			<a className="colasible-btn modal-trigger-chain-single-gate right" style={{ marginRight: "30px"}} href="#vinyl-double-gate">Double Gate</a>
			      	 		</div>
			      	 	<div id="vinyl-gate" className="modal">
						    	<div className="modal-content">
							      <h4>Gate 1</h4>
							      <img src={ singlev }  style={{border:'20px', margin:'17px', float:'left', height:'400px', width:'400px'}}  /> 
				      			<img src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/553ab790e4b05ab385dc04b2/1429911445408/photo+2.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'left', height:'400px', width:'400px'}}  /> 
							   		<p></p>
							   	</div>
						    </div>
			      	<div id="vinyl-double-gate" className="modal">
						    <div className="modal-content">
						      <h4>Gate 2</h4>
						      <img src={ vGate }  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
			      			<img src={ vGate2 }  style={{border:'20px', margin:'17px', float:'leff', height:'400px', width:'400px'}}  /> 
						   		<p></p>
						    </div>
						  </div>
			      </div>
			    </li>
			    <li>
			      <div className="collapsible-header waves-effect waves-red card-panel center" style={{textDecoration:'underline'}}><h3>WOOD</h3></div>
			      	<div className="collapsible-body">
			      		<div className='row'>
			      			<div className='col s12 m6'>
						      	<img className="responsive-img" src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34684e4b0ddced61356c3/52b346c7e4b0ab039835b050/1422710379755/CIMG0176.JPG?format=2500w"  style={{border:'0px', margin:'0px', height:'auto', width:'350px'}} /> 
						      </div>
						      <div className='col s12 m6'>
						      	<img className="responsive-img" src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34684e4b0ddced61356c3/52b34693e4b0ab039835afd5/1422710368651/CIMG0188.JPG?format=2500w"  style={{border:'0px', marginLeft:'0px', height:'auto', width:'350px'}}  /> 
						      </div>
						     </div>
				      	<p>CONSISTENT PERFORMANCE AND AVAILABILITY OF OUR WOOD FENCING SYSTEMS OFFERS A VAST ARRAY OF DESIGN OPTIONS. THE LOW-DENSITY CEDAR, REDWOOD, PINE, AND CYPRESS HARDWOODS USED IN OUR FENCES ARE LESS LIKELY TO WARP, CHECK, OR CHANGE DIMENSION.</p>
					      	<div className='row' >
						      	<a className="colasible-btn modal-trigger-chain-single-gate left" style={{ marginLeft: "30px" }} href="#wood-single-gate">Single Gate</a>
								  	<a className="colasible-btn modal-trigger-chain-single-gate right" style={{ marginRight: "30px" }} href="#wood-double-gate">Double Gate</a>
				      	 	</div>
			      	 	<div id="wood-single-gate" className="modal">
							    <div className="modal-content">
							      <h4>Gate 1</h4>
							      <img className="responsive-img" src="http://adamsfence.com/wp-content/uploads/2010/02/woodfence1.jpg"  style={{border:'20px', margin:'30px', float:'leff', height:'400px', width:'autopx'}}  /> 
				      			<img className="responsive-img" src="http://www.drawhome.com/wp-content/uploads/2016/03/Innovative-Back-Yard-with-Green-Grass-Space-and-Natural-Wooden-Fence-and-Gates-Designs-beside-Cozy-House-and-Big-Tree.jpg"  style={{border:'0px', marginLeft: '', height:'400px', width:'autopx'}}  /> 
							   		<p></p>
						    	</div>
						    </div>

			      	<div id="wood-double-gate" className="modal">
						    <div className="modal-content">
						      <h4>Gate 2</h4>
						      <img className="responsive-img" src="http://st.hzcdn.com/simgs/773142750234195e_4-6080/traditional-exterior.jpg"  height='400px' width='400px' /> 
			      			<img className="responsive-img" src="http://img.endmassincarceration.org/2016/07/25/how-to-build-wood-fence-gate-s-ffbb8afb52f44e73.jpg" height='400px' width='400px' /> 
						   		<p></p>
						    </div>
						  </div>
			    	</div>
			    </li>

			    <li>
			      <div className="collapsible-header waves-effect waves-red card-panel center" style={{textDecoration:'underline'}}><h3>Chain Link</h3></div>
			      	<div className="collapsible-body">
			      		<div className='row'>
			      			<div className='col s12 m6'>
				      			<img className="responsive-img" src={ fence } style={{border:'0px', margin:'0px', height:'310px', width:'auto'}}  /> 
				      		</div>
				      		<div className='col s12 m6'>
				      			<img className="responsive-img" src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b349bfe4b0d40f9d02a7c2/52b349cfe4b0be429b3051df/1422710404760/DSCN0376.JPG?format=2500w" style={{border:'0px', margin:'0px', height:'310px', width:'auto'}}  /> 
				      		</div>
				      	</div>
				      	<p>KNOWN FOR ITS STRENGTH AND DURABILITY, CHAIN-LINK IS PERHAPS THE MOST ECONOMICAL TYPE OF FENCING AVAILABLE. WE LET YOU CHOOSE FROM A WIDE RANGE OF WEIGHTS (OR GAUGES) AND COATINGS. SO IT’S EASY TO ENHANCE YOUR LANDSCAPING WITH A FENCE THAT BLENDS NATURALLY WITH TREES, SHRUBS, AND BUSHES.</p>
				      	<div className='row' >
					      	<a className="colasible-btn modal-trigger-chain-single-gate left" style={{ marginLeft: "30px" }} href="#chain-single-gate">Single Gate</a>
							  	<a className="colasible-btn modal-trigger-chain-single-gate right" style={{ marginRight: "30px" }} href="#chain-double-gate">Double Gate</a>
			      	 	</div>
			      	 	<div id="chain-single-gate" className="modal">
						    	<div className="modal-content">
							      <h4>Gate 1</h4>
							      <img src={ chainGate }  style={{border:'0px', margin:'15px', float:'left', height:'300px', width:'200px'}}  /> 
				      			<img src={ chainGate2 }  style={{border:'0px', margin:'15px', float:'right', height:'300px', width:'200px'}}  /> 
							   		<p></p>
						    	</div>
						  	</div>
			      	<div id="chain-double-gate" className="modal">
						    <div className="modal-content">
						      <h4>Gate 2</h4>
						      <img src={ chainLink } style={{border:'0px', margin:'15px', float:'leff', height:'300px', width:'200px'}} />  
			      			<img src={ chainLink2 } style={{border:'0px', margin:'15px', float:'right', height:'300px', width:'200px'}}  /> 
						    </div>
						  </div>
			    	</div>
			    </li>


			    <li>
			      <div className="collapsible-header waves-effect waves-red card-panel center" style={{textDecoration:'underline'}}><h3>ORNAMENTAL IRON</h3></div>
			      	<div className="collapsible-body">
			      		<div className='row'>
			      			<div className='col s12 m6'>
				      			<img className="responsive-img" src={ ofence }  style={{border:'0px', margin:'0px', height:'275px', width:'450px'}}  /> 
				      		</div>
				      		<div className='col s12 m6'>
				      			<img className="responsive-img" src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34b33e4b01176ccb30b88/52b34b44e4b0c1e8721bb97d/1422710388982/DSCN0416.JPG?format=2500w" style={{border:'0px', margin:'0px', height:'275px', width:'450px'}}  /> 
				      		</div>
					      		<p>MONUMENTAL IRON WORKS®, CLASSIC PREMIER™ IRON SERIES, MONTAGE®, ECHELON™, COLONIAL ALUMINUM®, REMINGTON RESIDENTIAL FENCE™, JERITH ALUMINUM, AND FORTRESS VERSAI CONSTITUTE THE FINEST SELECTION OF ORNAMENTAL FENCE SYSTEMS.</p>
						      <div className='row'>
						      	<a className="colasible-btn modal-trigger-chain-single-gate left" style={{ marginLeft: "30px" }} href="#ornamental_iron_single-gate">Single Gate</a>
								  	<a className="colasible-btn modal-trigger-chain-single-gate right" style={{ marginRight: "30px" }} href="#ornamental_iron-double-gate">Double Gate</a>
					      	</div>	
				      		<div id="ornamental_iron_single-gate" className="modal">
								    <div className="modal-content">
								      <h4>Gate 1</h4>
								      <img className="responsive-img" src={ ogate }  style={{border:'20px', margin:'17px', float:'leff', height:'autopx', width:'400px'}}  /> 
					      			<img className="responsive-img" src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b34b33e4b01176ccb30b88/52b34b44e4b0c1e8721bb97d/1422710388982/DSCN0416.JPG?format=2500w"  style={{border:'20px', margin:'17px', float:'leff', height:'autopx', width:'400px'}}  /> 
								   		<p></p>
								    </div>
							  	</div>
					      	<div id="ornamental_iron-double-gate" className="modal">
								    <div className="modal-content">
								      <h4>Gate 2</h4>
								      <img className="responsive-img" src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  style={{border:'20px', margin:'17px', height:'autopx', width:'400px'}}  /> 
					      			<img className="responsive-img" src="https://static1.squarespace.com/static/52b1dad7e4b0a1c813fceb66/52b348b6e4b01abea06d496a/52b348e6e4b01dead0d320c1/1422710392910/DSCN0252.JPG?format=2500w"  style={{border:'20px', margin:'17px', height:'autopx', width:'400px'}}  /> 
								   		<p></p>
								    </div>
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