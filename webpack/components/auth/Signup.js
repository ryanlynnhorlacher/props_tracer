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
    let role = this.refs.role.value;
    let phoneNumber = this.refs.phoneNumber.value;
    this.handleSignup(email, password, firstName, lastName, role, phoneNumber )
  }

  handleSignup = (email, password, firstName, lastName, role, phoneNumber) => {
    $.ajax({
      url: '/users',
      type: 'POST',
      data: { user: {email, password, first_name: firstName, last_name: lastName,
        role, phone_number: phoneNumber}},
      dataType: 'JSON'
    }).done( user => {
      console.log(user);
      this.refs.newUserForm.reset();
      alert('User created succesfully')
    }).fail(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <h3 className="center">Add New User</h3>
        <div className="container text-bg round center">
          <form ref='newUserForm' onSubmit={this.handleSubmit}>
            <input ref="firstName" required placeholder="First Name" />
            <input ref="lastName" required placeholder="Last Name" />
            <input ref="email" required placeholder="Email" />
            <input ref="phoneNumber"  placeholder="Phone Number" />
            <input ref="role" placeholder="Role" />
            <input ref="password" type="password" required placeholder="Password" />
            <button type="submit" className="btn-flat">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup;