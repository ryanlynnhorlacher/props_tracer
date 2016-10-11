import React from 'react'


class MapAddressForm extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
	 $('select').material_select();     
	}

	render() {
		return(
			<form onSubmit={ (e) => this.props.handleFindAddressSubmit(e, this.refs.street.value, 
				this.refs.city.value, this.refs.state.value) }>
				<div className='row'>
					<div className='input-field col s12 m4' >
						<input ref='street' required placeholder='Street' />
					</div>
					<div className='input-field col s12 m4' >
						<input ref='city' required placeholder='City' />
					</div>
					<div className="input-field col s12 m4">
        		<select ref='state' >
		          <option value="Utah">Utah</option>
		          <option value="Nevada">Nevada</option>
		          <option value="Idaho">Idaho</option>
        		</select>
      		</div>
				</div>
					<input type='submit' value='Find location' className='btn-flat col s3 m6' style={{marginBottom: '5px'}} />
			</form>

		)
	}
}
export default MapAddressForm;