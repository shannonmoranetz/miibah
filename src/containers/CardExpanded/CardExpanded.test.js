import React from 'react';
import CardExpanded from './CardExpanded';
import { shallow } from 'enzyme';

describe('CardExpanded', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<CardExpanded />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

