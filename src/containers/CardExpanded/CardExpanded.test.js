import React from 'react';
import { shallow } from 'enzyme';
import { CardExpanded, mapStateToProps, mapDispatchToProps } from '../CardExpanded/CardExpanded';
import { addToWishlist, addToCollected, removeFromCollected, removeFromWishlist } from '../../actions';
import * as data from './__mocks__/CardExpandedMockProps';

describe('CardExpanded', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<CardExpanded {...data.propsMock} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addToWishlist with an amiibo param when addAmiiboToWishlist is called', () => {
    wrapper.instance().addAmiiboToWishlist();
    expect(data.propsMock.addToWishlist).toHaveBeenCalledWith(data.propsMock.amiibo);
  });

  it('should call removeFromWishlist with an amiibo param when addAmiiboToWishlist is called if item does not exist', () => {
    wrapper = shallow(<CardExpanded {...data.populatedListsPropsMock} />)
    wrapper.instance().addAmiiboToWishlist();
    expect(data.populatedListsPropsMock.removeFromWishlist).toHaveBeenCalledWith(data.populatedListsPropsMock.amiibo);
  });

  it('should call addToCollected with an amiibo param when addAmiiboToCollected is called', () => {
    wrapper.instance().addAmiiboToCollected();
    expect(data.propsMock.addToCollected).toHaveBeenCalledWith(data.propsMock.amiibo);
  });

  it('should call removeFromCollected with an amiibo param when addAmiiboToCollected is called if item does not exist', () => {
    wrapper = shallow(<CardExpanded {...data.populatedListsPropsMock} />)
    wrapper.instance().addAmiiboToCollected();
    expect(data.populatedListsPropsMock.removeFromCollected).toHaveBeenCalledWith(data.populatedListsPropsMock.amiibo);
  });

  it('should call goBack when the back button is clicked', () => {
    wrapper.find('.exit-button').simulate('click');
    expect(data.propsMock.history.goBack).toHaveBeenCalled();
  });

  it('render should return null if an amiibo prop does not exist', () => {
    wrapper = shallow(<CardExpanded {...data.emptyPropsMock} />);
    expect(wrapper.type()).toEqual(null);
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

