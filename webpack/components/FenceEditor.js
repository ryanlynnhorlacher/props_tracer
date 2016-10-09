import React, { Component } from 'react';
import {Link} from 'react-router';

import EditMaterial from './EditMaterial.js';
import EditHeight from './EditHeight.js';
import EditGate from './EditGate.js';

import AddMaterial from './AddMaterial.js';
import AddHeight from './AddHeight.js';
import AddGate from './AddGate.js';

import DeleteMaterial from './DeleteMaterial.js'
import DeleteHeight from './DeleteHeight.js'
import DeleteGate from './DeleteGate.js'

class FenceEditor extends Component {
	constructor(props){
	super(props);
	this.displayMaterials = this.displayMaterials.bind(this);
	this.displayHeights = this.displayHeights.bind(this);
	this.displayGates = this.displayGates.bind(this);

	this.updateMaterialList = this.updateMaterialList.bind(this);
	this.updateHeightList = this.updateHeightList.bind(this);
	this.updateGateList = this.updateGateList.bind(this);

	this.addMaterial = this.addMaterial.bind(this);
	this.addHeight = this.addHeight.bind(this);
	this.addGate = this.addGate.bind(this);

	this.deleteMaterial = this.deleteMaterial.bind(this);
	this.deleteHeight = this.deleteHeight.bind(this);
	this.deleteGate = this.deleteGate.bind(this)

	this.state = { materials: null }
	}

	componentWillMount(){
		$.ajax({
			url: 'api/v1/materials/',
			type: 'GET',
			dataType: 'JSON'
		}).done(materials => {
			this.setState({ materials: [...materials.materials]})
		}).fail(data => {
			console.log(data)
		})
	}

	addMaterial(name) {
		$.ajax({
			url: '/api/v1/materials/',
			type: 'POST',
			dataType: 'JSON',
			data: { material: { name }}
		}).done(material => {
			let newMaterial = { ...material, heights: [], gateTypes: [] }
			this.setState({ materials: [...this.state.materials, newMaterial]})
		}).fail(data =>{
			console.log(data)
		})
	}	

	addHeight(name, pricePerFoot, matId) { 
		$.ajax({
			url: `/api/v1/materials/${matId}/heights/`,
			type: 'POST',
			dataType: 'JSON',
			data: { height: { name, price_per_foot: pricePerFoot }}
		}).done(height => {
			let material = this.state.materials.find(m => m.id === matId)
			material.heights.push(height);
			let otherMaterials = this.state.materials.filter(m => m.id !== matId)
			this.setState({materials: [ ...otherMaterials, material ] })
		}).fail(data =>{
			console.log('FAIL')
			console.log(data)
		})
	}

 	addGate(price, width, style, matId) {
		$.ajax({
			url: `/api/v1//materials/${matId}/gate_types/`,
			type: 'POST',
			dataType: 'JSON',
			data: { gate_type: { gate_price: price, width, style }}
		}).done(gate => {
			let material = this.state.materials.find(m => m.id === matId)
			material.gateTypes.push(gate);
			let otherMaterials = this.state.materials.filter(m => m.id !== matId)
			this.setState({materials: [ ...otherMaterials, material ] })
		}).fail(data =>{
			console.log(data)
		})
	}
 
	updateMaterialList(id, name, index) {
		$.ajax({
			url: `/api/v1/materials/${id}`,
			type: 'PUT',
			dataType: 'JSON',
			data: { material: { name }}
		}).done(material => {
			 this.setState({ materials: [...this.state.materials.slice(0, index), 
			 	material, ...this.state.materials.slice(index + 1)] });
		}).fail(data => {
			console.log(data);
		})
	}	

	updateHeightList(matId, heightId, name, price_per_foot, index) {
		$.ajax({
			url: `/api/v1/heights/${heightId}`,
			type: 'PUT',
			dataType: 'JSON',
			data: { height: {name, price_per_foot}}
		}).done(height => {
			let material = this.state.materials.find(m => m.id === matId)
			material.heights[index] = height
			let otherMaterials = this.state.materials.filter(m => m.id !== matId)
			this.setState({materials: [ ...otherMaterials, material ] })
		}).fail(data =>{
			console.log(data)
		})
	}	

