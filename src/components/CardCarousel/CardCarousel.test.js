import React from 'react';
import CardCarousel from './CardCarousel';
import { shallow } from 'enzyme';

describe('CardCarousel', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<CardCarousel />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});