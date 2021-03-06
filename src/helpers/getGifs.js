export const getGifs = async (category) => {
  const key = 'zIyaGlitChDtWrBX7fWpDCacZ9tLpdsP';
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${10}&api_key=${key}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(({ id, title, images }) => (
    {
      id,
      title,
      url: images?.downsized_medium.url,
    }
  ));
  return gifs;
}