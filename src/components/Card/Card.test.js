import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';

let matchMock = { path: '/' };

describe('Card', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(<Card match={matchMock} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('getPath should return a wishlist string based on match path', () => {
    wrapper = shallow(<Card match={{ path: '/wishlist' }} />)
    const result = wrapper.instance().getPath();
    expect(result).toEqual('/wishlist/');
  });

  it('getPath should return a wishlist string based on match path', () => {
    wrapper = shallow(<Card match={{ path: '/collected' }} />)
    const result = wrapper.instance().getPath();
    expect(result).toEqual('/collected/');
  });

  it('getPath should return an amiibo string based on match path', () => {
    wrapper = shallow(<Card match={{ path: '/amiibo' }} />)
    const result = wrapper.instance().getPath();
    expect(result).toEqual('/amiibo/');
  });
});

