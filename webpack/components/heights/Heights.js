import React, { Component } from 'react'

class Heights extends Component {
  constructor(props){
    super(props);
    this.replaceHeightChoice = this.replaceHeightChoice.bind(this);
  }

  replaceHeightChoice(height){
    this.refs.heightChoice.text = height;
  }

  heightChoices() {
    let x = -1
      let heights = this.props.heights.map( height => {
        x += 1
        return(
          <li key={x}><a onClick={() => {this.replaceHeightChoice(height.name)}}>{height.name}</a></li>
        )
      })
      return heights
  }

	render() {
    console.log(this.props.heights)
		return(
			<div>
        <div className="col s4">
          <a className='dropdown-button btn' ref="heightChoice" data-activates='dropdown2'>Choose A Height</a>
          <ul id='dropdown2' ref="heightList" className='dropdown-content' >
              {this.props.heights ? this.heightChoices() : <li><a>Choose a material first</a></li> }
          </ul>
        </div>
			</div>
		)
	}

}
export default Heights;
