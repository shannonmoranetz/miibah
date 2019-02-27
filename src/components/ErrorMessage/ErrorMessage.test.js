import React from 'react';
import { ErrorMessage, mapStateToProps } from './ErrorMessage';
import { shallow } from 'enzyme';

describe('ErrorMessage', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<ErrorMessage />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with an error string', () => {
      const expected = { error: 'error' };
      const mockState = { error: 'error', extraError: 'second error' };
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });
});