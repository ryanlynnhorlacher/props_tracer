import React from 'react';
import { connect } from 'react-redux';
 
class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstNameButton = this.firstNameButton.bind(this);
    this.lastNameButton = this.lastNameButton.bind(this);
    this.phoneNumberButton = this.phoneNumberButton.bind(this);
    this.roleButton = this.roleButton.bind(this);
    // this.updateState = this.updateState.bind(this);
    this.state = { error: false, redirectRoute: '/admin', id: null, editFirstName: false,
      editLastName: false, editPhoneNumber: false, editRole: false}
  }
 
  componentWillMount() {
    $.ajax({
      url: '/users/current',
      type: 'GET',
      dataType: 'JSON'
    }).done( user => {
      {this.setState({ id: user.id, firstName: user.first_name, lastName: user.last_name, 
        role: user.role, phoneNumber: user.phone_number })}
    }).fail( data => {
      console.log(data)
    });
  }
 
  handleSubmit() {
    console.log('handle submit')
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    let phoneNumber = this.refs.phoneNumber.value;
    let role = this.refs.role.value;
    this.handleUpdate(
      this.state.id, firstName, lastName, phoneNumber, role, 
      this.state.redirectRoute, this.props.history
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

  firstNameButton() {
    if(this.state.editFirstName === false)
      return(
        <div className='col s3'>
          <button className='center-align btn-small btn-floating yellow darken-2'
            onClick={ () => this.setState({editFirstName: !this.state.editFirstName}) }>
            <i className="material-icons">mode_edit</i></button>
        </div>
      )
    else
      return(
        <div className='col s3'>
          <button className='btn-small btn-floating green' 
            onClick={ () => this.handleSubmit(this.setState({editFirstName: !this.state.editFirstName})) }>
            <i className="material-icons">done</i></button>
          <button className='btn-small btn-floating red'
            onClick={ () => this.setState({editFirstName: !this.state.editFirstName}) }>
            <i className="material-icons">not_interested</i></button>
        </div>
      )
  }

  lastNameButton() {
      if(this.state.editLastName === false)
        return(
          <div className='col s3'>
            <button className='center-align btn-small btn-floating yellow darken-2'
              onClick={ () => this.setState({editLastName: !this.state.editLastName}) }>
              <i className="material-icons">mode_edit</i></button>
          </div>
        )
      else
        return(
          <div className='col s3'>
            <button className='btn-small btn-floating green' 
              onClick={ () => this.handleSubmit(this.setState({editLastName: !this.state.editLastName})) }>
              <i className="material-icons">done</i></button>
            <button className='btn-small btn-floating red'
              onClick={ () => this.setState({editLastName: !this.state.editLastName}) }>
              <i className="material-icons">not_interested</i></button>
          </div>
        )
    }

  phoneNumberButton() {
    if(this.state.editPhoneNumber === false)
      return(
        <div className='col s3'>
          <button className='center-align btn-small btn-floating yellow darken-2'
            onClick={ () => this.setState({editPhoneNumber: !this.state.editPhoneNumber}) }>
            <i className="material-icons">mode_edit</i></button>
        </div>
      )
    else
      return(
        <div className='col s3'>
          <button className='btn-small btn-floating green' 
            onClick={ () => this.handleSubmit(this.setState({editPhoneNumber: !this.state.editPhoneNumber})) }>
            <i className="material-icons">done</i></button>
          <button className='btn-small btn-floating red'
            onClick={ () => this.setState({editPhoneNumber: !this.state.editPhoneNumber}) }>
            <i className="material-icons">not_interested</i></button>
        </div>
      )
  }

  roleButton() {
    if(this.state.editRole === false)
      return(
        <div className='col s3'>
          <button className='center-align btn-small btn-floating yellow darken-2'
            onClick={ () => this.setState({editRole: !this.state.editRole}) }>
            <i className="material-icons">mode_edit</i></button>
        </div>
      )
    else
      return(
        <div className='col s3'>
          <button className='btn-small btn-floating green' 
            onClick={ () => this.handleSubmit(this.setState({editRole: !this.state.editRole})) }>
            <i className="material-icons">done</i></button>
          <button className='btn-small btn-floating red'
            onClick={ () => this.setState({editRole: !this.state.editRole}) }>
            <i className="material-icons">not_interested</i></button>
        </div>
      )
  }

  render() {
    let state = this.state
    if(this.state.id) {
      return (
        <div>
          <h3 className="center">Update Profile</h3>
          <div className="container text-bg round center">

          <label>First name</label>
          <div className='row'>
            <input className='col s9' ref="firstName" required 
              autoFocus={true} disabled={!state.editFirstName} defaultValue={state.firstName} />
              { this.firstNameButton() }
          </div>

            <label>Last name</label>
            <div className='row'>
              <input className='col s9' ref="lastName" required
                autoFocus={true} disabled={!state.editLastName} defaultValue={state.lastName} />
              { this.lastNameButton() }
            </div>

            <label>Phone number</label>
            <div className='row'>
              <input className='col s9' ref="phoneNumber" required
                autoFocus={true} disabled={!state.editPhoneNumber} defaultValue={state.phoneNumber} />
              { this.phoneNumberButton() }
            </div>

            <label>Role</label>
            <div className='row'>
              <input className='col s9' ref="role" onBlur={this.handleSubmit} autoFocus={true} 
                disabled={!state.editRole} defaultValue={state.role} />
              { this.roleButton() }
            </div>
          </div>
          <hr/>
        </div>
      )
    } else
      return null
  }
}

export default UpdateUser;