	updateGateList(matId, gateId, gate_price, width, style, index) {
		$.ajax({
			url: `/api/v1/gate_types/${gateId}`,
			type: 'PUT',
			dataType: 'JSON',
			data: { gate_type: {gate_price, width, style}}
		}).done(gate => {
			let material = this.state.materials.find(m => m.id === matId)
			material.gateTypes[index] = gate
			let otherMaterials = this.state.materials.filter(m => m.id !== matId)
			this.setState({materials: [ ...otherMaterials, material ] })
		}).fail(data =>{
			console.log(data)
		})
	}	

	deleteMaterial(id, index) {
		$.ajax({
			url: `/api/v1/materials/${id}`,
			type: 'DELETE',
			dataType: 'JSON',
		}).done( material => {
			this.setState({ materials: [...this.state.materials.slice(0, index), ...this.state.materials.slice(index + 1)] });
		}).fail(data => {
			console.log(data)
		})
	}

	deleteHeight(matId, hId) {
		$.ajax({
			url: `/api/v1/heights/${hId}`,
			type: 'DELETE',
			dataType: 'JSON',
		}).done( height => {
			let material = this.state.materials.find(m => m.id === matId)
			let matIndex = this.state.materials.indexOf(material)
			let otherHeights = material.heights.filter(h => h.id !== hId)
			material.heights = otherHeights
			let otherMaterials = this.state.materials.filter(m => m.id !== matId)
			otherMaterials.splice(matIndex, 0, material)
			this.setState({materials: [ ...otherMaterials ] })
		}).fail(data => {
			console.log(data)
		})
	}

	deleteGate(matId, gId) {
		$.ajax({
			url: `/api/v1/gate_types/${gId}`,
			type: 'DELETE',
			dataType: 'JSON',
		}).done( gate => {
			let material = this.state.materials.find(m => m.id === matId)
			let matIndex = this.state.materials.indexOf(material)
			let otherGates = material.gateTypes.filter(h => h.id !== gId)
			material.gateTypes = otherGates
			let otherMaterials = this.state.materials.filter(m => m.id !== matId)
			otherMaterials.splice(matIndex, 0, material)
			this.setState({materials: [ ...otherMaterials ] })
		}).fail(data => {
			console.log(data)
		})
	}

	displayMaterials() {
		let x = -1
		let mats = this.state.materials.map( mat => {
			x += 1
			return (
				<div key={mat.id} className='col s12 card block round text-bg material-editor'>
					<h2>{mat.material}</h2>
					<EditMaterial mat={mat} index={x} matId={mat.id} updateMaterialList={this.updateMaterialList} />
					<ul>
						{this.displayHeights(mat)}
						{this.displayGates(mat)}
					</ul>
					<div>
						<AddHeight matId={mat.id} addHeight={this.addHeight} />
						<AddGate matId={mat.id} addGate={this.addGate} />
						<DeleteMaterial mat={mat} index={x} matId={mat.id} deleteMaterial={this.deleteMaterial} />
					</div>
				</div>
			)
		})
		return mats
	}

	displayHeights(material) {
		let x = -1
		if (material.heights && material.heights.length > 0) {
			let heights = material.heights.map( height => {
				x += 1
				return(
					<li key={height.id}>
						<hr />
						<h5>{height.name}ft - ${height.pricePerFoot}</h5>
						<EditHeight height={height} index={x} matId={material.id} updateHeightList={this.updateHeightList} /> 
						<DeleteHeight height={height} heightId={height.id} matId={material.id} deleteHeight={this.deleteHeight} />
					</li>
				)
			})
			return heights
		}	else {
			return(null)
		}
	}

	displayGates(material) {
		let x = -1
		if ( material.gateTypes && material.gateTypes.length > 0) {
			let gates = material.gateTypes.map( gate => {
				x += 1
				return(
					<ul key={gate.id}>
						<hr />
						<li><h5>Gate Price: ${gate.price}</h5></li>
						<li><h5>Gate Width: {gate.width}ft</h5></li>
						<li><h5>Gate Style: {gate.style} Drive</h5></li>
						<EditGate gate={gate} index={x} matId={material.id} updateGateList={this.updateGateList} />
						<DeleteGate gateId={gate.id} matId={material.id} deleteGate={this.deleteGate} />
					</ul>
				)
			})	
			return gates
		} else {
			return(null)
		}
	}

	render() {
		return(
			<div className="center">
				<h1>Materials</h1>
				<AddMaterial addMaterial={this.addMaterial} />
				<div className="row">
					{ this.state.materials ? this.displayMaterials() : null}
				</div>
			</div>
		)
	}
}

export default FenceEditor;