import { useState } from 'react'
import styles from './ButtonToggle.module.css'

function ButtonToggle() {
  const [turned, setTurned] = useState(true)
  console.log(turned)
  const handlerToggleClick = (event) => {
    event.preventDefault()
    setTurned(!turned)
  }
  return (
    <div
      className={turned ? styles.buttonToggleOn : styles.buttonToggleOff}
      onClick={handlerToggleClick}
    >
      <div>
        <div className={turned ? styles.circleOn : styles.circleOff} />
        <span className={turned ? styles.titleOn : styles.titleOff}>
          {turned ? 'On' : 'Off'}
        </span>
      </div>
    </div>
  )
}

export default ButtonToggle
