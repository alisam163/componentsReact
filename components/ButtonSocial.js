import styles from './ButtonSocial.module.css'

function ButtonSocial(props) {
  const { srcImg } = props
  return (
    <div className={styles.buttonSocial}>
      <img src={srcImg} />
    </div>
  )
}

export default ButtonSocial
