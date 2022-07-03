
function Saudacao({ nome }) {

    //recebe dado e manipula:
    function gerarSaudacao(algumNome) {
        return (
            `Olá, ${algumNome}, tudo bem?`
        )
    }

    //Recebe o dado do componente pai:
    return (
        //Só deve rendereizar caso receber um nome:
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao