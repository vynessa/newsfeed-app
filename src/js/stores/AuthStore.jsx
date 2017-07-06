import { EventEmitter } from 'events';
import { browserHistory } from 'react-router';
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
  }

  /**
   * 
   * 
   * @memberof LoginStore
   */
  getUser(user) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    browserHistory.push('sources');
    location.reload();
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

