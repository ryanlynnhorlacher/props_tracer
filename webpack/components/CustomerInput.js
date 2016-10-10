import React, { Component } from 'react';

class CustomerInput extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props, displayForm: true, estimate: {} }
    this.changeDisplay = this.changeDisplay.bind(this);
    this.createCustomer = this.createCustomer.bind(this);
    this.callPropsFunction = this.callPropsFunction.bind(this);
  }

  changeDisplay(event) {
    event.preventDefault();
    this.setState({...this.props, displayForm: !this.state.displayForm});
  }

  createCustomer(event) {
    event.preventDefault()
    let name = this.refs.name.value
    let email = this.refs.email.value
    let phone = this.refs.phoneNumber.value
    let address = this.refs.address.value
    this.props.setCustomerInfo(name, address, email, phone)
  }

  callPropsFunction(event) {
    event.preventDefault()
    this.props.addCustomer()
    this.props.showFinalEstimate()
  }

  render() {
    return (
      <div className="center">
        <h2>You're Almost Done!</h2>'
        <div className="text-bg round">
          <h5 className="center"> Please enter your information to complete this estimate.</h5>
          <hr />
          <form ref="customerForm" onChange={ (event) => this.createCustomer(event) } 
              onSubmit={ (event) => this.callPropsFunction(event) }>
            <h6>Full Name</h6>
            <input ref="name" required placeholder="Full Name"/>
            <h6>Address</h6>
            <input required ref="address" placeholder="Address"/>
            <h6>Email</h6>
            <input type="email" required ref="email" placeholder="Email"/>
            <h6>Phone Number</h6>
            <input type="tel" ref="phoneNumber" required maxLength="10" placeholder="Phone Number"/>
            <div className="center">            
              <button className="btn-flat" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default CustomerInput;


