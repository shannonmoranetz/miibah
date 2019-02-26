import React from 'react';
import { CardCarousel, mapStateToProps } from './CardCarousel';
import { Card } from '../../containers/Card/Card';
import { shallow } from 'enzyme';

const propsMock = {
  amiibos: [
            { id: 1, 
              name: 'pikachu', 
              amiiboSeries: 'pokemon', 
              gameSeries: 'pokemon', 
              image: 'pikachu.img', 
              release: '2/20/2019' }
            ],
};

const matchMock = { params: { id: 1 } };

describe('CardCarousel', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardCarousel {...propsMock} match={matchMock} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with an amiibos array', () => {
      const expected = propsMock.amiibos;
      const mockState = { amiibos: [{id: 1, name: 'pikachu', amiiboSeries: 'pokemon', gameSeries: 'pokemon', image: 'pikachu.img', release: '2/20/2019' }] }
      const props = mapStateToProps(mockState);
      expect(props.amiibos).toEqual(expected);
    });
  });
});