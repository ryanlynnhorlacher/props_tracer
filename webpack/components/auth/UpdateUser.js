import React from 'react';
import { connect } from 'react-redux';
 
class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateState = this.updateState.bind(this);
    this.state = { error: false, redirectRoute: '/admin', id: null}
  }
 
  componentWillMount() {
    $.ajax({
      url: '/users/current',
      type: 'GET',
      dataType: 'JSON'
    }).done( user => {
      console.log(user)
      console.log('user retrieved')
      {this.setState({ id: user.id, firstName: user.first_name, lastName: user.last_name, 
                      role: user.role, phoneNumber: user.phone_number })}
    }).fail( data => {
      console.log('retrieval failed')
      console.log(data)
    });
  }
 
  handleSubmit(e) {
    e.preventDefault();
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    let phoneNumber = this.refs.phoneNumber.value;
    let role = this.refs.role.value;
    this.handleUpdate(
        this.state.id, firstName, lastName, phoneNumber, role, this.state.redirectRoute, this.props.history
    )
  }

  handleUpdate(id, firstName, lastName, phoneNumber, role, redirect, history) {
    $.ajax({
      url: `/api/v1/users/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { user: {first_name: firstName, last_name: lastName, 
          phone_number: phoneNumber, role}}
    }).done(user => {
      console.log(user)
    }).fail(data => {
      console.log('update failed')
    })
  }

  // updateState(key, value) {
  //   this.setState({`${key}` => value})
  // }

  render() {
    let user = this.state
    if(this.state.id) {
      return (
        <div>
          <h3 className="center">Update Profile</h3>
          <div className="container text-bg round center">
            <form onSubmit={this.handleSubmit}>
              <label>First name</label>
              <input ref="firstName" required defaultValue={user.firstName} />
              <label>Last name</label>
              <input ref="lastName" required defaultValue={user.lastName} />
              <label>Phone number</label>
              <input ref="phoneNumber" defaultValue={user.phoneNumber} />
              <label>Role</label>
              <input ref="role" defaultValue={user.role} />
              <button type="submit" className="btn center">Update</button>
            </form>
          </div>
          <hr/>
        </div>
      )
    } else
      return null
  }
}

export default UpdateUser;