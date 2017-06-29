// import { browserHistory } from 'react-router';
// import AppDispatcher from '../dispatcher';
// import constants from '../constants/constants.jsx';
// // import NewsApi from '../utils/newsApi.jsx';

// const firebase = require('firebase/app');
// require('firebase/auth');

// const provider = new firebase.auth.GoogleAuthProvider();
// /**
//  * @description News Actions to dispatch actions to stores
//  * @function
//  */
// const LoginActions = {
//   /**
//    * @description Google Login Action
//    * @method
//    * @param {string} provider
//    * @returns {void}
//    */
//   loginAuth() {
//     firebase.auth().signInWithPopup(provider).then((result) => {
//       console.log(result.user);
//       console.log(result.user.uid);
//       browserHistory.push('sources');
//       AppDispatcher.dispatch({
//         type: constants.login,
//         // user: {
//         //   user: result.user,
//         //   userId: result.user.uid
//         // }
//         user: result.user
//       }, (err) => {
//         AppDispatcher.dispatch({
//           type: constants.loginError,
//           user: err
//         });
//       });
//     });
//   },
// };

// export default LoginActions;
