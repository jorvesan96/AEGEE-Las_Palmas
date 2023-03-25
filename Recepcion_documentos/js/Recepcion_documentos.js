function enviar_datos(){
    if (archivo_seleccionado(document.getElementById("fichero")) && validar_dni(document.getElementById("dni").value)){
        if(clasificarArchivo() == 1){
            alert("El archivo es de tipo Registro");
        }else{
            alert("El archivo es de tipo Actividad");
        }
            alert("Archivo enviado correctamente");
    }
    else{
        alert("No se pudo enviar el archivo");
        return false;
    }
}

function validar_dni(dni){
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(dni);
}

function archivo_seleccionado(input) {
    if (input.files.length == 1 && validar_archivo(input)) {
        return true;
    } else {
        alert("No se ha seleccionado ningún archivo o el archivo seleccionado no es válido");
        return false;
    }
  }

function validar_archivo(input) {
    var extensiones_permitidas = [".pdf", ".doc", ".docx", ".jpg", ".png"];
    var ruta = input.value;
    var extension = ruta
    .substring(ruta.lastIndexOf("."))
    .toLowerCase();
    if (extensiones_permitidas.includes(extension)) {
        return true;
    } else {
        alert("El tipo archivo seleccionado no es válido");
        return false;
}
}
function clasificarArchivo() {
    var radio1 = document.getElementById('cbox1');
    var radio2 = document.getElementById('cbox2');
    if (radio1.checked) {
      return 1;
    } else if (radio2.checked) {
      return 2;
    } else {
      return 0;
    }
  }
  