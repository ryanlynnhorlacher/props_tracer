import React, { Component } from 'react';

class FinalEstimate extends Component {
  constructor(props) {
    super(props)
    this.state = { estimate: {...this.props.finalEstimateInfo, gateType: this.props.gateType } }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="center">
        <h1>Thank You for using PropTracer!</h1>
        <div className="card text-bg round">
          <h5>You will be recieving a call from one of our representatives within a week.</h5>
        </div>
        <div className="card text-bg round">
          <h2>Your Estimate</h2>
          <hr />
          <h3>Location: </h3>
          <h4>{this.state.estimate.location}</h4>
          <h3>Total Fence Distance: </h3>
          <h4>{this.state.estimate.distance.toFixed(0)} Feet</h4>
          <h3>Estimated Fence Price: </h3>
          <h4>${this.state.estimate.finalPrice.toFixed(2)}</h4>
          <h3>Fence Type: </h3>
          <h4>{this.state.estimate.fenceMaterial}</h4>
          <h3>Fence Height: </h3>
          <h4>{this.state.estimate.fenceHeight} Feet</h4>
          <h3>Gate Type: </h3>
          <h4>{this.state.estimate.gateType}</h4>
        </div>
      </div>
    )
  }
}

export default FinalEstimate;
