import React from 'react';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';

import { Router } from 'react-router-dom';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const mockLogin = jest.fn();
  const history = createMemoryHistory();

  it('renders', () => {
    mount(
      <Router history={history}>
        <LoginForm onLogin={mockLogin} />
      </Router>,
    );
  });

  it('returns a username in the login function', () => {
    const wrapper = mount(<Router history={history}><LoginForm onLogin={mockLogin} /></Router>);
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
