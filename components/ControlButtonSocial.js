import styles from './ControlButtonSocial.module.css'
import ButtonSocial from './ButtonSocial'
import { useState } from 'react'

function ControlButtonSocial(props) {
  const { array } = props

  const arrayLength = array.length
  console.log(arrayLength)
  const [show, setShow] = useState(false)

  const divStyle = {
    width: '30px',
    height: '30px',
    backgroundColor: 'aqua',
    margin: '0px',
    overflow: 'hidden',
    borderRadius: '20px',
    transition: 'width 1s',
    alignSelf: 'center',
  }

  const divStyleHover = {
    width: 25 * arrayLength,
    height: '30px',
    backgroundColor: 'aqua',
    margin: '0px',
    overflow: 'hidden',
    borderRadius: '20px',
    transition: 'width 1s',
  }
  console.log(divStyle)

  const handlerMouseEnter = (event) => {
    event.preventDefault()
    setShow(true)
  }

  const handlerMouseOver = (event) => {
    event.preventDefault()
    setShow(false)
  }

  return (
    <div className={styles.wrapper}>
      <div
        style={show ? divStyleHover : divStyle}
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseOver}
      >
        {show ? (
          array.map((elem, index) => <ButtonSocial key={index} srcImg={elem} />)
        ) : (
          <ButtonSocial srcImg={array[0]} />
        )}
      </div>
    </div>
  )
}

export default ControlButtonSocial
