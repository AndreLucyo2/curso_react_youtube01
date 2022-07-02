import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Fait" ano_lancamento={1980} />
                <Item marca="Mercedes" ano_lancamento={1985} />
                <Item marca="Renaou" ano_lancamento={1900} />
            </ul>
        </>
    )

}

export default List