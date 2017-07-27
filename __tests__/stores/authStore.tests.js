/* global expect jest describe it beforeEach */
import expects from 'expect';
import dispatcher from '../../src/js/dispatcher';
import authStore from '../../src/js/stores/authStore';
import constants from '../../src/js/constants/constants';
import './../../__mocks__/browserMocks';

jest.mock('../../src/js/dispatcher');

describe('Authentication Store Test Suite', () => {
  let callback;

  const user = {
    type: constants.login,
    user: {
      uid: '6720',
      displayName: 'Mark',
    }
  };

  const clearUser = {
    type: constants.signOut,
    user: undefined
  };

  localStorage.setItem('user', JSON.stringify(user.user));

  beforeEach(() => {
    callback = dispatcher.register.mock.calls[0][0];
  });

  it('should exist', () => {
    expects(authStore).toExist();
  });

  it('should register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no user', () => {
    expect(Object.keys(authStore.user).length).toBe(0);
  });

  it('should return the appropraite user\'s data', () => {
    callback(user);
    const setUser = JSON.parse(localStorage.getItem('user'));

    expect(authStore.user).toEqual(user.user);
    expect(setUser.uid).toBe('6720');
    expect(setUser.displayName).toBe('Mark');
  });

  it('should clear the user\'s data on logout ', () => {
    callback(clearUser);
    localStorage.removeItem('user');

    expect(localStorage.getItem('user')).toBe(null);
    expect(authStore.clearUser()).toBe(undefined);
  });
});
