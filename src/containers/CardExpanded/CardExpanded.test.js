import React from 'react';
import CardExpanded from './CardExpanded';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from '../CardExpanded/CardExpanded';
import { addToWishlist, addToCollected } from '../../actions';

describe('CardExpanded', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<CardExpanded />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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
  });
});

