import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Container from '../layout/Container'

import Message from "../layout/Message"

import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'


import styles from './Projects.module.css'

function Projects() {

  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState('')

  //valida se recebeu alguma mensagem através do hook/state
  const location = useLocation()
  let message = ''
  if (location.state) {
    //Se tiver mensagem atribui na variavel
    message = location.state.message
  }

  //faz o request para pegar os projetos:
  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch('http://localhost:5000/projects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
          }),
      100,
    )
  }, [])


  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Projeto removido com sucesso!')
      })
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              handleRemove={removeProject}
            />
          ))}
      </Container>

    </div>
  )
}

export default Projects