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
    this.props.newSearch(this.refs.orderChoice.textContent, 
    this.refs.searchTerm.value, this.refs.categoryChoice.textContent)
  }

	render() {
		return(
			<div>

				<div>
    			<a className='dropdown-button btn' ref="orderChoice" 
    				data-activates='dropdown1'>Choose Order</a>
      		<ul id='dropdown1' ref="orderList" className='dropdown-content' >
       			<li ref='newestOldest' 
       				onClick={() => this.replaceOrderChoice(this.refs.newestOldest.textContent)}>Newest to Oldest</li>
       			<li ref='oldestNewest' 
       				onClick={() => this.replaceOrderChoice(this.refs.oldestNewest.textContent)}>Oldest to Newest</li>
       			<li ref='AtoZ' 
       				onClick={() => this.replaceOrderChoice(this.refs.AtoZ.textContent)}>A-Z</li>
      		</ul>
        </div>
				
				<div>
    			<a className='dropdown-button btn' ref="categoryChoice" 
    				data-activates='dropdown2'>Choose Category</a>
      		<ul id='dropdown2' ref="categoryList" className='dropdown-content' >
       			<li ref='name' 
       				onClick={() => this.replaceCategoryChoice(this.refs.name.textContent, () => {this.searchTimer})}>Name</li>
       			<li ref='material' 
       				onClick={() => this.replaceCategoryChoice(this.refs.material.textContent)}>Fence material</li>
       			<li ref='address' 
       				onClick={() => this.replaceCategoryChoice(this.refs.address.textContent)}>Address</li>
      		</ul>
        </div>
				<input onChange={ this.searchTimer }
          ref='searchTerm' placeholder='Search term' />
			</div>
		)
	}
}

	export default SearchForm;