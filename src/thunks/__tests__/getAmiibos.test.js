import { getAmiibos } from '../getAmiibos.js';
import * as api from '../../utils/api.js';
import { setLoading } from '../../actions';

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
    expect(api.fetchItems).toHaveBeenCalled();
  });

  it('should dispatch setLoading with a false param', async () => {
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(setLoading(false));
  });
});