import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
    btnsubmit: "Update contact",
    btnclass: "btn btn-dark btn-block"
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    })
  }

  //ASYNC AWAIT
  onSubmit = async (dispatch, e) => {
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

    const updContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
      btnsubmit: "Updated! Redirecting...",
      btnclass: "btn btn-success btn-block"
    })

    setTimeout(() => {
      this.props.history.push('/')
    }, 800);

  }

  onChange = e => this.setState({
    [e.target.name]: e.target.value,
    btnsubmit: "Update contact",
    btnclass: "btn btn-dark btn-block"
  });
  
  render() {
    const { name, email, phone , errors, btnsubmit, btnclass } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header"><h4>Edit Contact</h4></div>
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

export default EditContact;