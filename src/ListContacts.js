import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ListContacts({ contacts, onDeleteContact }) {
  const [query, setQuery] = useState("");

  const upadateQuery = (query) => {
    setQuery(query.trim());
  };

  const onClearQuery = () => {
    setQuery("");
  };

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
          value={query}
          onChange={(event) => upadateQuery(event.target.value)}
        />
        <Link to="/create" className="add-contact">
          Add Contact
        </Link>
      </div>
      {filteredContacts.length !== contacts.length && (
        <div className="showing-contacts">
          <span>
            Not showing {filteredContacts.length} of {contacts.length}
          </span>
          <button onClick={() => onClearQuery()}>Show all</button>
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
