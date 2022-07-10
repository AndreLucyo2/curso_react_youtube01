import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({ btnText }) {

    const [categories, setCategories] = useState([]);

    //buscar as categorias da api fake:
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json()).then((data) => {
            setCategories(data);
        }).catch((erro) => console.log(erro))
    }, [])


    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />

            <Input
                type="number"
                text="Nome do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />

            <Select
                text="Selecione a categoria"
                name="category_id"
                options={categories}
            />

            <SubmitButton text={btnText} />

        </form>
    )
}

export default ProjectForm