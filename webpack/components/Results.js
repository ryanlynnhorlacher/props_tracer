import React, {Component} from 'react'

class Results extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <div>
          Total Fence:
          <input ref="fenceLength" type="text" value="" readonly />
          Total Gate:
          <input ref="gateLength" type="text" value="" readonly />
          Total Feet:
          <input ref="totalLength" type="text" value="" readonly />
          Fence Material:
          <input ref="fenceMaterial" type="text" value="" readonly />
          Fence Height:
          <input ref="fenceHeight" type="text" value="" readonly />
          Number Of Gates:
          <input  ref="numberOfGates" type="text" value="" readonly />

        </div>
      </div>
    )
  }
}
