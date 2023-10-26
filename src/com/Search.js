import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';


export const Search = () => {

  const [gif, setGif] = useState('');
  const [loading, setloading] = useState(true);
  const [tag, setTag] = useState();

  const url = `https://api.giphy.com/v1/gifs/random?api_key=QDCbCOM8hMZofnQW4IFjADdMWpOSx5lq&tag=${tag}`

  async function fetchApi() {
    setloading(true)
    const { data } = await axios.get(url)
    const randomgif = data.data.images.downsized_large.url;
    setGif(randomgif)
    console.log(randomgif)
    setloading(false)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  async function gifHandler() {
    fetchApi()
  }


  function searchHandler(e) {
    setTag(e.target.value)
  }


  return (
    <div className='bg-green-300 px-10 py-3 flex flex-col justify-around items-center mt-10'>
      <h1 className='text-xl font-bold mb-4'>Random {tag} Gifs</h1>
      {loading ? <Spinner /> : <img src={gif} alt='Image' width="300px" ></img>}
      <input placeholder="Enter Gif Name" className='p-2 bg-slate-100    w-[400px] rounded-lg hover:bg-slate-300 mt-4 text-center' onChange={searchHandler}></input>
      <button className='p-2 bg-slate-400 w-[400px] rounded-lg hover:bg-slate-300 mt-4' onClick={gifHandler}>Generate</button>
    </div>
  )
}


export default Search;