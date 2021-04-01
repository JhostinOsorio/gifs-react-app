import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getGifs = async () => {
    const key = 'zIyaGlitChDtWrBX7fWpDCacZ9tLpdsP';
    const url = `https://api.giphy.com/v1/gifs/search?q=Goku&limit=${10}&api_key=${key}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(({ id, title, images }) => (
      {
        id,
        title,
        url: images?.downsized_medium.url,
      }
    ))
    setImages(gifs)
  }

  useEffect(() => {
    getGifs()
  }, [])

  return (
    <>
      <h3>React</h3>
      {images.map( img => (
        <GifGridItem 
          key={img.id}
          {...img}
        />
      ))}
    </>
  )
}

export default GifGrid