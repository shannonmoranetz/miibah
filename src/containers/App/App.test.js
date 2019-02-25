import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<App />);
  });


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should find an amiibo that matches the id passed in', () => {

  });
});

