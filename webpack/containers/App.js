import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import {loggedIn, logout } from '../components/auth/actions';

class App extends React.Component {

	componentWillMount() {
		let userId = localStorage.getItem('userId');
		let apiKey = localStorage.getItem('apiKey');

		if (!this.props.auth && apiKey)
			this.props.dispatch(loggedIn(userId, apiKey))
		else
			this.props.dispatch(logout())
	}

	render() {
		return (
			<div className='page-flexbox-wrapper'>
				<Nav auth={this.props.auth} history={this.props.history} />
				<main className="container">
					{this.props.children}
				</main>
				<Footer auth={this.props.auth} history={this.props.history} />


			</div>
		)
	}
}

const mapStateToProps = (state) => {
	if(state.auth)
		return {
			auth: state.auth.isAuthenticated
		}
	else
		return state
}

export default connect(mapStateToProps)(App);
