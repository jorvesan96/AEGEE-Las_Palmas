document.addEventListener("DOMContentLoaded", function() {
    const pais = document.getElementById("pais")
    const ciudad = document.getElementById("ciudad")
    const postal = document.getElementById("postal")
    const direccion = document.getElementById("direccion")
    const telefono = document.getElementById("telefono")
    const dni = document.getElementById("dni")
    const correo = document.getElementById("email")

    var err = []

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
            err[0] = 1
        } else {
            err[0] = 0
            pais.style.backgroundColor = "white"
        }
    });
    
    ciudad.addEventListener("blur", (e) => {
        if (!expresiones.ciudad.test(ciudad.value)) {
            ciudad.style.backgroundColor = "#ffb3b3"
            err[1] = 1
        } else {
            err[1] = 0
            ciudad.style.backgroundColor = "white"
        }
    });

    postal.addEventListener("blur", (e) => {
        if (!expresiones.codigoPostal.test(postal.value)) {
            postal.style.backgroundColor = "#ffb3b3"
            err[2] = 1
        } else {
            err[2] = 0
            postal.style.backgroundColor = "white"
        }
    });

    direccion.addEventListener("blur", (e) => {
        if (!expresiones.direccion.test(direccion.value)) {
            direccion.style.backgroundColor = "#ffb3b3"
            err[3] = 1
        } else {
            err[3] = 0
            direccion.style.backgroundColor = "white"
        }
    });

    telefono.addEventListener("blur", (e) => {
        if (!expresiones.telefono.test(telefono.value)) {
            telefono.style.backgroundColor = "#ffb3b3"
            err[4] = 1
        } else {
            err[4] = 0
            telefono.style.backgroundColor = "white"
        }
    });

    dni.addEventListener("blur", (e) => {
        if (!expresiones.dni.test(dni.value)) {
            dni.style.backgroundColor = "#ffb3b3"
            err[5] = 1
        } else {
            err[5] = 0
            dni.style.backgroundColor = "white"
        }
    });

    correo.addEventListener("blur", (e) => {
        if (!expresiones.email.test(email.value)) {
            correo.style.backgroundColor = "#ffb3b3"
            err[6] = 1
        } else {
            err[6] = 0
            correo.style.backgroundColor = "white"
        }
    });

    function canSubmit(){

        if (!err.includes(1)) {
            return true;
        }
        return false;
    }
});

