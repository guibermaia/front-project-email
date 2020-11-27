import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './login.css';

function RegistroComponent() {
    return (
        <>
            <img src="../img/bg-js-1920.jpg" alt="Girl in a jacket" />
            <div className="login">
                <div className="box-login">
                    <h1>REGISTRE-SE!</h1>
                    <div className="input-usuario">
                        <input type="email" placeholder="E-MAIL" />
                        <input type="email" placeholder="CONFIRMA E-MAIL" />
                        <button>REGISTRAR</button>
                    </div>
                    <p><Link to="#">VOLTAR</Link></p>
                </div>
            </div>
        </>
    );
}

export default RegistroComponent;