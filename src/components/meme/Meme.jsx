import './Meme.css'
import { useState, useEffect } from 'react'

function Meme() {
  const [memes, setMemes] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.imgflip.com/get_memes')
      const info = await res.json()
      setMemes(info.data.memes)
    }

    fetchData().catch(console.error)
  }, [])

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  })

  function handleChange(event) {
    const { name, value } = event.target

    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * memes.length)
    setMeme((prev) => ({
      ...prev,
      randomImage: memes[randomNumber].url,
    }))
  }

  return (
    <main className='form-container'>
      <div className='form'>
        <div className='form-inner-1'>
          <input
            className='form-input'
            type='text'
            placeholder='top text'
            name='topText'
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            className='form-input'
            type='text'
            placeholder='bottom text'
            name='bottomText'
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <div className='form-inner-2'>
          <button className='form-btn' onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
      </div>
      <div className='image-container'>
        <img className='meme-image' src={meme.randomImage} />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme
