import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import { v4 as uuidv4 } from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
    btnsubmit: "Add contact",
    btnclass: "btn btn-info btn-block"
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // Check for errors
    if (name === '') {
      this.setState({errors: {name: 'Name is required'}});
      return;
    }

    if (email === '') {
      this.setState({errors: {email: 'Email is required'}});
      return;
    }

    if (phone === '') {
      this.setState({errors: {phone: 'Phone is required'}});
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone
    }
    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
      btnsubmit: "Added! Redirecting...",
      btnclass: "btn btn-success btn-block"
    })

    setTimeout(() => {
      this.props.history.push('/')
    }, 800);
  }

  onChange = e => this.setState({
    [e.target.name]: e.target.value,
    btnsubmit: "Add contact",
    btnclass: "btn btn-info btn-block"
  });
  
  render() {
    const { name, email, phone , errors, btnsubmit, btnclass } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header"><h4>Add Contact</h4></div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup 
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup 
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup 
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input className={btnclass} type="submit" value={btnsubmit}/>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;