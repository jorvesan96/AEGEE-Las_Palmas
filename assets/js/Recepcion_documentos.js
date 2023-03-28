const fichero = document.getElementById("fichero")
const dni = document.getElementById("dni")

const dni_reg = /^\d{8}[a-zA-Z]$/
var err = [1, 1]

fichero.addEventListener("blur", (e) => {
    if (!validar_archivo(fichero)) {
        fichero.style.backgroundColor = "#ffb3b3"
        err[0] = 1
    } else {
        fichero.style.backgroundColor = "white"
        err[0] = 0
    }
});

dni.addEventListener("blur", (e) => {
    if (!dni_reg.test(dni.value) || dni.value === '' || dni.value === null) {
        dni.style.backgroundColor = "#ffb3b3"
        err[1] = 1
    } else {
        dni.style.backgroundColor = "white"
        err[1] = 0
    }
});

function validar_archivo(input) {
    var extensiones_permitidas = [".pdf", ".doc", ".docx", ".jpg", ".png"];
    var ruta = input.value;
    var extension = ruta
        .substring(ruta.lastIndexOf("."))
        .toLowerCase();
    if (extensiones_permitidas.includes(extension)) {
        return true;
    } else {
        return false;
    }
}

function enviar_datos() {
    if (err.includes(1)) return false

    return true;
}