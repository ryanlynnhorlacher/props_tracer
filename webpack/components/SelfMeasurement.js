import React from 'react';


class SelfMeasurement extends React.Component {
	constructor(props) {
		super(props)

		this.checkForInput = this.checkForInput.bind(this);
	}
	componentDidMount() {
	    this.refs.userDistance.focus();
	}

	checkForInput() {
		if(this.refs.userDistance.value) {
			if(parseInt(this.refs.userDistance.value) > 0)
				this.props.setDistance(this.refs.userDistance.value)
			else
				alert('Please enter a number larger than 0')
		} else
			alert('Please enter your fence distance')
	}

	render() {
		return(
			<div>
				<label>Enter measurement in feet here</label>
				<input ref='userDistance' type='number' />
				<button className='btn green'
				onClick={ this.checkForInput }>Submit</button>
			</div>
		)
	}
}

export default SelfMeasurement;