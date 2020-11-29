import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './login.css';

function LoginComponent() {
    return (
        <>
            <img src="../img/bg-js-1920.jpg" alt="Girl in a jacket" />
            <div className="login">
                <div className="box-login">
                    <h1>Login!</h1>
                    <div className="input-usuario">
                        <input type="email" placeholder="E-MAIL" />
                        <input type="password" placeholder="SENHA" />
                        <button>LOGAR</button>
                    </div>
                    <p><Link to="/registro">Cadastrar-se</Link></p>
                </div>
            </div>
        </>
    );
}

export default LoginComponent;