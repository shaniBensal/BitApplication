import { observable, action, computed } from 'mobx';
class UserStore {
  @observable
  user = {}

  constructor(rootStore, userService) {
    this.rootStore = rootStore;
    this.userService = userService;
  }

  @action
  getUser() {
    this.user = this.userService.getLoggedInUser();
  }

}
export default UserStore;
