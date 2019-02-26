export const fetchItems = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const results =  await response.json();
    return results.amiibo;
  } else {
   throw new Error('Error fetching data');
  }
}