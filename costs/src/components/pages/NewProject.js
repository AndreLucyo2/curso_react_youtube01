//Substitua "import { useHistory }" por "import { useNavigate }"
import { useNavigate  } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

  //permite fazer redirects, redireciona para outras paginas
  const navegate = useNavigate();

  function createPost(project) {

    // initialize cost and services
    project.cost = 0;
    project.services = [];//adiciona ou remove novos serviços - deve ficar no backend

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      //manda os dados por post para o servidor
      body: JSON.stringify(project),

    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //faz o redirect:
        navegate('/projects',{state:{ message: 'Projeto criado com sucesso!'}})
      })
  }

  return (
    <div className={styles.newproject_container} >
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}

export default NewProject