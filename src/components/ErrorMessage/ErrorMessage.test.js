import React from 'react';
import { ErrorMessage } from './ErrorMessage';
import { shallow } from 'enzyme';

describe('ErrorMessage', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<ErrorMessage />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});