import React, { Component } from 'react';

class FinalEstimate extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props, estimate: {} }
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

  render() {
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

export default FinalEstimate;