function validarFormulario() {
    var nuevaContraseña = document.forms["formulario"]["contraseña"].value;
    var repetirContraseña = document.forms["formulario"]["contraseñaRepetida"].value;
    var err = '';

    if (nuevaContraseña == "" || repetirContraseña == "") {
        nuevaContraseña.style.backgroundColor = "#ffb3b3";
        repetirContraseña.style.backgroundColor = "#ffb3b3";
        err = 1;
    }else{
        err = 0;
        correo.style.backgroundColor = "white";
    }

    if (nuevaContraseña != repetirContraseña) {
        correo.style.backgroundColor = "#ffb3b3";
        err = 1;
    }else{
        err = 0;
        correo.style.backgroundColor = "white";
    }

    if(err !== 1){
        return true;
    }else{
        return false;
    }
}