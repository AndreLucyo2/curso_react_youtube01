import { useState } from 'react'

function Form() {

    //usando o hook para pegar os dados da tela:
    const [name, setName] = useState();
    const [pasword, setPasword] = useState();

    //https://youtu.be/uqmRi4JXk3s?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&t=505
    //Evento: 
    function cadastrarUsuario(event) {
        //para poder pegar o evendo de retorno do compoente:
        //Permance na pagian e nao envia... permanece no front
        event.preventDefault();

        //captura o que informado na tela:
        alert(`Cadastrou usuário! \nNome:  ${name}\nSenha:  ${pasword}`)
        console.log(`Cadastrado com sucesso! \nNome:  ${name}\nSenha:  ${pasword}`)
    }

    //Retorno o evento ---------------------------------------
    return (
        <div>
            <h2>Meu cadastro:</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input type="text"
                            id="name"
                            name="name"
                            data-cy="inputName"
                            placeholder="Digite o seu nome"
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <div>
                        <label htmlFor="password">Senha:</label>
                        <input type="password"
                            id="password"
                            name="password"
                            data-cy="inputPassword"
                            placeholder="Digite a sua senha"
                            onChange={(e) => setPasword(e.target.value)}
                        />
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