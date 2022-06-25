export const request = (url) => fetch(url)
  .then((response) => response.json())
// Abstracted fetching, trying to be independent of fetching implementation, be it built-in or something else
