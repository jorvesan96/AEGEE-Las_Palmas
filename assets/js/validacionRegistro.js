const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")
const dni = document.getElementById("dni")
const nacimiento = document.getElementById("nacimiento")
const pais = document.getElementById("pais")
const localidad = document.getElementById("localidad")
const universidad = document.getElementById("universidad")
const estudios = document.getElementById("estudios")
const telefono = document.getElementById("telefono")
const correo = document.getElementById("correo")
const rep_correo = document.getElementById("rep_correo")
const contraseña = document.getElementById("contraseña")
const rep_contraseña = document.getElementById("rep_contraseña")

const regex = {
    texto_regex: /^[A-Z][a-z]*([\s]|[A-Z]|[a-z])*$/,
    telefono_reg: /^\(?(\d{3})\)?(\d{3})(\d{3})$/,
    dni_reg: /^\d{8}[a-zA-Z]$/,
    email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}



nombre.addEventListener("blur", (e) => {
    if (!regex.texto_regex.test(nombre.value)) {
        nombre.style.backgroundColor = "#ffb3b3"
    } else {
        nombre.style.backgroundColor = "white"
    }
});

apellidos.addEventListener("blur", (e) => {
    if (!regex.texto_regex.test(apellidos.value)) {
        apellidos.style.backgroundColor = "#ffb3b3"
    } else {
        apellidos.style.backgroundColor = "white"
    }
});


dni.addEventListener("blur", (e) => {
    if (!regex.dni_reg.test(dni.value)) {
        dni.style.backgroundColor = "#ffb3b3"
    } else {
        apellidos.style.backgroundColor = "white"
    }
});

nacimiento.addEventListener("blur", (e) => {
    if (nacimiento.value === '' || nacimiento.value === null) {
        nacimiento.style.backgroundColor = "#ffb3b3"
    } else {
        nacimiento.style.backgroundColor = "white"
    }
});

pais.addEventListener("blur", (e) => {
    if (pais.value === '' || pais.value === null) {
        pais.style.backgroundColor = "#ffb3b3"
    } else {
        pais.style.backgroundColor = "white"
    }
});

localidad.addEventListener("blur", (e) => {
    if (!regex.texto_regex.test(localidad.value)) {
        localidad.style.backgroundColor = "#ffb3b3"
    } else {
        localidad.style.backgroundColor = "white"
    }
});

universidad.addEventListener("blur", (e) => {
    if (!regex.texto_regex.test(universidad.value)) {
        universidad.style.backgroundColor = "#ffb3b3"
    } else {
        universidad.style.backgroundColor = "white"
    }
});

estudios.addEventListener("blur", (e) => {
    if (!regex.texto_regex.test(estudios.value)) {
        estudios.style.backgroundColor = "#ffb3b3"
    } else {
        estudios.style.backgroundColor = "white"
    }
});

telefono.addEventListener("blur", (e) => {
    if (!regex.telefono_reg.test(telefono.value)) {
        telefono.style.backgroundColor = "#ffb3b3"
    } else {
        telefono.style.backgroundColor = "white"
    }
});

correo.addEventListener("blur", (e) => {
    if (!regex.email_reg.test(correo.value)) {
        correo.style.backgroundColor = "#ffb3b3"
    } else {
        correo.style.backgroundColor = "white"
    }
});

rep_correo.addEventListener("blur", (e) => {
    if (!regex.email_reg.test(rep_correo.value) || rep_correo.value != correo.value) {
        rep_correo.style.backgroundColor = "#ffb3b3"
    } else {
        rep_correo.style.backgroundColor = "white"
    }
});

contraseña.addEventListener("blur", (e) => {
    if (contraseña.value === '' || contraseña.value === null) {
        contraseña.style.backgroundColor = "#ffb3b3"
    } else {
        contraseña.style.backgroundColor = "white"
    }
});

rep_contraseña.addEventListener("blur", (e) => {
    if (rep_contraseña.value === '' || rep_contraseña.value === null || contraseña.value != rep_contraseña.value) {
        rep_contraseña.style.backgroundColor = "#ffb3b3"
    } else {
        rep_contraseña.style.backgroundColor = "white"
    }
});
