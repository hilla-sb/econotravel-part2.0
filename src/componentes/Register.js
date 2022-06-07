import React from "react";

export default function registrate(){
    return(
        <div>
            <img>logo</img>
            <div>
                <form>{/* (ESTE ES MATERIAL UI!!!!!!!) */}
                    <InputLabel htmlFor="name">Name:</InputLabel>
                    <Input id="name" aria-actibeby="nombre" />
                    <FormHelperText id="nombre">Tu nombre </FormHelperText>
//----------------------- separador de elementos del formulario--------------------------------
                    <InputLabel htmlFor="psw">Password:</InputLabel>
                    <Input id="psw" type="password" aria-actibeby="password-helper" />
                    <FormHelperText id="password-helper">Crea contrasena</FormHelperText>
//----------------------- separador de elementos del formulario--------------------------------
                    <InputLabel htmlFor="psw">Password:</InputLabel>
                    <Input id="psw" type="password" aria-actibeby="password-helper" />
                    <FormHelperText id="password-helper">Repite contrasena</FormHelperText>
                    <button>Registrate</button>
                </form>
                <p>Haz click </p>
                <link>aqui</link>
                <p>si ya te has registrado</p>
            </div>
        </div>
    )
}