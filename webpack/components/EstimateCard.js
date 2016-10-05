import React from 'react';

class EstimateCard extends React.Component {
	constructor(props) {
		super(props)
		this.showStatusUpdate = this.showStatusUpdate.bind(this);
		this.editButton = this.editButton.bind(this);
		this.updateStatus = this.updateStatus.bind(this);
		this.state = { editStatus: false, id: this.props.id, estimate: {...this.props.estimate}}
	}

	showStatusUpdate() {
		if(this.state.editStatus === true) {
			return(
				<div className="col s3">
				  <select defaultValue={this.state.estimate.status} className='browser-default' ref='status'>
				    <option value="" disabled>Estimate status</option>
				    <option value="Not contacted">Not contacted</option>
				    <option value="Making decision">Making decision</option>
				    <option value="Customer declined">Customer declined</option>
				    <option value="Deal closed">Deal closed</option>
				  </select>
				</div>
			)
		} else {
			return(
				<span className='col s3'>{this.state.estimate.status}</span>
			)
		}
	}

	editButton() {
		if(this.state.editStatus === false) {
			return(
				<div>
					<button className='btn-small btn-floating yellow darken-2' 
						onClick={ () => this.setState({editStatus: !this.state.editStatus}) }>
						<i className="material-icons">mode_edit</i></button>
				</div>
			)
		} else {
			return(
				<div>
					<button className='btn-small btn-floating green' 
						onClick={ this.updateStatus }><i className="material-icons">done</i></button>
					<button className='btn-small btn-floating red' 
						onClick={ () => this.setState({editStatus: !this.state.editStatus}) }>
						<i className="material-icons">not_interested</i></button>
				</div>
			)
		}
	}

	updateStatus() {
		$.ajax({
			url: `/api/v1/estimates/${this.state.estimate.id}`,
			type: 'PUT',
			dataType: 'JSON',
			data: { estimate: {status: this.refs.status.value} }
		}).done( estimate => {
			this.setState({ estimate: { ...estimate }, editStatus: false });
		}).fail( data => {
			console.log(data);
		})
	}

	render() {
		let estimate = this.state.estimate
		return(
			<div className='card'>
				<div className='row'>
					<h5 className='col s2'>{estimate.location}</h5>
					<button style={{marginRight: '15px'}} className='btn-small btn-floating red right' 
						onClick={ () => this.props.delete(this.state.estimate.id) }>
						<i className="material-icons">delete</i></button>
				</div>
				<ul>
					<li>Estimated Price: ${estimate.finalPrice}</li>
					<li>Gate Count: {estimate.gateCount}</li>
					<li>Date Submitted: {estimate.dateSubmitted.slice(0, 10)}</li>
					<li>Fence Material: {estimate.fenceMaterial}</li>
					<br/>
					<li className='row'><div className='col s1'>Status:</div> { this.showStatusUpdate() } 
						{this.editButton()}
					</li>
				</ul>
			</div>
		)
	}
}

export default EstimateCard;