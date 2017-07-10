import { EventEmitter } from 'events';
import { browserHistory } from 'react-router';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants';

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
  }
  /**
   * @param {any} user
   * @returns {void}
   * @memberof AuthStore
   */
  getUser(user) {
    // console.log(user)
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    browserHistory.push('sources');
    location.reload();
  }
  /**
   * @memberof AuthStore
   * @returns {void}
   */
  clearUser() {
    localStorage.clear();
    location.reload();
  }
  /**
   * @param {any} action
   * @memberof LoginStore
   * @returns {void}
   */
  handleUser(action) {
    switch (action.type) {
      case constants.login:
        this.getUser(action.user);
        break;
      case constants.signOut:
        this.clearUser();
        break;
      default:
    }
  }
}

const authStore = new AuthStore();
AppDispatcher.register(authStore.handleUser.bind(authStore));
export default authStore;

