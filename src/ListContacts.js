import React from "react";
import PropTypes  from 'prop-types';

function ListContacts({ contacts, onDeleteContact }) {
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, handle, avatarURL }) => {
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
  );
}

ListContacts.PropTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts;
