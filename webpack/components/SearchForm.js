import React, {Component} from 'react';


let timeoutID

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.replaceCategoryChoice = this.replaceCategoryChoice.bind(this);
		this.replaceOrderChoice = this.replaceOrderChoice.bind(this);
    this.search = this.search.bind(this);
    this.searchTimer = this.searchTimer.bind(this);
	}

	replaceCategoryChoice(category){
	   this.refs.categoryChoice.text = category;
  }

  replaceOrderChoice(order){
  	this.refs.orderChoice.text = order;
  }

    componentDidMount(){
    $('.dropdown-button').dropdown({
     inDuration: 300,
     outDuration: 225,
     constrain_width: false, // Does not change width of dropdown to that of the activator
     hover: false, // Activate on hover
     gutter: 0, // Spacing from edge
     belowOrigin: true, // Displays dropdown below the button
     alignment: 'left' // Displays dropdown with edge aligned to the left of button
   });
  }

  searchTimer() {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(this.search, 500);

    
  }

  search() {
    console.log('search called')
    this.props.newSearch(this.refs.order.value, 
    this.refs.searchTerm.value, this.refs.category.value, this.refs.status.value)
  }

  componentDidMount() {
   $('select').material_select();     
  }

	render() {
		return(
			<div className='row'>

      <div className="input-field col s12 m4">
        <select ref='status' onChange={ this.searchTimer }>
          <option value="" disabled>Select estimate status</option>
          <option value="All">All</option>
          <option value="Not contacted">Not contacted</option>
          <option value="Making decision">Making decision</option>
          <option value="Customer declined">Customer declined</option>
          <option value="Deal closed">Deal closed</option>
        </select>
        <label>Choose Status</label>
      </div>

        <div className="input-field col s12 m4">
          <select ref='order' onChange={ this.searchTimer }>
            <option value="" disabled>Select order of results</option>
            <option value="Newest to Oldest">Newest to Oldest</option>
            <option value="Oldest to Newest">Oldest to Newest</option>
            <option value="A-Z">A-Z</option>
          </select>
          <label>Choose Order</label>
        </div>

        <div className="input-field col s12 m4">
          <select ref='category' onChange={ this.searchTimer }>
            <option value="" disabled>Choose search category</option>
            <option value="name">Name</option>
            <option value="fence_material">Fence material</option>
            <option value="location">Address</option>
          </select>
          <label>Choose Search Category</label>
        </div>

				<input className="input-field col s12" onChange={ this.searchTimer }
          ref='searchTerm' placeholder='Enter search here' />
			</div>
		)
	}
}

	export default SearchForm;