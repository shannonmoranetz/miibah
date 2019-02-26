import { getAmiibos } from '../getAmiibos.js';
import * as api from '../../utils/api.js';
import { setLoading, setAmiibos, setError } from '../../actions';

describe('getAmiibos', () => {
  const dispatchMock = jest.fn();
  const thunk = getAmiibos();
  const mockAmiibos = [{ name: 'pikachu', id: 1}];

  beforeEach(() => {
    api.fetchItems = jest.fn(() => Promise.resolve({
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

  it('should dispatch setAmiibos with amiibo params', async () => {
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(setAmiibos(mockAmiibos));
  });

  it('should dispatch setLoading with a false param', async () => {
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(setLoading(false));
  });

  it('should dispatch setError with an error string param', async () => {
    api.fetchItems = jest.fn(() => { throw new Error('error') });
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(setError('error'));
    expect(dispatchMock).toHaveBeenCalledWith(setLoading(false));
  });

});