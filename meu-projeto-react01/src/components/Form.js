function Form() {

    //https://youtu.be/uqmRi4JXk3s?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&t=505
    //Evento: 
    function cadastrarUsuario(event) {
        //para poder pegar o evendo de retorno do compoente:
        //Permance na pagian e nao envia... permanece no front
        event.preventDefault();
        alert('Cadastraou usuário!')
        console.log('Cadastrado com sucesso!')
    }


    //Retorno o evento ---------------------------------------
    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <div>
                        <input type="text" placeholder="Digite o seu nome" />
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </div>
            </form>
        </div>
    )

}

export default Form