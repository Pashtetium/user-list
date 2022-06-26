export const request = (url, options) => fetch(url, options)
  .then((response) => response.json())
// Abstracted fetching, trying to be independent of fetching implementation, be it built-in or something else
