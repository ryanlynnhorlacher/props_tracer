import React from 'react'
import VinylHeights from './heights/Heights'

let stuff
class FenceChoices extends React.Component {
  constructor(props){
    super(props);
    this.materialChoices = this.materialChoices.bind(this);
    this.replaceMaterialChoice = this.replaceMaterialChoice.bind(this);
    this.state = { materials: null}
  }

  componentWillMount(){
    $.ajax({
      url: '/api/v1/materials',
      type: 'GET',
      dataType: 'JSON'
    }).done(materials => {
      this.setState({ materials: [...materials.materials] })
    }).fail(data => {
      console.log(data);
    })
  }

  componentDidMount(){
    $('.dropdown-button').dropdown({
     inDuration: 300,
     outDuration: 225,
     constrain_width: false, // Does not change width of dropdown to that of the activator
     hover: false, // Activate on hover
     gutter: 0, // Spacing from edge
     belowOrigin: false, // Displays dropdown below the button
     alignment: 'left' // Displays dropdown with edge aligned to the left of button
   });
  }

  replaceMaterialChoice(material){
    this.refs.materialChoice.text = material;
    // materialCase();
  }


  materialChoices() {
    let mats = this.state.materials.map( mat => {
      return(
        <li key={mat.material}><a ref={mat.material} onClick={() => {this.replaceMaterialChoice(mat.material)}}>{mat.material}</a></li>
      )
    })
    return mats
  }



  // materialCase(){
  //   this.state.dropdownDisplay = this.state.material;
  //
  //   switch (this.state.material) {
  //     case "Vinyl":
  //       // <Heights />
  //       console.log("vinyl");
  //
  //       break;
  //     case "Wood":
  //       console.log("Wood");
  //       break;
  //     case "Iron":
  //       console.log("Iron");
  //       break;
  //     default:
  //       console.log("Its broken....");
  //   }
  // };



  render(){
      return(
        <div>
          <a className='dropdown-button btn' ref="materialChoice" data-activates='dropdown1'>Choose Material</a>
          <ul id='dropdown1' ref="materialList" className='dropdown-content' >
            { this.state.materials ? this.materialChoices() : null }
          </ul>
        </div>
      )
  }

}

export default FenceChoices;
