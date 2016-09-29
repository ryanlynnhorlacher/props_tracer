import React, { Component } from 'react';
import {Link} from 'react-router';
import AddHeight from './AddHeight.js';
import EditHeight from './EditHeight.js';
import AddGate from './AddGate.js';
import EditGate from './EditGate.js';
import AddMaterial from './AddMaterial.js';

class FenceEditor extends Component {
	constructor(props){
	super(props);
	this.displayMaterials = this.displayMaterials.bind(this);
	this.displayHeights = this.displayHeights.bind(this);
	this.displayGates = this.displayGates.bind(this);
	this.updateHeightList = this.updateHeightList.bind(this);
	this.updateGateList = this.updateGateList.bind(this);
	this.updateMaterialList = this.updateGateList.bind(this);
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
	}

	updateHeightList(name) {
		$.ajax({
			url: '/api/v1/materials/',
			type: 'POST',
			dataType: 'JSON',
			data: { material: { name } }
		}).done(materials => {
			this.setState({ materials: [...materials.materials]})
			console.log(this.state.materials)
		}).fail(data =>{
			console.log(data)
		})
	}	


	updateHeightList(matId, name, price_per_foot) {
		$.ajax({
			url: '/api/v1/materials/`${matId}`/heights',
			type: 'POST',
			dataType: 'JSON',
			data: { height: { name, price_per_foot } }
		}).done(materials => {
			this.setState({ materials: [...materials.materials]})
		}).fail(data =>{
			console.log(data)
		})
	}	

	updateGateList(matId, gate_price, width, style) {
		$.ajax({
			url: '/api/v1/materials/`${matId}`/gateTypes',
			type: 'POST',
			dataType: 'JSON',
			data: { gate_types: { gate_price, width, style } }
		}).done(materials => {
			this.setState({ materials: [...materials.materials]})
		}).fail(data =>{
			console.log(data)
		})
	}


	displayMaterials() {
		let mats = this.state.materials.map( mat => {
			return (
				<div key={mat.material} className='col s12 m5 card block text-bg material-editor'>
					<h4>{mat.material}</h4>
					<ul>
						{this.displayHeights(mat)}
						{this.displayGates(mat)}
					</ul>
					<div>
						<AddHeight className='btn' matId={mat.id} updateHeightList={this.updateHeightList} />
						<EditHeight className='btn' matId={mat.id} updateHeightList={this.updateHeightList} />
						<AddGate className='btn' matId={mat.id} updateGateList={this.updateGateList} />
						<EditGate className='btn' matId={mat.id} updateGateList={this.updateGateList} />
					</div>
				</div>
			)
		})
		return mats
	}

	displayHeights(material) {
		let heights = material.heights.map( height => {
			return(
				<li key={height.id}>
					{height.name}ft - ${height.pricePerFoot} 
				</li>
			)
		})
		return heights
	}

	displayGates(material) {
		let gates = material.gateTypes.map( gate => {
			return(
				<ul key={gate.id}>
					<hr />
					<li>Gate Price: {gate.price}</li>
					<li>Gate Width: {gate.width}</li>
					<li>Gate Style: {gate.style}</li>
				</ul>
			)
		})
		return gates
	}

	render() {
		return(
			<div className="center">
				<h3>Materials</h3>
				<AddMaterial className='btn' updateMaterialList={this.updateMaterialList} />
				<div className="col s12">
					{ this.state.materials ? this.displayMaterials() : null}
				</div>
			</div>
		)
	}

}

export default FenceEditor;