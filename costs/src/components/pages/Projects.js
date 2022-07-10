import Message from "../layout/Message"
import { useLocation } from 'react-router-dom'

function Projects() {

  //valida se recebeu alguma mensagem através do hook/state
  const location = useLocation()
  let message = ''
  if (location.state) {
    //Se tiver mensagem atribui na variavel
    message = location.state.message
  }

  return (
    <div>
    <h1>Meus projetos</h1>
    {message && <Message type="success" msg={message} />}
  </div>
  )
}

export default Projects