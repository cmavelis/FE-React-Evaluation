import React from 'react';
import { mount } from 'enzyme';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const mockLogin = jest.fn();

  it('renders', () => {
    mount(<LoginForm onLogin={mockLogin} />);
  });

  it('returns a username in the login function', () => {
    const wrapper = mount(<LoginForm onLogin={mockLogin} />);
    const testUserName = 'newuser';
    const event = { target: { value: testUserName } };

    wrapper.find("input[type='text']").simulate('change', event);
    wrapper
      .find('button')
      .last()
      .simulate('click');
    expect(mockLogin).toBeCalledWith(testUserName);
  });
});
