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

  it('should call a reload when back button is clicked', () => {
    Object.defineProperty(window.location, 'reload', {
      configurable: true
    });
    window.location.reload = jest.fn();
    wrapper.find('.back-home').simulate('click');
    expect(window.location.reload).toHaveBeenCalled();
  });
});