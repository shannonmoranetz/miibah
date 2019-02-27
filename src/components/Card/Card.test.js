import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

const matchMock = { path: '/' };

describe('Card', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<Card match={matchMock} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

