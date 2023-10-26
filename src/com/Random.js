import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';



export const Random = () => {
  
  const Api = `https://api.giphy.com/v1/gifs/random?api_key=QDCbCOM8hMZofnQW4IFjADdMWpOSx5lq&tag=&rating=g`

  const [gif , setGif] = useState('');
  const [loading, setloading] = useState(true);

  async function fetchApi(){
    setloading(true)
    const {data} = await axios.get(Api)
    const randomgif = data.data.images.downsized_large.url;
    setGif(randomgif)
    console.log(randomgif)
    setloading(false)
  }

  useEffect(()=>{
    fetchApi()
  },[])

  function gifHandler(){
    fetchApi()
  }


  return (
    <div className='bg-green-300 px-10 py-3 flex flex-col justify-around items-center mt-10'>
      <h1 className='text-xl font-bold mb-4'>A Random Gifs</h1>
      {loading ? <Spinner/> : <img src={gif} alt='Image' width="300px" ></img>}
      <button className='p-2 bg-slate-400 w-[400px] rounded-lg hover:bg-slate-300 mt-4' onClick={gifHandler}>Generate</button>
    </div>
  )
}

export default Random;