import { fetchItems } from './api';

describe('api', () => {
  let mockReturned;
  let mockURL;
  beforeEach(() => {
    mockReturned = { amiibo: 'amiibo' };
    mockURL = 'http://localhost:3000';
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockReturned),
        ok: true
      })
    )
  })

  it('should call fetch with correct params', () => {
    fetchItems(mockURL);
    expect(window.fetch).toHaveBeenCalledWith(mockURL);
  });

  it('should return data if response ok', async () => {
    const results = await fetchItems(mockURL);
    expect(results).toEqual(mockReturned.amiibo);
  });

  it('should throw an error if response is not ok', async () => {
    const expectedError = Error('Error fetching data');
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        body: 'Error fetching data'
      })
    );
    await expect(fetchItems(mockURL)).rejects.toEqual(expectedError);
  });
});