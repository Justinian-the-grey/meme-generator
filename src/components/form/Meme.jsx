import './Meme.css'
import { useState } from 'react'

/* eslint-disable react/prop-types */
function Meme(props) {
  const memes = props.data
  const [imgSrc, setImgSrc] = useState()
  const [imgWidth, setImgWidth] = useState()
  const [imgHeight, setImgHeight] = useState()
  const [imgAlt, setImgAlt] = useState()

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  function handleMouseClick() {
    let rnd = getRndInteger(0, memes.length)
    let source = memes[rnd].url
    let height = memes[rnd].height
    let width = memes[rnd].width
    let alt = memes[rnd].name

    if (height > 700) {
      height = 700
    }

    if (width > 700) {
      width = 700
    }

    setImgSrc(source)
    setImgWidth(width)
    setImgHeight(height)
    setImgAlt(alt)

    console.log(memes[rnd].url)
  }

  return (
    <div className='form-container'>
      <div className='form'>
        <div className='form-inner-1'>
          <input
            className='form-input'
            type='text'
            placeholder='top text'
          ></input>
          <input
            className='form-input'
            type='text'
            placeholder='bottom text'
          ></input>
        </div>
        <div className='form-inner-2'>
          <input
            className='form-btn'
            type='button'
            value='Get a new meme image  🖼'
            onClick={handleMouseClick}
          ></input>
        </div>
      </div>
      <div className='image-container'>
        <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
      </div>
    </div>
  )
}
/* eslint-enable react/prop-types */

export default Meme
