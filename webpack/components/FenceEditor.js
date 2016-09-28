import React, { Component } from 'react';
import {Link} from 'react-router'

class FenceEditor extends Component {
	constructor(props){
	super(props);
	this.displayMaterials = this.displayMaterials.bind(this);
	this.displayHeights = this.displayHeights.bind(this);
	this.state = { materials: null }
	}

	componentWillMount(){
		$.ajax({
			url: 'api/v1/materials/',
			type: 'GET',
			dataType: 'JSON'
		}).done(materials => {
			this.setState({ materials: [...materials.materials]})
			console.log(this.state)
		}).fail(data => {
			console.log(data)
		})
		console.log(this.state)
	}

	displayMaterials() {
		let mats = this.state.materials.map( mat => {
			return (
				<div key={mat.material} className='card'>
					<h4>{mat.material}</h4>
					<ul>
						{this.displayHeights(mat)}
					</ul>
				</div>
			)
		})
		return mats
	}

	displayHeights(material) {
		console.log(material)
		let heights = material.heights.map( height => {
			return(
				<li key={height.id}>{height.name}<Link className='btn'/></li>
			)
		})
		return heights
	}
			// return(
			// 		<div className="block text-bg contactbox" key={mat.material}>
			// 		<ul>
			// 			<li>Material Name: {mat.material} </li>
			// 			<li>Material Heights: </li>
			// 				<li>Size: {mat.heights[0].name}ft - Price/Foot: ${mat.heights[0].pricePerFoot}</li>
			// 				<li>Size: {mat.heights[1].name}ft - Price/Foot: ${mat.heights[1].pricePerFoot}</li>
			// 				<li>Size: {mat.heights[2].name}ft - Price/Foot: ${mat.heights[2].pricePerFoot}</li>
			// 				<li>Size: {mat.heights[3].name}ft - Price/Foot: ${mat.heights[3].pricePerFoot}</li>
			// 			<br />
			// 		</ul>
			// 		</div>
			// )


	render() {
		return(
			<div className="center">
				<h3>Materials</h3>
				{ this.state.materials ? this.displayMaterials() : null}
			</div>
		)
	}

}

export default FenceEditor;