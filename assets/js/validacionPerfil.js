document.addEventListener("DOMContentLoaded", function() {
    const pais = document.getElementById("pais")
    const ciudad = document.getElementById("ciudad")
    const postal = document.getElementById("postal")
    const direccion = document.getElementById("direccion")
    const telefono = document.getElementById("telefono")
    const dni = document.getElementById("dni")
    const correo = document.getElementById("email")

    //Expresiones regulares para la validación
    const expresiones = {
        pais:  /^[a-zA-Z]{2,50}$/ ,
        ciudad: /^[a-zA-Z ]+$/ ,
        codigoPostal: /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/ ,
        direccion: /^[a-zA-Z0-9\s.,#-]+$/ , 
        telefono: /^\(?(\d{3})\)?(\d{3})(\d{3})$/ ,
        dni: /^\d{8}[a-zA-Z]$/ ,
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }

    pais.addEventListener("blur", (e) => {
        if (!expresiones.pais.test(pais.value)) {
            pais.style.backgroundColor = "#ffb3b3"
        } else {
            pais.style.backgroundColor = "white"
        }
    });
    
    ciudad.addEventListener("blur", (e) => {
        if (!expresiones.ciudad.test(ciudad.value)) {
            ciudad.style.backgroundColor = "#ffb3b3"
        } else {
            ciudad.style.backgroundColor = "white"
        }
    });

    postal.addEventListener("blur", (e) => {
        if (!expresiones.codigoPostal.test(postal.value)) {
            postal.style.backgroundColor = "#ffb3b3"
        } else {
            postal.style.backgroundColor = "white"
        }
    });

    direccion.addEventListener("blur", (e) => {
        if (!expresiones.direccion.test(direccion.value)) {
            direccion.style.backgroundColor = "#ffb3b3"
        } else {
            direccion.style.backgroundColor = "white"
        }
    });

    telefono.addEventListener("blur", (e) => {
        if (!expresiones.telefono.test(telefono.value)) {
            telefono.style.backgroundColor = "#ffb3b3"
        } else {
            telefono.style.backgroundColor = "white"
        }
    });

    dni.addEventListener("blur", (e) => {
        if (!expresiones.dni.test(dni.value)) {
            dni.style.backgroundColor = "#ffb3b3"
        } else {
            dni.style.backgroundColor = "white"
        }
    });

    correo.addEventListener("blur", (e) => {
        if (!expresiones.email.test(email.value)) {
            correo.style.backgroundColor = "#ffb3b3"
        } else {
            correo.style.backgroundColor = "white"
        }
    });
});