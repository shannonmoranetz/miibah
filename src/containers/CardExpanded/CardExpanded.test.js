import React from 'react';
import { shallow } from 'enzyme';
import { CardExpanded, mapStateToProps, mapDispatchToProps } from '../CardExpanded/CardExpanded';
import { addToWishlist, addToCollected, removeFromCollected, removeFromWishlist } from '../../actions';

const propsMock = { amiibo: {
  name: 'pikachu',
  amiiboSeries: 'pokemon',
  gameSeries: 'pokemon',
  image: 'pikachu.img',
  release: '2019-02-15',
  id: 1
},
addAmiiboToWishlist: jest.fn(),
addAmiiboToCollected: jest.fn(),
addToWishlist: jest.fn(),
addToCollected: jest.fn(),
wishlist: [],
collected: []
};


describe('CardExpanded', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<CardExpanded {...propsMock} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addToWishlist with an amiibo param when addAmiiboToWishlist is called', async () => {
    wrapper.instance().addAmiiboToWishlist();
    expect(propsMock.addToWishlist).toHaveBeenCalledWith(propsMock.amiibo);
  });

  it('should call addToCollected with an amiibo param when addAmiiboToCollected is called', async () => {
    wrapper.instance().addAmiiboToCollected();
    expect(propsMock.addToCollected).toHaveBeenCalledWith(propsMock.amiibo);
  });

  it('should check a list and return true if an item does not exist', () => {
    let result = wrapper.instance().checkExistingList(propsMock.wishlist);
    expect(result).toEqual(true);
  });

  it('should check a list and return false if an item already exists', () => {
    let result = wrapper.instance().checkExistingList([{ name: 'pikachu' }]);
    expect(result).toEqual(false);
  });

  describe('mapStateToProps', () => {
    it('should return an object with wishlist and collected arrays', () => {
      const expected = { wishlist: [{ id: 1 }], collected: [{ id: 2 }] };
      const mockState = { wishlist: [{ id: 1 }], collected: [{ id: 2 }], extraKey: 'extra' }
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    })
  });

  describe('mapDispatchToProps', () => {
    const dispatchMock = jest.fn();
    const props = mapDispatchToProps(dispatchMock);
    it('should dispatch addToWishlist with an amiibo object as a param', () => {
      const expected = addToWishlist({ id: 1 });
      props.addToWishlist({ id: 1 });
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
    it('should dispatch addToCollected with an amiibo object as a param', () => {
      const expected = addToCollected({ id: 2 });
      props.addToCollected({ id: 2 });
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
    it('should dispatch removeFromCollected with an amiibo object as a param', () => {
      const expected = removeFromCollected({ id: 3 });
      props.removeFromCollected({ id: 3 });
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
    it('should dispatch removeFromWishlist with an amiibo object as a param', () => {
      const expected = removeFromWishlist({ id: 4 });
      props.removeFromWishlist({ id: 4 });
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });
});

