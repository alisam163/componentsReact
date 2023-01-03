import styles from './ButtonSocial.module.css'

function ButtonSocial(props) {
  const { srcImg, urlSocial = '#' } = props

  const urlSite = 'http://' + urlSocial
  return (
    <div className={styles.buttonSocial}>
      <a href={urlSite} target="_blank">
        <img src={srcImg} />
      </a>
    </div>
  )
}

export default ButtonSocial
