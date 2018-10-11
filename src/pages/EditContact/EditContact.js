import React, { Component } from 'react';
import ContactService from '../../services/ContactService'
import { Link } from 'react-router-dom';
import './EditContact.css'
import imgAvatar from '../../assets/users.png'

class EditContact extends Component {

    state = {
        contact: {}
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = event.target.value;
        const field = target.name;
        const newContact = { ...this.state.contact };
        newContact[field] = value;

        this.setState({
            contact: newContact
        });
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        if (userId) {
            ContactService.getContactById(userId).then(contact => {
                this.setState({
                    contact
                })
            })
        } else {
            this.setState({
                contact: ContactService.getEmptyContact()
            })
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        ContactService.saveContact(this.state.contact)
        this.props.history.push('/contact')
    }

    render() {
        const contact = this.state.contact
        const avatar = contact.picture || imgAvatar;

        return (
            <div className="edit-contact">
                {
                    this.props.match.params.id
                        ?
                        <Link to={`/contact/${this.props.match.params.id}`}>Back</Link> :
                        <Link to={`/contact`}>Back</Link>
                }
                {/* <button onClick={this.remove}>Delete</button> */}
                <div><img className="image" src={avatar} alt="Person" width="150" height="150" /></div>
                <form onSubmit={this.handleSubmit}>
                    <div><input className="edit-input" type="text" name="name" defaultValue={this.state.contact.name} onChange={this.handleInputChange} placeholder="Name" /></div>
                    <div><input className="edit-input" type="text" name="phone" defaultValue={this.state.contact.phone} onChange={this.handleInputChange} placeholder="Phone" /></div>
                    <div><input className="edit-input" type="email" name="email" defaultValue={this.state.contact.email} onChange={this.handleInputChange} placeholder="Email" /></div>
                    <input className="submit" type="submit" />
                </form>
            </div>
        )
    }

}

export default EditContact;

