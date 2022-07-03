function ListaOutra({ itens }) {
    return (
        <>
            <h3>Lista de itens</h3>
            {itens.length > 0 ? (
                itens.map((item, index) =>
                    <p key={index}> {item}</p>
                )
            ) : (
                <h6>Sem intens para mostrar!</h6>
            )}

        </>
    )
}

export default ListaOutra