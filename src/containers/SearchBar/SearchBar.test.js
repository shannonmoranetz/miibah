import React from 'react';
import { SearchBar, mapStateToProps, mapDispatchToProps } from './SearchBar.js';
import { shallow } from 'enzyme';
import { getAmiibos } from '../../thunks/getAmiibos.js';
import { addAmiibo } from '../../actions';

jest.mock('../../thunks/getAmiibos.js');

const propsMock = {
  amiibos: [{
    name: 'pikachu',
    amiiboSeries: 'pokemon',
    gameSeries: 'pokemon',
    image: 'pikachu.img',
    release: '2019-02-15',
    id: 1
  }],
  searchedAmiibo: [{
    name: 'pikachu',
    amiiboSeries: 'pokemon',
    gameSeries: 'pokemon',
    image: 'pikachu.img',
    release: '2019-02-15',
    id: 1
  }],
  getAmiibos: jest.fn(),
  addAmiibo: jest.fn()
};

const eventMock = { preventDefault: jest.fn(), target: '' };

describe('SearchBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBar {...propsMock} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleSubmit when submit button is clicked', () => {
    const submitMock = jest.fn();
    wrapper.instance().handleSubmit = submitMock;
    wrapper.instance().handleSubmit();
    expect(submitMock).toHaveBeenCalled();
  });

  it('should call handleChange on input change', () => {
    const changeMock = jest.fn();
    wrapper.instance().handleChange = changeMock;
    wrapper.instance().handleChange();
    expect(changeMock).toHaveBeenCalled();
  });

  it('should call getAmiibos and addAmiibo with the correct params when form is submitted', async () => {
    wrapper.instance().handleSubmit();
    wrapper.setState({ search: 'pikachu' })
    wrapper.instance().handleSubmit(eventMock);
    await expect(propsMock.getAmiibos).toHaveBeenCalledWith('http://www.amiiboapi.com/api/amiibo/?name=pikachu');
    expect(propsMock.addAmiibo).toHaveBeenCalledWith([...propsMock.amiibos, ...propsMock.searchedAmiibo]);
  });

  describe('mapStateToProps', () => {
    it('should return a props object with amiibos and searchedAmiibo arrays', () => {
      const expected = { amiibos: [{ id: 1 }, { id: 2 }], searchedAmiibo: [{ id: 1 }] };
      const mockState = { amiibos: [{ id: 1 }, { id: 2 }], searchedAmiibo: [{ id: 1 }], favorites: [] };
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

    it('should call dispatch with addAmiibo as a param', () => {
      const expected = addAmiibo();
      props.addAmiibo();
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });
});