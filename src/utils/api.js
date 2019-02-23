export const fetchItems = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (response.ok) {
    const results =  await response.json();
    return results.amiibo;
  } else {
    throw new Error(`${response.statusText}, ${response.status}`);
  }
}