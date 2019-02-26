import React from 'react';
import { shallow } from 'enzyme';
import { CardExpanded, mapStateToProps, mapDispatchToProps } from '../CardExpanded/CardExpanded';
import { addToWishlist, addToCollected } from '../../actions';

const propsMock = {
  addAmiiboToWishlist: jest.fn(),
  addAmiiboToCollected: jest.fn(),
  addToWishlist: jest.fn(),
  addToCollected: jest.fn(),
  name: 'pikachu',
  amiiboSeries: 'pokemon',
  gameSeries: 'pokemon',
  image: 'pikachu.img',
  release: 2/20/2019,
  id: 1
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
    expect(propsMock.addToWishlist).toHaveBeenCalledWith(propsMock);
  })

  it('should call addToCollected with an amiibo param when addAmiiboToCollected is called', async () => {
    wrapper.instance().addAmiiboToCollected();
    expect(propsMock.addToCollected).toHaveBeenCalledWith(propsMock);
  })

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
  });
});

