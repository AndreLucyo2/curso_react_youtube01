import { useState } from 'react'

function Condicional() {

    const [email, setEmail] = useState();

    //recebe o email puro para validação
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();

        setUserEmail(email);

        alert(`Testtando ${userEmail}`)
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="Digite o seu e-mail..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>
                    Enviar e-mail
                </button>
            </form>
            {userEmail}

        </div>

    )
}

export default Condicional