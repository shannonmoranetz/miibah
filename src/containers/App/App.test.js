import React from 'react';
import App, { mapStateToProps, mapDispatchToProps } from './App';
import { getAmiibos } from '../../thunks/getAmiibos.js';
import { getWishlist, getCollected } from '../../actions';
import { shallow } from 'enzyme';

jest.mock('../../thunks/getAmiibos.js');

describe('App', () => {
  let wrapper; 
  const amiibos = [{id: 1}, {id: 2}];
  beforeEach(() => {
    wrapper = shallow(<App />);
  });


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should find an amiibo that matches the id passed in', () => {

  });

  describe('mapStateToProps', () => {
    it('should return an object with an amiibos array and loading boolean', () => {
      const expected = { amiibos: [{id: 1}, {id: 2}], isLoading: false };
      const mockState = { amiibos: [{id: 1}, {id: 2}], isLoading: false, favorites: [] }
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatchMock = jest.fn();
    const props = mapDispatchToProps(dispatchMock);
    it('should call dispatch with getAmiibos as a param', () => {
        const expected = getAmiibos();
        props.getAmiibos();
        expect(dispatchMock).toHaveBeenCalledWith(expected);
    });

    it('should call dispatch with getWishlist as a param', () => {
      const expected = getWishlist([{ id: 1 }, { id: 2 }]);
      props.getWishlist([{ id: 1 }, { id: 2 }]);
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });

    it('should call dispatch with getCollected as a param', () => {
      const expected = getCollected([{ id: 1 }, { id: 2 }]);
      props.getCollected([{ id: 1 }, { id: 2 }]);
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });

});

