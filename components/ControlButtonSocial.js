import styles from './ControlButtonSocial.module.css'
import ButtonSocial from './ButtonSocial'
import { useState } from 'react'

function ControlButtonSocial(props) {
  const { array } = props
  const arrayLength = array.length
  const [show, setShow] = useState(false)

  const divStyle = {
    width: '30px',
    height: '30px',
    backgroundColor: 'aqua',
    margin: '0px',
    overflow: 'hidden',
    borderRadius: '20px',
    transition: 'width 0.5s',
    alignSelf: 'center',
  }

  const divStyleHover = {
    width: 25 * arrayLength,
    height: '30px',
    backgroundColor: 'aqua',
    margin: '0px',
    overflow: 'hidden',
    borderRadius: '20px',
    transition: 'width 0.5s',
  }

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
          array.map((elem, index) => (
            <ButtonSocial
              key={index}
              srcImg={elem.srcImg}
              urlSocial={elem.urlSocial}
            />
          ))
        ) : (
          <ButtonSocial srcImg={array[0].srcImg} />
        )}
      </div>
    </div>
  )
}

export default ControlButtonSocial
