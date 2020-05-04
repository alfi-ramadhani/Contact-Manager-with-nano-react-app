import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Contact extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // }

  state = {
    showContactInfo: false
  };

  // onShowClick = () => {
  //   console.log(this.state);
  // }

  // onShowClick = (e) => {
  //   this.setState({showContactInfo: !this.state.showContactInfo});
  // }

  onDeleteClick = () => {
    this.props.deleteClickHandler()
  }

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className='card card-body mb-3'>
        <h4>{name}
          <i onClick={(e) =>
          this.setState({
            showContactInfo: !this.state.showContactInfo
            })}
            className={showContactInfo ? "fas fa-sort-up" : "fas fa-sort-down"}
            style={{cursor: 'pointer', padding: '15px'}} />
          <i className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}}
          onClick={this.onDeleteClick} />         
        </h4>
        {showContactInfo ? (<ul>
          <li>Email : {email}</li>
          <li>Phone : {phone}</li> 
        </ul>) : null}    
      </div>
    )
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// }

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;