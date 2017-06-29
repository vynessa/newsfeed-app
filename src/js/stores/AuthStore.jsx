import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants.jsx';


/**
 * @description Login store which gets user details
 * @class LoginStore
 * @extends {EventEmitter}
 */
class AuthStore extends EventEmitter {

  /**
   * Creates an instance of LoginStore.
   * @memberof LoginStore
   */
  constructor() {
    super();
    this.user = {};
    // this.userId = '';
  }

  /**
   * 
   * 
   * @memberof LoginStore
   */
  getUser(user) {
    // console.log(user.user, 'user id')
    localStorage.setItem('user', JSON.stringify(user));
    // this.user = user;
    // localStorage.setItem('user', JSON.stringify(user));
    // console.log(localStorage.getItem('user'), 'here ooo ');
    return this.user;
  }
  /**
   * 
   * 
   * @param {any} action
   * @memberof LoginStore
   */
  handleUser(action) {
    switch (action.type) {
      case constants.login:
        this.getUser(action.user);
        break;
      default:
    }
  }
}

const authStore = new AuthStore();
AppDispatcher.register(authStore.handleUser.bind(authStore));
export default authStore;

