import React from "react";

export default function Login(){
    return(
        <div>
            <img>logo</img>
            <div>
                    <form>
                        <InputLabel htmlFor="name">Name:</InputLabel>
                        <Input id="name" aria-actibeby="nombre" />
                        <FormHelperText id="nombre">Tu nombre </FormHelperText>
//----------------------- separador de elementos del formilario--------------------------------
                        <InputLabel htmlFor="psw">Password:</InputLabel>
                        <Input id="psw" type="password" aria-actibeby="password-helper" />
                        <FormHelperText id="password-helper">Escribe tu contrasena</FormHelperText>
//----------------------- separador de elementos del formilario--------------------------------
                        <button>Login</button>
                    </form>
                <p>Haz click </p>
                <link>aqui</link>
                <p> si todavia no te has registrado</p>
            </div>
        </div>
    )
}