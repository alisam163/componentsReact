import './App.css'
import ButtonToggle from './components/ButtonToggle'
import IndexHtml from './components/IndexHtml'
import ControlButtonSocial from './components/ControlButtonSocial'

import img1 from './images/Instagram.png'
import img2 from './images/Telegram.png'
import img3 from './images/Twitter.png'
import img4 from './images/Youtube.png'

const imgObj = {
  srcImg: img1,
  urlSocial: 'site-1.ru',
}

const imgObj2 = {
  srcImg: img2,
  urlSocial: 'site-2.ru',
}

const imgObj3 = {
  srcImg: img3,
  urlSocial: 'site-3.ru',
}

const imgObj4 = {
  srcImg: img4,
  urlSocial: 'site-4.ru',
}

const array = [imgObj, imgObj2, imgObj3, imgObj4]

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
