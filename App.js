import './App.css'
import ButtonToggle from './components/ButtonToggle'
import IndexHtml from './components/IndexHtml'
import ControlButtonSocial from './components/ControlButtonSocial'

import img1 from './images/Instagram.png'
import img2 from './images/Telegram.png'
import img3 from './images/Twitter.png'
import img4 from './images/Youtube.png'

const array = [img1, img2, img3, img4, img1, img2, img3, img4]

function App() {
  return (
    <div className="App">
      <ButtonToggle />
      <IndexHtml />
      <ControlButtonSocial array={array} />
    </div>
  )
}

export default App
