import React, { Component } from 'react'

class Heights extends Component {
  constructor(props){
    super(props);

    this.replaceHeightChoice = this.replaceHeightChoice.bind(this);
    this.state = this.props
  }



  replaceHeightChoice(height){
    this.refs.heightChoice.text = height;
  }

  heightChoices() {
    if (this.state.material) {
      let heights = this.state.material.map( map => {
        return(
          <li key={map.material}><a onClick={() => {this.replaceHeightChoice(map.height)}}>{map.height}</a></li>
        )
      })
      return heights
    }
  }

	render() {
		return(
			<div>
        <div className="col s4">
          <a className='dropdown-button btn' ref="heightChoice" data-activates='dropdown2'>Choose A Height</a>
          <ul id='dropdown2' ref="heightList" className='dropdown-content' >
             {this.state.material ? this.heightChoices() : null }
              {this.heightChoices()}
          </ul>
        </div>
			</div>
		)
	}

}
export default Heights;
