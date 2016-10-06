import React, { Component } from 'react';

class CustomerInput extends Component {
  constructor(props) {
    super(props)
    this.createCustomer = this.createCustomer.bind(this);
  }

  // createCustomer(event, this.props.userId) {
  createCustomer(event) {
    event.preventDefault()
    let name = this.refs.name.value
    let email = this.refs.email.value
    let phoneNumber = this.refs.phoneNumber.value
    // this.props.addCustomer(name, email, phoneNumber, userId)
    this.refs.customerForm.reset()
  }

  render() {
    return (
      <div className="center">
        <h2>You're Almost Done!</h2>'
        <div className="text-bg">
          <h5 className="center"> Please enter your information to complete this estimate.</h5>
          <hr />
          <form ref="customerForm" onSubmit={ (event) => this.createCustomer(event) }>
            <h6>Full Name</h6>
            <input ref="Name" required placeholder="Full Name"/>
            <h6>Email Address</h6>
            <input type="email" required ref="email" placeholder="Email Address"/>
            <h6>Phone Number</h6>
            <input type="tel" ref="phoneNumber" required maxLength="9" placeholder="Phone Number"/>
            <div className="center">            
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CustomerInput;