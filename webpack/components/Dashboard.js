import React from 'react';
import Chart from './Chart'

class Dashboard extends React.Component {
	constructor(props) {
		super(props)
		this.getData = this.getData.bind(this);
		this.state = { statuses:{ notContacted: null, makingDecision: null, 
			custDeclined: null, dealsClosed: null } } 
	}

	componentWillMount() {
	  this.getData(30)    
	}

	getData(time) {
		$.ajax({
		 	url: `/api/v1/customers/dashboard?time=${time}`,
		 	type: 'GET',
		 	dataType: 'JSON'
		}).done( array => {
			this.setState({ statuses: {
					notContacted: array[0],
					makingDecision: array[1],
					custDeclined: array[2],
					dealsClosed: array[3]
				}
			})
			console.log(this.state);
		}).fail( data => {
			console.log(data);
		})
	}



	render() {
		return(
			<div>
				<h3 className="center">Customer Reports</h3>
				<label>Reporting days</label>
				<input className='col s8'ref='timeFrame' defaultValue='30' />
				<button className='btn-flat col s4' 
					onClick={() => this.getData(this.refs.timeFrame.value)}>Refresh Dashboard</button>
				<div>
					<Chart className='center-align' statuses={this.state.statuses}/>
				</div>
				<hr />
			</div>
		)
	}
}

export default Dashboard;