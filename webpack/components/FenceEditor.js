import React, { Component } from 'react';

class FenceEditor extends Component {
	constructor(props){
	super(props);
	this.state = {height: 
									{id: null,
									material_id: null,
									name: null,
									price_per_foot: null }}
	this.displayFences = this.displayFences.bind(this);
	}

	componentWillMount() {
    $.ajax({
    	url: `api/v1/materials/${this.props.params.id}`,
    	type: 'GET',
    	dataType: 'JSON'
    }).done( fenceHeight => {
    	console.log(fenceHeight)
    	this.setState({ fenceHeight: { name: fenceHeight.height.name, 
    																 material_id: fenceHeight.height.materialId 
    																 id: fenceHeight.height.id 
    																 price_per_foot: fenceHeight.height.pricePerFoot}})
    	console.log(this.state)
    })fail(data => {
    	console.log(data)
    })
	},

	displayFences() {
		let fenceHeights = this.state.height.all
			return(
				<div key={`${fenceHeight.id}`}>
					<li>Fence Materal: { .materialId } </li>
					<li>Fence Height: { .materialName} </li>
					<li>Price Per Foot: { .pricePerFoot} </li>
					<br />
				</div>
			)
			return fenceheights
	}

	render() {
		return(
			<div>
				<h3>Available Fence Heights</h3>
				<ul>
					<li>{this.state.fenceHeight.name}</li>
				</ul>
				
			</div>
		)
	}

}

export default FenceEditor;

render() {
	return(
		<div>
			<h3>Customer Info</h3>
			<ul>
				<li>{this.state.customer.name}</li>
				<li>{this.state.customer.email}</li>
			</ul>
			<h4>Estimates</h4>
			<ul>
				{this.displayEstimates()}
			</ul>
		</div>
		)
}