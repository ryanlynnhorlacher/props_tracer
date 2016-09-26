import React, { Component } from 'react';
import { Link } from 'react-router';



const styles = {
	map: {height: '400px', width: '800px'}
}
let coords = []
let x = 0
let handler
let polyline
let polylines = []

class Map extends Component {
	constructor(props) {
		super(props);
		this.calcLength = this.calcLength.bind(this);
		this.state = { length: 0 }
	}

	drawLines(e, handler, coords) {
		if (polyline) {
		polyline[0].setMap() }
      	coords.push( { lat: e.latLng.lat(), lng: e.latLng.lng() } )
		polyline = handler.addPolylines(
	    [coords], { strokeColor: '#FF0000'}
	  	)
	}

	undoLine(handler, coords) {
		polyline[0].setMap(null)
		polylines.pop();
	    coords.pop();
		polyline = handler.addPolylines(
	    	[coords], { strokeColor: '#FF0000'}
	    )
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
	      	this.drawLines(e, handler, coords)
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
			<div style={styles.map}>
  				<div id="map" style={styles.map}></div>
  				<button onClick={this.calcLength}>Calc</button>
  				<button onClick={() => this.undoLine(handler, coords, polylines)}>Undo</button>
  				<div ref='displayLength'>{this.state.length}</div>
			</div>
		)
	}

}
export default Map;



