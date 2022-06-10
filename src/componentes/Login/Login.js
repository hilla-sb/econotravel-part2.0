import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <div className="login-pg">
            <img src="" alt="">logo</img>
            <div>
                    <Form>{/* (ESTE ES MATERIAL UI!!!!!!!) */}
                        <InputLabel htmlFor="name">Name:</InputLabel>
                        <Input id="name" aria-actibeby="nombre" />
                        <FormHelperText id="nombre">Tu nombre </FormHelperText>
//----------------------- separador de elementos del formulario--------------------------------
                        <InputLabel htmlFor="psw">Password:</InputLabel>
                        <Input id="psw" type="password" aria-actibeby="password-helper" />
                        <FormHelperText id="password-helper"></FormHelperText>
//----------------------- separador de elementos del formulario--------------------------------
                        <Button>Login</Button>
                    </Form>
                <p>Haz click </p>
                <Link>aqui</Link>
                <p>si todavia no te has registrado</p>
            </div>
        </div>
    )
}