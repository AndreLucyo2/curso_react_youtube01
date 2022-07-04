import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'

//Muda a url e o texto dinamicamente
//to = link para onde vai... 
//text = o que aparece
function LinkButton({ to, text }) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  )
}

export default LinkButton
