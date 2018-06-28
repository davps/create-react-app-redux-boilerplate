import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

/**
 * Smoke test
 * */
it('renders without crashing', () => {
  shallow(<App />);
});

it('Smoke test', () => {
  const app = mount(<App />);

  // console.log(app.debug());

  const addItem = () =>
    app
      // .find(Basic)
      // .at(position)
      .find('button')
      .simulate('click');

  addItem();
  addItem();
  addItem();
});
