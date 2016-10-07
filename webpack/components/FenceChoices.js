import React from 'react'
import Heights from './heights/Heights'
import Gates from './heights/Gates'

let stuff
class FenceChoices extends React.Component {
  constructor(props){
    super(props);
    this.materialChoices = this.materialChoices.bind(this);
    this.replaceMaterialChoice = this.replaceMaterialChoice.bind(this);
    this.heightsForRender = this.heightsForRender.bind(this);
    this.addHeight = this.addHeight.bind(this);
    this.addGate = this.addGate.bind(this);
    this.setStateAbove = this.setStateAbove.bind(this);
    // this.heightList = this.heightList.bind(this);
    this.state = { materials: null, materialChoice: {}, heightChoice: {}, gateChoice: {} }
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
    let materialChoice = this.state.materials.find(m => m.material === material)

    this.setState({materialChoice: materialChoice})
  }


  materialChoices() {
    let x = -1
    let mats = this.state.materials.map( mat => {
      x += 1
      return(
        <li key={x}><a ref={mat.material} onClick={() => {this.replaceMaterialChoice(mat.material)}}>{mat.material}</a></li>
      )
    })
    return mats
  }

  heightsForRender() {
    if(this.state.choice)
      return(
        <Heights heights={this.state.choice.heights}/>
      )
    else
      return null
  }

  addHeight(height){
    this.setState({heightChoice: height})
  }

  addGate(gate) {
    this.setStateAbove(gate)
  }

  setStateAbove(gate) {
    let height = this.state.heightChoice
    console.log([gate].length)
    this.props.setEstimateInfo(height.pricePerFoot, this.state.materialChoice.material, height.name, [gate].length, gate.price)
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
          <Heights addHeight={ this.addHeight } heights={this.state.materialChoice.heights}/>
          <Gates addGate={ this.addGate } gates={this.state.materialChoice.gateTypes} />
        </div>
      )
  }
}

export default FenceChoices;
