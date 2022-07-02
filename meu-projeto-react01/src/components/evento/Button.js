
//componente filho que recebe o metodo do compoente pai:
function Button(props) {
    return (
        <button onClick={props.event}>
            {props.text}
        </button>
    )
}

export default Button