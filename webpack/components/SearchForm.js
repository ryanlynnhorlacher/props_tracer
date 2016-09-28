import React, {Component} from 'react';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.replaceCategoryChoice = this.replaceCategoryChoice.bind(this);
		this.replaceOrderChoice = this.replaceOrderChoice.bind(this);
		this.state = this.state = { customers: [] }
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
    				data-activates='dropdown2'>Choose Material</a>
      		<ul id='dropdown2' ref="categoryList" className='dropdown-content' >
       			<li ref='name' 
       				onClick={() => this.replaceCategoryChoice(this.refs.name.textContent)}>Name</li>
       			<li ref='material' 
       				onClick={() => this.replaceCategoryChoice(this.refs.material.textContent)}>Fence material</li>
       			<li ref='address' 
       				onClick={() => this.replaceCategoryChoice(this.refs.address.textContent)}>Address</li>
      		</ul>
        </div>
				<input ref='searchTerm' placeholder='Search term' />
				<button onClick={ () => this.props.newSearch(this.refs.order.value, 
					this.refs.searchTerm.value, this.refs.categoryChoice.textContent)}
					className='btn'>Search</button>
			</div>
		)
	}
}

	export default SearchForm;