import React, { Component } from 'react';
import {Link} from 'react-router';
import AddHeight from './AddHeight.js';
import EditHeight from './EditHeight.js';
import AddGate from './AddGate.js';
import EditGate from './EditGate.js';
import AddMaterial from './AddMaterial.js';
import EditMaterial from './EditMaterial.js';
 
class FenceEditor extends Component {
	constructor(props){
	super(props);
	this.displayMaterials = this.displayMaterials.bind(this);
	this.displayHeights = this.displayHeights.bind(this);
	this.displayGates = this.displayGates.bind(this);
	this.updateHeightList = this.updateHeightList.bind(this);
	this.updateGateList = this.updateGateList.bind(this);
	this.updateMaterialList = this.updateMaterialList.bind(this);
	this.addMaterial = this.addMaterial.bind(this);
	this.addHeight = this.addHeight.bind(this);
	this.addGate = this.addGate.bind(this);

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
			console.log(this.state.materials)
			console.log("/\-state \/-material.heights")
			console.log(material.heights)
			this.setState({materials: [ ...otherMaterials, material ] })
		}).fail(data =>{
			console.log('FAIL')
			console.log(data)
		})
	}

 	addGate(gate_price, width, style, matId) {
		$.ajax({
			url: '/api/v1//materials/${matId}/gates/',
			type: 'POST',
			dataType: 'JSON',
			data: { gate: { price, width, style }}
		}).done(gate => {
			console.log(gate)
			//this.setState({ })
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
			// this.setState({ materials: [...this.state.materials.slice(0, index), 
			//  	height, ...this.state.materials.slice(index + 1)] });
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
			this.setState({ materials: [...this.state.materials.slice(0, index), 
			 	gate, ...this.state.materials.slice(index + 1)] });
		}).fail(data =>{
			console.log(data)
		})
	}	

	displayMaterials() {
		let x = -1
		let mats = this.state.materials.map( mat => {
			x += 1
			return (
				<div key={mat.material} className='col s12 m5 card block text-bg material-editor'>
					<h4>{mat.material}</h4>
					<EditMaterial mat={mat} index={x} matId={mat.id} updateMaterialList={this.updateMaterialList} />
					<ul>
						{this.displayHeights(mat)}
						{this.displayGates(mat)}
					</ul>
					<div>
						<AddHeight matId={mat.id} addHeight={this.addHeight} />
						<AddGate matId={mat.id} addGate={this.addGate} />
						
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
						{height.name}ft - ${height.pricePerFoot}
						<EditHeight height={height} index={x} matId={material.id} updateHeightList={this.updateHeightList} /> 
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
						<li>Gate Price: {gate.price}</li>
						<li>Gate Width: {gate.width}</li>
						<li>Gate Style: {gate.style}</li>
						<EditGate gate={gate} index={x} matId={material.id} updateGateList={this.updateGateList} />
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
				<h3>Materials</h3>
				<AddMaterial addMaterial={this.addMaterial} />
				<div className="col s12">
					{ this.state.materials ? this.displayMaterials() : null}
				</div>
			</div>
		)
	}
}

export default FenceEditor;