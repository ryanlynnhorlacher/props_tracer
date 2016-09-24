import React from 'react'

class FenceChoices extends React.Component {
  constructor(props){
    super(props);
    this.replaceMaterialChoice = this.replaceMaterialChoice.bind(this);

    this.state = { material: 'Choose The Material!'}
  }

  replaceMaterialChoice(material){
    this.setState({material})
    switch (this.state.material) {
      case "Vinyl":
        console.log("vinyl");
        break;
      case "Wood":
        console.log("Wood");
        break;
      case "Iron":
        console.log("Iron");
        break;
      default:
        console.log("Its broken....");
    }
  };


  render(){

    return(
      <div>
        <a className='dropdown-button btn' ref="materialChoice" data-activates='dropdown1'>{this.state.material}</a>
        <ul id='dropdown1' ref="materialList" className='dropdown-content' >
          <li><a ref='vinyl' onClick={() => {this.replaceMaterialChoice(this.refs.vinyl.text)}}>Vinyl</a></li>
          <li className="divider"></li>
          <li><a ref='wood' onClick={() => {this.replaceMaterialChoice(this.refs.wood.text)}}>Wood</a></li>
          <li className="divider"></li>
          <li><a ref='iron' onClick={() => {this.replaceMaterialChoice(this.refs.iron.text)}}>Iron</a></li>
        </ul>



      </div>
    )
  }


}
 export default FenceChoices;
