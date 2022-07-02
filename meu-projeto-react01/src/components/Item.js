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
    ano_lancamento: PropTypes.number
}



export default Item