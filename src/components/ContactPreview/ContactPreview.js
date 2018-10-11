import React from 'react';
import imgAvatar from '../../assets/users.png'
import './ContactPreview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const remove = (event, onRemove, contactId) => {
  event.preventDefault();
  onRemove(contactId);
};

const ContactPreview = (props) => {
  const avatar = props.contact.picture || imgAvatar

  return (
    <div className="contact-preview">
      <div className="data">
        <div className="avatar"><img src={avatar} alt="Person" width="96" height="96" /></div>
        <div className="contact-data">{props.contact.name} <br />
          {props.contact.phone}</div>
      </div>
      <div className="trash" onClick={event => remove(event,props.onRemove, props.contact._id)}><FontAwesomeIcon icon={faTrash} /></div>
    </div>
  )
}

export default ContactPreview;
