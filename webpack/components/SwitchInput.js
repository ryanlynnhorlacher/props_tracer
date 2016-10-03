import React from 'react';

class SwitchInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {edit: false}

	}

	render () {
		return(
			if(this.state.edit === false) {
				<hr />
				<span ref='inputField' onChange={() => this.props.updateState(this.refs.inputField)}>
				this.props.value</span>
				<hr />
			} else {
				<input defaultValue={this.props.value}/>
			}
		)
	}
}



export default SwitchInput;