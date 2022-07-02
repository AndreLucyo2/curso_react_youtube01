function Evento({numero}) {

    //Logica do evento ---------------------------------------
    function meuEvento(){
        console.log('Opa fui ativado');
        alert(`Evendo ${numero} ativado com sucesso!`);
    }
      
    
    //Retorno o evento ---------------------------------------
    return (
        <div>
            <p>Clique aqui para disparar um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )

}

export default Evento