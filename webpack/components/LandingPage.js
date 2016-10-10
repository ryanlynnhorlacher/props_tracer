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
        <div className="card col s12 text-bg flow-text round">
          <h2 className="center red-text">DISCLAIMER</h2>
          <hr />
          <h4 className="center red-text">
            This tool provides QUOTES not ESTIMATES.<br />
            Therefor these QUOTES are not legally binding.
          </h4>
          <hr />
          <p>
            <h5 className="center underline">THIS IS FOR RESIDENTIAL CUSTOMERS WITH FLAT PROPERTIES.</h5>
            If you have an elevation change on your property the price will be more than the quoted price.
            <br />
            <br />
            If your fence line has obstructions, i.e. shrubberies, large rocks, trees, ETC. the price will be more than the quoted price.
            <hr />
            <h5 className="center">By using this website you are agreeing to these terms.</h5>
          </p>
        </div>
        <br />
        <div className='card col s12 special-align text-bg flow-text round'>
          <h3 className="center">How to Use:</h3>
          <ol>
            <li>Zoom Out/In to find the place you want your fence.</li>
            <li>Click once on the map to drop the red marker.</li>
            <li>Click again to draw the first line from the marker to the second click point.</li>
            <li>Keep clicking until you have drawn all the lines of your fence.</li>
            <li>If you mess up hit the Undo line button.</li>
            <li>Once your lines are all in the right spot hit <br />the green "Finished Setting Fence!" button.</li>
            <li>You can start over by hitting the red "Start Over" button.</li>

            <li>Next, select the Material, Fence Height, and Gate that you want on your fence.</li>
            <li>Last fill out your Personal Information and hit Submit.</li>
            <li>The Estimate Details will show up once its complete.</li>
          </ol>
          <div className="center">
            <button className="btn-flat">
              <Link to='estimate' className="center-align" activeClassName={linkClass}>Get Started!</Link>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
