import { useState, useEffect } from 'react'

import styles from './Message.module.css'

//o type monta o nome do css
function Message({ type, msg }) {
  //Controla a visibilidade, setando um time
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    //se a mensagem nao existe...
    if (!msg) {
      setVisible(false)
      return
    }

    //se tiver mensagem deixa visivel:
    setVisible(true)

    //inicia o timer:
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000)

    //Finaliza i timer e retorna...
    return () => clearTimeout(timer);

  }, [msg])

  return (
    //usa o fragment para aplicar a condição de visibilidade:
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  )
}

export default Message
