import React from "react";

export default function Login(){
    return(
        <div className="login-pg">
            <img src="" alt="">logo</img>
            <div>
                    <form>{/* (ESTE ES MATERIAL UI!!!!!!!) */}
                        <InputLabel htmlFor="name">Name:</InputLabel>
                        <Input id="name" aria-actibeby="nombre" />
                        <FormHelperText id="nombre">Tu nombre </FormHelperText>
//----------------------- separador de elementos del formulario--------------------------------
                        <InputLabel htmlFor="psw">Password:</InputLabel>
                        <Input id="psw" type="password" aria-actibeby="password-helper" />
                        <FormHelperText id="password-helper"></FormHelperText>
//----------------------- separador de elementos del formulario--------------------------------
                        <button>Login</button>
                    </form>
                <p>Haz click </p>
                {/* <link>aqui</link> */}
                <p>si todavia no te has registrado</p>
            </div>
        </div>
    )
}