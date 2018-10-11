import UserStore from './UserStore';
import ContactStore from './ContactStore';
import BitcoinStore from './BitcoinStore';

import UserService from '../services/UserService';
import ContactService from '../services/ContactService';
import BitcoinService from '../services/BitcoinService';

class RootStore {
  constructor() {
    this.contactStore = new ContactStore(this, ContactService);
    // this.bitcoinStore = new BitcoinStore(this, BitcoinService);
    this.userStore = new UserStore(this, UserService);
  }
}
export default RootStore;
