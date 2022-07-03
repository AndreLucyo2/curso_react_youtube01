function ListaOutra({ itens }) {
    return (
        <>
            <h3>Lista de itens</h3>
            {itens.map((item, index) =>
                <p key={index}> {item}</p>
            )}
        </>
    )
}

export default ListaOutra