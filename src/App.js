import React, { Component } from "react";
import { Route } from "react-router-dom";

import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";

class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts });
    });
  }

  createContact = (contact) => {
    ContactsAPI.create(contact).then(() => {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    });
  };

  removeContact = (contactId) => {
    this.setState(({ contacts: curretContacts }) => ({
      contacts: curretContacts.filter(({ id }) => id !== contactId),
    }));
    ContactsAPI.remove(contactId);
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <ListContacts
                contacts={contacts}
                onDeleteContact={this.removeContact}
              />
            );
          }}
        />
        <Route
          exact
          path="/create"
          render={({ history }) => (
            <CreateContact
              onCreateContact={(contact) => {
                this.createContact(contact);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
