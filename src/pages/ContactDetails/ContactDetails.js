import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TransferFund from '../../components/TransferFund/TransferFund'
import MoveList from '../../components/MoveList/MoveList'
import imgAvatar from '../../assets/img_avatar.png'
import './ContactDetails.css'
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class ContactDetails extends Component {
  contactStore = this.props.store.contactStore;
  userStore = this.props.store.userStore;

  componentDidMount() {
    const contactId = this.props.match.params.id;
    this.contactStore.getContactById(contactId)
    this.userStore.getUser();
  }

  render() {
    const contact = this.contactStore.contact;
    const avatar = contact.picture || imgAvatar;
    const userLogged = this.userStore.user;

    return (
      <div className="contact-details">
          <div className="details-links"><Link to={`/contact`}>Back</Link>
            <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
          </div>
          <div className="contact-details-body">
          <img src={avatar} alt="Person" width="150" height="150" />
          <div className="contact-details-row">{contact.name}</div>
          <div className="contact-details-row">{contact.phone}</div>
          <div className="contact-details-row">{contact.email}</div>
          {/* <TransferFund contact={contact} /> */}
          {/* <MoveList userMoves={userLogged} contact={contact} /> */}
        </div>
      </div>
    )
  }

}

export default ContactDetails;
