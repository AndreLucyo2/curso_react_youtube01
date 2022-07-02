import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Marca 01" />
                <Item marca="Marca 03" />
                <Item marca="Marca 04" />
            </ul>
        </>
    )

}

export default List