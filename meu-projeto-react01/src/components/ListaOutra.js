function ListaOutra({ itens }) {
    return (
        <>
            <h3>Lista de itens</h3>
            {itens.length > 0 ? (
                itens.map((item, index) =>
                    <p key={index}> {item}</p>
                )
            ) : (
                <h4>Sem intens para mostrar!</h4>
            )}

        </>
    )
}

export default ListaOutra