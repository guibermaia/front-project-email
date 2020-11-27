import React from 'react';

import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <img src="../img/bg-js-1920.jpg" alt="Girl in a jacket" />
            <div className="login">
                <div className="box-login">
                    <h1>Login!</h1>
                    <div className="input-usuario">
                        <input type="email" placeholder="E-MAIL" />
                        <input type="email" placeholder="CONFIRMA E-MAIL" />
                        <button>LOGAR</button>
                    </div>
                    <p><Link to="/registro">Cadastrar-se</Link></p>
                </div>
            </div>
        </>
    );
}

export default Login;
