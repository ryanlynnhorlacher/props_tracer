import React from 'react';

class Dashboard extends React.Component {
	constructor(props) {
		super(props)
		this.getData = this.getData.bind(this);
		this.state = {notContacted: null, makingDecision: null, custDeclined: null, dealsClosed: null }
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
			console.log('Success!');
			console.log(array);
			this.setState({
				notContacted: array[0],
				makingDecision: array[1],
				custDeclined: array[2],
				dealsClosed: array[3]
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
				<button className='btn col s4' 
					onClick={() => this.getData(this.refs.timeFrame.value)}>Refresh Dashboard</button>
				<div>
					Sales closed: {this.state.dealsClosed}
					<br />
					Customers not contaced: {this.state.notContacted}
					<br />
					Sales declined by customer: {this.state.custDeclined}
					<br />
					Customers making decision: {this.state.makingDecision}
				</div>
				<hr />
			</div>
		)
	}
}

export default Dashboard;