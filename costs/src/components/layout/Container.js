import styles from './Container.module.css'

//https://youtu.be/yBWOIq_1i_Y?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&t=614
function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  )
}

export default Container
