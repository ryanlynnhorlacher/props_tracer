import React, { Component } from 'react';
import { Link } from 'react-router';



const styles = {
	map: {height: '400px', width: '800px'}
}
let coords = []
let x = 0
let handler
let polyline
let startPoint

class Map extends Component {
	constructor(props) {
		super(props);
		this.calcLength = this.calcLength.bind(this);
		this.state = { length: 0 }
		let fences = []
	}

	drawLines(e) {
      	coords.push( { lat: e.latLng.lat(), lng: e.latLng.lng() } )
		if (polyline)
			polyline[0].setMap(null)
		if (startPoint) {
			polyline = handler.addPolylines(
		    [coords], { strokeColor: '#FF0000'}
		  	) 
		}
	  	else {
	  		startPoint = handler.addMarkers([
	  			{lat: e.latLng.lat(), lng: e.latLng.lng() }
	  		])
	  	}
	}

	undoLine() {
		polyline[0].setMap(null)
		coords.pop()
		if (coords.length === 0 ) {
			startPoint[0].setMap(null)
			startPoint = null
		} else {
			polyline = handler.addPolylines(
	    	[coords], { strokeColor: '#FF0000'})
		}
	}

	componentDidMount() {
		handler = Gmaps.build('Google');
		let map = handler.buildMap({
		    provider: {
		      disableDefaultUI: true,
		      center: {lat: 40.610805, lng: -111.930653},
    			zoom: 20
		      // pass in other Google Maps API options here
		    },
		    internal: {
		      id: 'map'
		    }
		},() => { handler.getMap().addListener('click', (e) => {
	      	this.drawLines(e)
			})
		});
	}

	distance(lat1, lon1, lat2, lon2, unit) {
		let radlat1 = Math.PI * lat1/180
		let radlat2 = Math.PI * lat2/180
		let theta = lon1 - lon2
		let radtheta = Math.PI * theta/180
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		dist = Math.acos(dist)
		dist = dist * 180/Math.PI
		dist = dist * 60 * 1.1515
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist
	}

	calcLength() {
		let length = 0
		for(let i = 0; i < coords.length - 1; i++) {
			length += this.distance(coords[i].lat, coords[i].lng, coords[i + 1].lat, coords[i + 1].lng, 'K')
		}
		length = length * 3280.84
		this.setState( {length} )
	}

	render() {
		return(
			<div>

			<div>
				<h2 className='center'>HOW TO USE:</h2>
			</div>

			<div className='card col s12 center text-bg round'>
				Spicy jalapeno bacon ipsum dolor amet kevin biltong picanha shankle. 
				Brisket ham hock shank chuck. Prosciutto salami drumstick, bresaola 
				pork chop doner turkey pork loin pork belly brisket porchetta sausage
				 kevin. Andouille ham hock rump boudin biltong sirloin short loin chicken
				  turducken. Turkey ribeye beef, pork t-bone venison burgdoggen kielbasa 
				  pastrami jerky filet mignon. Shank porchetta jowl landjaeger cow sirloin 
				  alcatra doner bresaola ground round picanha pancetta.
			</div>

				<div className="center light-gray round map-pad">
					<div className="map-div" style={styles.map}>
	  					<div id="map" style={styles.map}></div>
					</div>
	  					<button onClick={this.calcLength}>Calc</button>
	  					<button onClick={() => this.undoLine()}>Undo</button>
	  					<div ref='displayLength'>{this.state.length}</div>
				</div>
			
			</div>
		)
	}

}
export default Map;



