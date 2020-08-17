import React, { Component } from "react";
import PropTypes from "prop-types";

class ListContacts extends Component {
  state = {
    query: "",
  };

  upadateQuery = (query) => {
    this.setState({ query: query.trim() });
  };

  onClearQuery = () => {
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;
    const { contacts, onDeleteContact } = this.props;

    const filteredContacts =
      query === ""
        ? contacts
        : contacts.filter((contact) =>
            contact.name.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={this.state.query}
            onChange={(event) => this.upadateQuery(event.target.value)}
          />
        </div>
        {filteredContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Not showing {filteredContacts.length} of {contacts.length}
            </span>
            <button onClick={() => this.onClearQuery()}>Show all</button>
          </div>
        )}
        <ul className="contact-list">
          {filteredContacts.map(({ id, name, handle, avatarURL }) => {
            return (
              <li key={name} className="contact-list-item">
                <div
                  className="contact-avatar"
                  style={{ backgroundImage: `url(${avatarURL})` }}
                />
                <div className="contact-details">
                  <p>{name}</p>
                  <p>{handle}</p>
                </div>
                <button
                  onClick={() => onDeleteContact(id)}
                  className="contact-remove"
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ListContacts;
