import './App.css'
import Navbar from './components/navbar/Navbar'
import Meme from './components/form/Meme'
import memesData from './memeData'

function App() {
  const memes = memesData.data.memes
  return (
    <div className='App'>
      <Navbar />
      <Meme data={memes} />
    </div>
  )
}

export default App
