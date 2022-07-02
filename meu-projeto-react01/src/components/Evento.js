import Button from "./evento/Button";

//Componente pai:
function Evento() {

    //Logica do evento ---------------------------------------
    function meuEvento(){
        console.log('Ativando primeiro evento');
        alert(`Ativando primeiro evento!`);
    }

    //Mesmo evendo para componentes diferentes:
    function segundoEvento(){
        console.log('Ativando segundo evento');
        alert(`Ativando segundo evento!`);
    }
          
    //Retorno o evento ---------------------------------------
    return (
        <div>
            <p>Clique aqui para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro evendo"/>
            <Button event={segundoEvento} text="Segundo evendo"/>
        </div>
    )

}

export default Evento