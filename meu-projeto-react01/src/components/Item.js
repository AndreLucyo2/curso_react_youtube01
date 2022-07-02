import PropTypes from 'prop-types'

function Item({ marca, ano_lancamento }) {

    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )

}

//Validação da propriedade:
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

//Valores default no front caso nao informado usado quando espera carregar os dado
Item.defaultProps ={
    marca:'faltou a marca',
    ano_lancamento: 0,
}



export default Item