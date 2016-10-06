import React from 'react'
import Heights from './heights/Heights'
import Gates from './heights/Gates'
import Results from './heights/Results'

let stuff
class FenceChoices extends React.Component {
  constructor(props){
    super(props);
    this.materialChoices = this.materialChoices.bind(this);
    this.replaceMaterialChoice = this.replaceMaterialChoice.bind(this);
    // this.heightList = this.heightList.bind(this);
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
    this.setState.material = material
    // this.heightList()
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


  render(){
      return(
        <div className="row">
          <div className="col s4">
            <a className='dropdown-button btn' ref="materialChoice" data-activates='dropdown1'>Choose Material</a>
            <ul id='dropdown1' ref="materialList" className='dropdown-content' >
              { this.state.materials ? this.materialChoices() : null }
            </ul>
          </div>
          <Heights material={this.state.materials}/>
          <Gates gate={this.state.materials} />
        {/*  <Results /> */}
        </div>
      )
  }




  // heightList(){
  //   debugger
  //   return(
  //     <div>
  //       <a className='dropdown-button btn' ref="heightChoice" data-activates='dropdown2'>{ this.state.materials.material.height ? "Choose a Height" : null }</a>
  //       <ul id='dropdown2' ref="heightList" className='dropdown-content' >
  //         { this.state.materials.heights ? this.heightChoices() : null }
  //       </ul>
  //     </div>
  //   )
  // }


}

export default FenceChoices;




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
