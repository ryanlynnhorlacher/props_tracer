import React, {Component} from 'react'

class EstimateSummary extends Component {
	constructor(props) {
		super(props);
	}

componentWillMount() {
	$.ajax({
		url: '/estimate/1',
		type: 'GET',
		dataType: 'JSON'
	}).done( data => {
		console.log(data)
	}).fail( data => {
		console.log(data)
	})
}

}

export default EstimateSummary;