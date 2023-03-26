var users = ''

fetch('/assets/json/user.json')
    .then(results => results.json())
    .then(data => {
        users = data;
    })


const correo = document.getElementById("email")
const contraseña = document.getElementById("password")
const boton = document.getElementById("acceso")

var err = []

const email_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
correo.addEventListener("blur", (e) => {
    if (correo.value === '' || correo.value === null || (!email_reg.test(correo.value))) {
        correo.style.backgroundColor = "#ffb3b3"
        err[0] = 1
    } else {
        err[0] = 0
        correo.style.backgroundColor = "white"
    }
});
contraseña.addEventListener("blur", (e) => {
    if (contraseña.value === '' || contraseña.value === null) {
        contraseña.style.backgroundColor = "#ffb3b3"
        err[0] = 1
    } else {
        err[1] = 0
        contraseña.style.backgroundColor = "white"
    }
});

function canSubmit() {

    for (let i = 0; i < users.usuarios.length; i++) {
        if (users.usuarios[i].email === correo.value && users.usuarios[i].contraseña === contraseña.value && !err.includes(1)) {
            return true;
        }
    }
    return false;
}