import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }
  
  removeContact = (contactId) => {
    this.setState(({ contacts: curretContacts }) => ({
      contacts: curretContacts.filter(({ id }) => id !== contactId),
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <ListContacts contacts={contacts} onDeleteContact={this.removeContact} />
    );
  }
}

export default App;
