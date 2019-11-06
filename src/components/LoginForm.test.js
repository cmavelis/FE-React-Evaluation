import React from 'react';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';

import { Router } from 'react-router-dom';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const mockLogin = jest.fn();
  const history = createMemoryHistory();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Router history={history}><LoginForm onLogin={mockLogin} /></Router>);
  });

  it('renders', () => {
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('does not login with a bad username', () => {
    const testUserName = 'newusern@me';
    const event = { target: { value: testUserName } };

    wrapper.find("input[type='text']").simulate('change', event);
    wrapper.find("input[type='password']").simulate('change', event);

    wrapper
      .find('button')
      .last()
      .simulate('click');
    expect(mockLogin).toBeCalledTimes(0);
  });

  it('does not login with a bad password', () => {
    const testUserName = 'pw';
    const event = { target: { value: testUserName } };

    wrapper.find("input[type='text']").simulate('change', event);
    wrapper.find("input[type='password']").simulate('change', event);

    wrapper
      .find('button')
      .last()
      .simulate('click');
    expect(mockLogin).toBeCalledTimes(0);
  });

  it('returns a username in the login function', () => {
    const testUserName = 'newusername';
    const event = { target: { value: testUserName } };

    wrapper.find("input[type='text']").simulate('change', event);
    wrapper.find("input[type='password']").simulate('change', event);

    wrapper
      .find('button')
      .last()
      .simulate('click');
    expect(mockLogin).toBeCalledWith(testUserName);
  });
});
