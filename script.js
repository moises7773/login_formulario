const goLogin = document.querySelectorAll(".cambioLogin");
const bienvenida = document.querySelector("#bienvenida");
const login = document.querySelector("#login")
const registro = document.querySelector("#registro")
const goRegistro = document.querySelectorAll (".cambioRegistro")
function irLogin (){
    bienvenida.style.display = "none";
    registro.style.display = "none";
    login.style.display = "flex"
}
goLogin.forEach(function (boton){
    boton.addEventListener("click", irLogin)
})

function irRegistro (){
    bienvenida.style.display = "none";
    registro.style.display = "flex";
    login.style.display = "none"
}
goRegistro.forEach(function (boton){
    boton.addEventListener("click", irRegistro)
})


//registro

const crearContraseña = document.querySelector("#crearContraseña");
const longitud = document.querySelector("#longitud");
const mayuscula = document.querySelector("#mayuscula");
const numero = document.querySelector("#numero");
const especial = document.querySelector("#especial");

crearContraseña.addEventListener("input", validarContraseña);

function validarContraseña(){

    const contraseña = crearContraseña.value;
    const tieneLongitud = contraseña.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(contraseña);
    const tieneNumero = /[0-9]/.test(contraseña);
    const tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contraseña);
    if(tieneLongitud){
        longitud.textContent = "✅ Mínimo 8 caracteres";
    }
    else{
        longitud.textContent = "❌ Mínimo 8 caracteres";
    }
    if(tieneMayuscula){
        mayuscula.textContent = "✅ Una mayúscula";
    }
    else{
        mayuscula.textContent = "❌ Una mayúscula";
    }
    if(tieneNumero){
        numero.textContent = "✅ Un número";
    }
    else{
        numero.textContent = "❌ Un número";
    }
    if(tieneEspecial){
        especial.textContent = "✅ Un carácter especial";
    }
    else{
        especial.textContent = "❌ Un carácter especial";
    }
    return (
        tieneLongitud &&
        tieneMayuscula &&
        tieneNumero &&
        tieneEspecial
    );

}


const inputUsuario = document.querySelector("#crearUsuario");
const inputCorreo = document.querySelector("#crearCorreo");
const inputContraseña = document.querySelector("#crearContraseña");
const formularioRegistro = document.querySelector("#formulario2");

formularioRegistro.addEventListener("submit",registrarUsuario);

function registrarUsuario(evento){
    evento.preventDefault();
    if(!validarContraseña()){
        alert("La contraseña no cumple los requisitos");
        return;
    }
    const usuario = {
        nombre: inputUsuario.value,
        correo: inputCorreo.value,
        password: inputContraseña.value
    };
    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );
    alert("Usuario registrado");
}

const usuarioGuardado =
JSON.parse(
    localStorage.getItem("usuario")
);

// login

    const validarPassword = document.querySelector("#contraseña")
    const validarEmail = document.querySelector("#email")
    const formularioLogin = document.querySelector("#formulario1")

    formularioLogin.addEventListener("submit", verificarDatos)
    function verificarDatos(evento){
        evento.preventDefault()
        if ((usuarioGuardado.correo === validarEmail.value.trim()) && (usuarioGuardado.password === validarPassword.value.trim())){
            alert(`bienvenido ${usuarioGuardado.nombre}`)
        }
        else {
            alert("correo o contraseña incorrectos ")
        }
    }

