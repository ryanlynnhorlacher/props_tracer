import React, { Component } from 'react'

class Heights extends Component {
  constructor(props){
    super(props);
    this.replaceHeightChoice = this.replaceHeightChoice.bind(this);
  }

  replaceHeightChoice(height){
    this.refs.heightChoice.text = height;
    let newHeight = this.props.heights.find(h => h.name === height)
    this.props.addHeight(newHeight)
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
		return(
			<div>
        <div className="col s4">
          <a className='dropdown-button btn' ref="heightChoice" data-activates='dropdown2'>Choose A Height</a>
          <ul id='dropdown2' ref="heightList" className='dropdown-content' >
              {this.props.heights ? this.heightChoices() : <li><a>No heights for chosen material</a></li> }
          </ul>
        </div>
			</div>
		)
	}

}
export default Heights;
