import React, { Component } from 'react'
import logoLarge from '../images/logoLarge.png';
import { Link, IndexLink } from 'react-router'
import ReactDOM from 'react-dom'


let linkClass = 'red'

class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
	}

  render() {
    return(
      <div>
        <div className="center card round light-gray">
          <img src={logoLarge} />
        </div>
        <div className="text-bg card round center">
          <h3>How to Use:</h3>
          <div className="special-align">
            <ol>
              <h5><li>Search for your property on the map</li></h5>
              <h5><li>Plot out where you want the fence</li></h5>

                <h5 className="red-text">⚠⚠⚠You must click TWICE before the line will show up.⚠⚠⚠</h5>

              <h5><li>Determine what material you want</li></h5>
              <h5><li>Determine how many gates you want</li></h5>
              <h5><li>Determine the types of gates you want</li></h5>
              <h5><li>Go through all of the extras</li></h5>
              <h5><li>Get your estimate!</li></h5>
            </ol>
          </div>
          <br />
          <button className="btn-flat">
            <Link to='estimate' activeClassName={linkClass}>Get Started!</Link>
          </button>
        </div>
      </div>
    )
  }
}

export default LandingPage;
