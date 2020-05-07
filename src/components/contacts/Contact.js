import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {

  state = {
    showContactInfo: false
  };

  // onDeleteClick = (id, dispatch) => {
  //   // dispatch({type: 'DELETE_CONTACT', payload: id});
  //   axios.delete(
  //     `https://jsonplaceholder.typicode.com/users/${id}`
  //   )
  //   .then(res => dispatch({type: 'DELETE_CONTACT', payload: id}))
  // }

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({type: 'DELETE_CONTACT', payload: id});      
  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          
          return (
            <div className='card card-body pb-0 mb-3'>
              <h5>{name}

                <i onClick={() =>
                this.setState({
                  showContactInfo: !this.state.showContactInfo
                  })}
                  className={showContactInfo ? "fas fa-sort-up" : "fas fa-sort-down"}
                  style={{cursor: 'pointer', padding: '15px'}} />

                <i className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}}
                onClick={this.onDeleteClick.bind(this, id, dispatch)} />

                <Link to={`/contact/edit/${id}`} >
                  <i className="fas fa-edit" style={{cursor: 'pointer', float: 'right', color: 'grey', marginRight: '1rem'}} />
                </Link>
              </h5>
              {showContactInfo ? (<ul>
                <li>Email : {email}</li>
                <li>Phone : {phone}</li>
              </ul>) : null}    
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;