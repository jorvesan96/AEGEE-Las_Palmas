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

pais.addEventListener("blur", function () {
    if (!expresiones.pais.test(pais.value)) {
      alerta("El campo País solo permite letras.", "rojo");
      pais.classList.add("invalid");
    } else {
      pais.classList.remove("invalid");
    }
});
  
ciudad.addEventListener("blur", function () {
    if (!expresiones.ciudad.test(ciudad.value)) {
        alerta("El campo Ciudad solo permite letras.", "rojo");
        ciudad.classList.add("invalid");
    } else {
        ciudad.classList.remove("invalid");
    }
});

postal.addEventListener("blur", function () {
    if (!expresiones.codigoPostal.test(postal.value)) {
        alerta("El campo Codigo Postal es inválido.", "rojo");
        postal.classList.add("invalid");
    } else {
        postal.classList.remove("invalid");
    }
});

direccion.addEventListener("blur", function () {
    if (!expresiones.direccion.test(direccion.value)) {
        alerta("El campo Direccion solo permite letras y espacios.", "rojo");
        direccion.classList.add("invalid");
    } else {
        direccion.classList.remove("invalid");
    }
});

telefono.addEventListener("blur", function () {
    if (!expresiones.telefono.test(telefono.value)) {
        alerta("El campo Telefono solo permite números.", "rojo");
        telefono.classList.add("invalid");
    } else {
        telefono.classList.remove("invalid");
    }
});

dni.addEventListener("blur", function () {
    if (!expresiones.dni.test(dni.value)) {
        alerta("El campo DNI solo permite números y una letra.", "rojo");
        dni.classList.add("invalid");
    } else {
        dni.classList.remove("invalid");
    }
});

correo.addEventListener("blur", function () {
    if (!expresiones.email.test(email.value)) {
        alerta("El campo Email solo permite letras.", "rojo");
        email.classList.add("invalid");
    } else {
        email.classList.remove("invalid");
    }
});
  
function alerta(mensaje, color) {
    const div = document.createElement("div");
    div.classList.add("alerta");
    div.classList.add(color);
    div.textContent = mensaje;
    const formulario = document.querySelector("form");
    formulario.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, 3000);
}

function validarInput(input, expresion, mensaje) {
    if (!expresion.test(input.value)) {
        input.classList.add("invalid");
        const span = input.parentElement.querySelector(".error");
        span.textContent = mensaje;
        span.style.display = "block";
        alerta(mensaje, "error"); // llamada a la función alerta en caso de error
        return false;
    } else {
        input.classList.remove("invalid");
        const span = input.parentElement.querySelector(".error");
        span.textContent = "";
        span.style.display = "none";
        return true;
    }
}