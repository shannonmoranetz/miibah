import React from 'react';
import CardCarousel, { mapStateToProps } from './CardCarousel';
import { shallow } from 'enzyme';

describe('CardCarousel', () => {
  let wrapper;
  const amiibos = [{id: 1}, {id: 2}]
  beforeEach(() => {
    wrapper = shallow(<CardCarousel />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with an amiibos array', () => {
      const expected = amiibos;
      const mockState = { amiibos: [{id: 1}, {id: 2}] }
      const props = mapStateToProps(mockState);
      expect(props.amiibos).toEqual(expected);
    });
    
  });
});