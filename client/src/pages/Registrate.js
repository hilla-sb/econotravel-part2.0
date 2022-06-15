import React from "react";
import {Form, Button} from 'react-bootstrap';

export default function Registrate(){
    return(
        <div>
            <img>logo</img>
            <div>
                    <Form>
                        <InputLabel htmlFor="name">Name:</InputLabel>
                        <Input id="name" aria-actibeby="nombre" />
                        <FormHelperText id="nombre">Tu nombre </FormHelperText>
//----------------------- separador de elementos del formilario--------------------------------
                        <InputLabel htmlFor="psw">Password:</InputLabel>
                        <Input id="psw" type="password" aria-actibeby="password-helper" />
                        <FormHelperText id="password-helper">Crea contrasena</FormHelperText>
//----------------------- separador de elementos del formilario--------------------------------
                        <InputLabel htmlFor="psw">Password:</InputLabel>
                        <Input id="psw" type="password" aria-actibeby="password-helper" />
                        <FormHelperText id="password-helper">Repite contrasena</FormHelperText>
                        <Button>Registrate</Button>
                    </Form>
                <p>Haz click </p>
                <Link>aqui</Link>
                <p>si ya te has registrado</p>
            </div>
        </div>
    )
}