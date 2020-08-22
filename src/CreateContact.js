import React from "react";
import { Link } from "react-router-dom";

import ImageInput from "./ImageInput";
import serializeFrom from "form-serialize";

export default function CreateContact({ onCreateContact }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeFrom(e.target, { hash: true });
    onCreateContact(values);
  };

  return (
    <div>
      <Link className="close-create-contact" to="/">
        Close
      </Link>
      <form onSubmit={handleSubmit} className="create-contact-form">
        <ImageInput
          className="create-contact-avatar-input"
          name="avatarURL"
          maxHeight={64}
        />
        <div className="create-contact-details">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="handle" placeholder="Handle" />
          <button>Add Contact</button>
        </div>
      </form>
    </div>
  );
}
