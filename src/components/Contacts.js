import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Ali Zaki',
        email: 'alizaki@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Abu Bakar',
        email: 'abubakar@gmail.com',
        phone: '333-555-5555'
      },
      {
        id: 3,
        name: 'Siti Sarimah',
        email: 'sitisarimah@gmail.com',
        phone: '444-555-5555'
      }
    ]
  }

  deleteContact = (id) => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);
    
    this.setState({
      contacts: newContacts
    });
  }

  render() {
    const { contacts } = this.state;

    return (
      <>
        {contacts.map(contact =>
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        )}
      </>
    )
  }
}

export default Contacts;