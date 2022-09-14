let ingresar = document.getElementById("login");
let registrar = document.getElementById("registro");
let usReg = document.getElementById("usReg");
let passReg = document.getElementById("passReg");
let usLog = document.getElementById("usLog");
let passLog = document.getElementById("passLog");
let reg = document.getElementById("reg");
let usuarios = []
let form1 = document.getElementById("formulario1");
let form2 = document.getElementById("formulario2");
let formBut = document.getElementById("formEl")

form2.style.display = "none"

formBut.addEventListener("click",()=>{
    form1.style.display = "none";
    form2.style.display = "flex";
})

class Usuario {
    constructor(usuario, contraseña){
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}

registrar.addEventListener("submit", regForm)

function regForm(e){
    e.preventDefault();
    if (passReg.value != "" && usReg.value != ""){
        let nuevoUsuario = new Usuario(usReg.value, passReg.value);
        usuarios.push(nuevoUsuario);
        console.log(usuarios)
        alert("usuario creado correctamente " + usReg.value)
        form1.style.display = "flex";
        form2.style.display = "none";
    }
    else{
        alert("Algún campo esta vacio")
    }
}

ingresar.addEventListener("submit", (e)=>{
    e.preventDefault();
    let us = usLog.value;
    let ps = passLog.value;
    for(let user of usuarios){
        if(us == user.usuario && ps == user.contraseña){
            window.location.href = "cartelera.html";
            localStorage.setItem("usuario", user.usuario)
        }
        else{
            alert("Usuario o contraseña incorrecta");
            console.log("hola")
        }
    }
})
