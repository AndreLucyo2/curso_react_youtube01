import Item from "./Item"


function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1980} />
                <Item marca="Fiat" ano_lancamento={1985} />
                <Item marca="Renault" ano_lancamento={1900} />
                <Item marca="Chevrolet" ano_lancamento="1990" />
            </ul>
        </>
    )

}


export default List