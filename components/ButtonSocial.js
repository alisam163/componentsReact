import styles from './ButtonSocial.module.css'

function ButtonSocial(props) {
  const { srcImg, urlSocial = '#' } = props
  return (
    <div className={styles.buttonSocial}>
      <a href={urlSocial} target="_blank">
        <img src={srcImg} />
      </a>
    </div>
  )
}

export default ButtonSocial
