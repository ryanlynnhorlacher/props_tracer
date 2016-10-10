import React, { Component } from 'react';
import { Link } from 'react-router';



const styles = {
	map: {height: '400px', width: '70vw'}
}
let coords = []
let x = 0
let handler
let polyline
let startPoint
let zoom = 12

class Map extends Component {
	constructor(props) {
		super(props);
		this.calcLength = this.calcLength.bind(this);
		this.calcLengthButton = this.calcLengthButton.bind(this);
		this.enableDrawing = this.enableDrawing.bind(this);
		this.state = { length: 0, drawing: true }
	}

	drawLines(e) {
		if (polyline)
			handler.removeMarker(polyline[0])
    		coords.push( { lat: e.latLng.lat(), lng: e.latLng.lng() } )
		if (coords.count > 0)
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
		handler.removeMarker(polyline[0])
		coords.pop()
		if (coords.length === 0 ) {
			handler.removeMarker(startPoint[0])
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
		      center: {lat: 40.7704502, lng: -111.8941115},
    			zoom: zoom,
					zoomControl: true,
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

	calcLengthButton() {
		if(this.state.length === 0) {
			return(
				<div>
					<button className="btn-flat btn green" onClick={this.calcLength}>Finshed Setting Fence!</button>
					<button className="btn-flat btn yellow" onClick={() => this.undoLine()}>Undo Last Point</button>
				</div>
			)
		} else {
			return(
				<div>
					<button className="btn-flat btn red" onClick={this.enableDrawing}>Start Over</button>
				</div>
			)
		}
	}

	enableDrawing() {
		if(handler) {
			if(polyline) {
				handler.removeMarker(polyline[0])
				polyline = null
			}
			if(startPoint) {
				handler.removeMarker(startPoint[0])
				startPoint = null
			}
			coords = []
			handler.getMap().addListener('click', (e) => {
	      this.drawLines(e)})
			this.setState({length: 0})
		}
	}

	calcLength() {
		let length = 0
		for(let i = 0; i < coords.length - 1; i++) {
			length += this.distance(coords[i].lat, coords[i].lng, coords[i + 1].lat, coords[i + 1].lng, 'K')
		}
		length = length * 3280.84
		if(length > 0)
			google.maps.event.clearListeners(handler.getMap(), 'click');
		this.props.setDistance(length.toFixed(0))
		console.log(length)
		this.setState({length})
	}

	render() {
		return(
			<div>

				<div>
					<h2 className='center'>HOW TO USE:</h2>
				</div>

				<div className='card col s12 left-align text-bg flow-text round'>
					<ul className='browser-default'>
						<li>Zoom Out/In to find the place you want your fence.</li>
						<li>Click once on the map to drop the red marker.</li>
						<li>Click again to draw the first line from the marker to the second click point.</li>
						<li>Keep clicking until you have drawn all the lines of your fence.</li>
						<li>If you mess up hit the Undo line button.</li>
						<li>Once your lines are all in the right spot hit <br />the green "Finished Setting Fence!" button.</li>
						<li>You can start over by hitting the red "Start Over" button.</li>

						<li>Next, select the Material, Fence Height, and Gate that you want on your fence.</li>
						<li>View examples of our fences {<a target="blank" href='/fences'>HERE</a>}</li>
						<li>Last fill out your Personal Information and hit Submit.</li>

						<li>The Estimate Details will show up once its complete.</li>
					</ul>
				</div>

				<div className="center light-gray round map-pad">
					<div className="map-div" style={styles.map}>
	  					<div id="map" style={styles.map}></div>
					</div>
	  					{ this.calcLengthButton() }
				</div>
			</div>
		)
	}

}
export default Map;
