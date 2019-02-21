export const fetchItems = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(`${response.statusText}, ${response.status}`);
  }
}