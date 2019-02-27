import React from 'react';
import { NoResultsMessage } from './NoResultsMessage';
import { shallow } from 'enzyme';

describe('NoResultsMessage', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<NoResultsMessage />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});