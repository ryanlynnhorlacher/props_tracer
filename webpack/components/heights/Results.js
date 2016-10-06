import React from 'react';

class Results extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    return(
      <div className="row">
        <div>
          <h3>Approximate Fence Distance:</h3>
          <p>{this.props.distance}</p>
        </div>
        <div>
          <h3>Fence Height:</h3>
          <p>{this.props.height}</p>
        </div>
        <div>
          <h3>Material Price Per Square Foot:</h3>
          <p>{material.pricePerFoot}</p>
        </div>
        <div>
          <h3>Approximate Gate Price:</h3>
          <p>{gatePrice}</p>
        </div>
        <div>
          <h3>Your Estimate:</h3>
          <p>{estimate}</p>
        </div>
      </div>
    )
  }



}

export default Results;
