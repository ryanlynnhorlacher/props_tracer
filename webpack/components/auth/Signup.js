import React from 'react';
import { connect } from 'react-redux';
import { handleSignup } from './actions';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { error: false, redirectRoute: '/' }
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    this.props.dispatch(
      handleSignup(firstName, lastName, email, password, this.state.redirectRoute, this.props.history)
    )
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={this.handleSubmit}>
          <input ref="firstName" required placeholder="First Name" />
          <input ref="lastName" required placeholder="Last Name" />
          <input ref="email" required placeholder="Email" />
          <input ref="password" type="password" required placeholder="Password" />
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default connect()(Signup);