import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getAmiibos } from '../../thunks/getAmiibos.js';
import { getWishlist, getCollected } from '../../actions';
import { shallow } from 'enzyme';
import CardExpanded from '../CardExpanded/CardExpanded.js';
import CardCarousel from '../../components/CardCarousel/CardCarousel.js';

jest.mock('../../thunks/getAmiibos.js');

const matchMock = { params: { id: 1 } };

const propsMock = {
  getAmiibos: jest.fn(),
  getWishlist: jest.fn(),
  getCollected: jest.fn(),
  amiibos: [{ name: 'pikachu', id: 1 }]
}

describe('App', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<App {...propsMock} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getAmiibos when App is mounted', () => {
    wrapper.instance().componentDidMount();
    expect(propsMock.getAmiibos).toHaveBeenCalled();
  });

  it('should call getWishlist with correct params when populateWishList is called', () => {
    localStorage.setItem('wishlist', JSON.stringify([{name: 'pikachu'}]));
    wrapper.instance().populateWishlist();
    expect(propsMock.getWishlist).toHaveBeenCalledWith([{name: 'pikachu'}]);
  });

  it('should call getCollected with correct params when populateWishList is called', () => {
    localStorage.setItem('collected', JSON.stringify([{name: 'squirtle'}]));
    wrapper.instance().populateCollected();
    expect(propsMock.getCollected).toHaveBeenCalledWith([{name: 'squirtle'}]);
  });

  it('should return the matched amiibo', () => {
    const amiibo = { id: 1, name: 'pikachu' };
    const expected = [<CardCarousel />, <CardExpanded {...amiibo} match={matchMock} />]
    const result = wrapper.instance().findAmiibo({ match: { params: { id: 1 } } });
    expect(result).toEqual(expected);
  });









  describe('mapStateToProps', () => {
    it('should return a props object with an amiibos array and loading boolean', () => {
      const expected = { amiibos: [{id: 1}, {id: 2}], isLoading: false };
      const mockState = { amiibos: [{id: 1}, {id: 2}], isLoading: false, favorites: [] };
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

