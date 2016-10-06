import React, { Component } from 'react';

class CustomerInput extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props, displayForm: true, estimate: {} }
    this.contents = this.contents.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.createCustomer = this.createCustomer.bind(this);
  }

  changeDisplay(event) {
    event.preventDefault();
    this.setState({...this.props, displayForm: !this.state.displayForm});
  }

  // componentWillMount(this.props.estimId){
  //   $.ajax({
  //     url: `api/v1/estimates/${estimId}`,
  //     type: 'GET',
  //     dataType: 'JSON'
  //   }).done(newEstimate => {
  //     console.log(newEstimate)
  //     this.setState({ estimate: newEstimate})
  //   }).fail(data => {
  //     console.log(data)
  //   })
  // }

  // Above is the real version 
  // below is a testing version until the preceding components are finshed

  componentWillMount(){
    $.ajax({
      url: 'api/v1/estimates/4',
      type: 'GET',
      dataType: 'JSON'
    }).done(newEstimate => {
      console.log(newEstimate)
      this.setState({ estimate: newEstimate})
    }).fail(data => {
      console.log(data)
    })
  }

  addCustomer(name, email, phone, location, distance, 
    finalPrice, fenceMaterial, fenceHeight, gateCount, customerId) {
    $.ajax({
      url: '/api/v1/customers',
      type: 'POST',
      dataType: 'JSON',
      data: { customer: { name, email, phone }, estimate: {location, distance, 
        final_price: finalPrice, fence_material: fenceManterial, fence_height: fenceHeight, 
        gate_count: gateCount, customer_id: customer_id}
    }).done(customer => {
      this.setState({ newCustomer: customer})
    }).fail(data =>{
      console.log('FAIL')
      console.log(data)
    })
  }

  // createCustomer(event, this.props.userId) {
  createCustomer(event) {
    event.preventDefault()
    let name = this.refs.name.value
    let email = this.refs.email.value
    let phoneNumber = this.refs.phoneNumber.value
    this.addCustomer(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    // this.props.addCustomer(name, email, phoneNumber, userId)
    this.refs.customerForm.reset()
  }

  contents() {
    if(this.state.displayForm === true) {
      return (
        <div className="center">
          <h2>You're Almost Done!</h2>'
          <div className="text-bg">
            <h5 className="center"> Please enter your information to complete this estimate.</h5>
            <hr />
            <form ref="customerForm" onSubmit={ (event) => this.createCustomer(event), (event) => this.changeDisplay(event)}>
              <h6>Full Name</h6>
              <input ref="Name" required placeholder="Full Name"/>
              <h6>Email Address</h6>
              <input type="email" required ref="email" placeholder="Email Address"/>
              <h6>Phone Number</h6>
              <input type="tel" ref="phoneNumber" required maxLength="10" placeholder="Phone Number"/>
              <div className="center">            
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      )
   } else {
      return (
        <div className="center">
          <h1>Thank You for using PropTracer!</h1>
          <div className="card text-bg round">
            <h5>You will be recieving an Email shortly and you can expect a call from one of our representatives within a week.</h5>
          </div>
          <div className="card text-bg round">
              <h2>Your Estimate</h2>
              <hr />
              <h3>Location: </h3>
              <h4>{this.state.estimate.location}</h4>
              <h3>Total Fence Distance: </h3>
              <h4>{this.state.estimate.distance} Feet</h4>
              <h3>Estimated Fence Price: </h3>
              <h4>${this.state.estimate.final_price}</h4>
              <h3>Fence Type: </h3>
              <h4>{this.state.estimate.fence_material}</h4>
              <h3>Fence Height: </h3>
              <h4>{this.state.estimate.fence_height} Feet</h4>
              <h3>Number of Gates: </h3>
              <h4>{this.state.estimate.gate_count}</h4>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      this.contents()

    )
  }
}
export default CustomerInput;