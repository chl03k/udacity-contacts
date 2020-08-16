import React from "react";

function ListContacts({ contacts }) {
  return (
    <ul className="contact-list">
      {contacts.map(({ name, handle, avatarURL }) => {
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
            <button className="contact-remove">Remove</button>
          </li>
        );
      })}
    </ul>
  );
}

export default ListContacts;
