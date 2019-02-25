import React from 'react';
import SearchBar from './SearchBar';
import { shallow } from 'enzyme';

describe('SearchBar', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});