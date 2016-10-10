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
            This tool provides ESTIMATES not QUOTES. <br />
            Therefore these ESTIMATES are not legally binding.
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
          <div className="center">
            <button className="btn-flat">
              <Link to='estimate' className="center-align" activeClassName={linkClass}>Get Started!</Link>
            </button>
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default LandingPage;
