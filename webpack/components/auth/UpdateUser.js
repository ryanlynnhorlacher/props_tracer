import React from 'react';
import { connect } from 'react-redux';

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { error: false, redirectRoute: '/', user: []}
  }

  componentWillMount() {
        $.ajax({
          url: '/user',
          type: 'GET',

        })
  }

  handleSubmit(e) {
    e.preventDefault();
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    let email = this.refs.email.value;
    let phoneNumber = this.refs.phoneNumber.value;
    let role = this.refs.role.value;
    if(this.refs.password.value === '') {
      
    }
    let password = this.refs.password.value;
    let currentPassword = this.refs.currentPassword.value;
    this.props.dispatch(
      handleUpdate(
        firstName, lastName, email, phoneNumber, role, 
        password, currentPassword, this.state.redirectRoute, this.props.history)
    )
  }

  render() {
    return (
      <div>
        <h3>Update Profile</h3>
        <form onSubmit={this.handleSubmit}>
          <input ref="firstName" required placeholder="First Name" />
          <input ref="lastName" required placeholder="Last Name" />
          <input ref="email" required placeholder="Email" />
          <input ref="phoneNumber" placeholder="Phone Number" />
          <input ref="role" placeholder="Role!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" />
          <input ref="password" type="password" placeholder="New Password" />
          <input ref='currentPassword' type='password' required placeholder='Current Password' />
          <button type="submit" className="btn">Update</button>
        </form>
      </div>
    )
  }
}

export default connect()(UpdateUser);