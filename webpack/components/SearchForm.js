import React, {Component} from 'react';


let timeoutID

class SearchForm extends Component {
	constructor(props) {
		super(props);
    this.search = this.search.bind(this);
    this.searchTimer = this.searchTimer.bind(this);
	}

  searchTimer() {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(this.search, 500);
  }

  search() {
    this.props.newSearch(this.refs.order.value, 
    this.refs.searchTerm.value, this.refs.category.value, this.refs.status.value)
  }

	render() {
		return(
			<div className='row'>

      <div className="input-field col s12 m4">
        <select className='browser-default' ref='status' onChange={ this.searchTimer }>
          <option value="" disabled>Estimate status</option>
          <option value="All">All</option>
          <option value="Not contacted">Not contacted</option>
          <option value="Making decision">Making decision</option>
          <option value="Customer declined">Customer declined</option>
          <option value="Deal closed">Deal closed</option>
        </select>
      </div>

        <div className="input-field col s12 m4">
          <select className='browser-default' ref='order' onChange={ this.searchTimer }>
            <option value="" disabled>Results order</option>
            <option value="Newest to Oldest">Newest to Oldest</option>
            <option value="Oldest to Newest">Oldest to Newest</option>
            <option value="A-Z">A-Z</option>
          </select>
        </div>

        <div className="input-field col s12 m4">
          <select className='browser-default' ref='category' onChange={ this.searchTimer }>
            <option value="" disabled>Search category</option>
            <option value="name">Name</option>
            <option value="fence_material">Fence material</option>
            <option value="location">Address</option>
          </select>
        </div>

				<input className="input-field col s12" onChange={ this.searchTimer }
          ref='searchTerm' placeholder='Enter search here' />
			</div>
		)
	}
}

	export default SearchForm;