import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([]);

    //se vem os dados do projeto, usa eles , caso contrario iniciar objeto vazio
    const [project, setProject] = useState(projectData || {});

    //buscar as categorias da api fake:
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data);
            }).catch((erro) => console.log(erro))
    }, [])

    //metodo que submete o form: https://youtu.be/gIWmB3EV4Bo?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&t=468
    const submit = (e) => {
        //nao usa o pagereload
        e.preventDefault();
        //Executa o metodo recebido pela prope passa o projeto como argumento
        handleSubmit(project);
    }

    //passa os dados para os inputs: metodo dinamico para refletir na tela as alterações no imput
    function handleChange(e) {
        //cria um novo projeto:
        setProject({ ...project, [e.target.name]: e.target.value });
        //console.log(project)
    }

    //metodo dinamico para selects e refletir na tela
    function handleCategory(e) {
        //cria um novo projeto:
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
        console.log(project);

    }


    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />

            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />

            <Select
                text="Selecione a categoria"
                name="category_id"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            <SubmitButton text={btnText} />

        </form>
    )
}

export default ProjectForm