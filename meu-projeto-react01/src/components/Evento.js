import Button from "./evento/Button";

//Componente pai:
function Evento() {

    //Logica do evento ---------------------------------------
    function meuEvento(){
        console.log('Ativando primeiro evento');
        alert(`Ativando primeiro evento!`);
    }
          
    //Retorno o evento ---------------------------------------
    return (
        <div>
            <p>Clique aqui para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro evendo"/>
        </div>
    )

}

export default Evento