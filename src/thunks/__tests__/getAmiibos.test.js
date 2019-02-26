import { getAmiibos } from '../getAmiibos.js';
import * as api from '../../utils/api.js';
import { setLoading, setAmiibos, setError } from '../../actions';

describe('getAmiibos', () => {
  const dispatchMock = jest.fn();
  const thunk = getAmiibos();
  const mockAmiibos = [{ name: 'pikachu', id: 1}];

  beforeEach(() => {
    api.fetchItems = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockAmiibos),
        ok: true
      }));
  });

  it('calls dispatch with setLoading', async () => {
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchItems with a url param', async () => {
    await thunk(dispatchMock);
    expect(api.fetchItems).toHaveBeenCalledWith('http://www.amiiboapi.com/api/amiibo/');
  });

  it.skip('should dispatch setAmiibos with amiibo params', async () => {
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(setAmiibos(mockAmiibos));
  });

  it('should dispatch setLoading with a false param', async () => {
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(setLoading(false));
  });

  it.skip('should dispatch setError with an error string param', async () => {
    api.fetchItems = jest.fn(() => { throw new Error('Error fetching data') });
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(setError('Error fetching data'));
    expect(dispatchMock).toHaveBeenCalledWith(setLoading(false));
  });

});