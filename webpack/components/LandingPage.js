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
          <h2 className="center">Welcome to PropTracer!</h2>
          <hr />
          <h4 className="center">
            PropTracer allows you to see an estimate instantly! <br />
          </h4>
          <hr />
          <h6 className="center underline">THIS TOOL IS OPTIMIZED FOR RESIDENTIAL CUSTOMERS WITH FLAT PROPERTIES.</h6>
            <br />
          <ul>
          <li className='center'>Elevation changes, obstructions, or landscaping may increase the price of your PropTracer estimate.</li>
          </ul>
            <hr />
          <h5 className="center">By using this website you are agreeing to these terms.</h5>
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
