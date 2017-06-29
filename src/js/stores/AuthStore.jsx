import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants.jsx';


/**
 * @description Login store which gets user details
 * @class LoginStore
 * @extends {EventEmitter}
 */
class LoginStore extends EventEmitter {

  /**
   * Creates an instance of LoginStore.
   * @memberof LoginStore
   */
  constructor() {
    super();
    this.user = {};
    this.userId = '';
  }
}

const loginStore = new LoginStore();
AppDispatcher.register();
export default loginStore;

