import { observable, action, computed, remove } from 'mobx';
class ContactStore {
  @observable
  contacts = [];

  @observable
  contact = {};

  constructor(rootStore, contactService) {
    this.rootStore = rootStore;
    this.contactService = contactService;
  }

  @action
  getContacts(term) {
    this.contactService.getContacts({ term }).then(contacts => {
      this.contacts = contacts;
    });
  }

  @action
  getContactById(contactId) {
    this.contactService.getContactById(contactId).then(res => {
      this.contact = res;
    });
  }

  @action
  removeContact(contactId) {
    console.log('store', contactId);
    this.contactService.deleteContact(contactId).then(contacts => this.contacts = contacts)
  }

}
export default ContactStore;
