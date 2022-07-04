function ProjectForm() {

    return (
        <form>
            <div>
                <input type="text" placeHolder="Insira o nome do projeto" />
            </div>
            <div>
                <input type="number" placeHolder="Insira o orçamento total" />
            </div>
            <div>
                <select name="category_id">
                    <option disable>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto"/>
            </div>
        </form>
    )
}

export default ProjectForm