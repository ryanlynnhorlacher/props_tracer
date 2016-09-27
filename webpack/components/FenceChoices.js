import React from 'react'

class FenceChoices extends React.Component {
  constructor(props){
    super(props);
    this.replaceMaterialChoice = this.replaceMaterialChoice.bind(this);

    this.state = { material: 'Choose The Material!'}
  }

  replaceMaterialChoice(material){
    this.setState({material}, () => {
      this.materialCase();
    });
  }

  materialCase(){
    switch (this.state.material) {
      case "Vinyl":
        return(
          <div>
            <a className='dropdown-button btn' ref="vinylHeight" data-activates='dropdown1'>{this.state.vinylHeight}</a>
            <ul id='dropdown1' ref="vinylHeights" className='dropdown-content' >
              <li><a ref='vinyl4ft' onClick={() => {this.replaceHeight(this.refs.vinyl4ft.text)}}>4 Ft</a></li>
              <li className="divider"></li>
              <li><a ref='vinyl6ft' onClick={() => {this.replaceHeight(this.refs.vinyl6ft.text)}}>6 Ft</a></li>
              <li className="divider"></li>
              <li><a ref='vinyl8ft' onClick={() => {this.replaceHeight(this.refs.vinyl8ft.text)}}>8 Ft</a></li>
            </ul>
          </div>
      )
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
