import React from 'react'

class FenceChoices extends React.Component {
  constructor(props){
    super(props);
  }

  output(){
    <h1>`${this.refs.materialChoice}`</h1>
  }

  render(){
    return(

      <a className='dropdown-button btn' ref="materialChoice" data-activates='dropdown1'>Choose The Material!</a>
        <ul id='dropdown1' class='dropdown-content'>
          <li><a key="vinyl">Vinyl</a></li>
          <li className="divider"></li>
          <li><a key="wood">Wood</a></li>
          <li className="divider"></li>
          <li><a key="iron">Iron</a></li>key
        </ul>

    )
    output();
  }


}
