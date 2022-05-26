import troll from '../../assets/images/troll_face.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-inner-1'>
        <h3 className='navbar-header'>
          <img src={troll} height='25rem' /> Meme Generator
        </h3>
      </div>
      <div className='navbar-inner-2'>
        <p className='navbar-info'>Create your own memes</p>
      </div>
    </div>
  )
}

export default Navbar
