window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/assets/json/user.json', true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        var user = xhr.response;
        document.getElementById('pais').value = user.pais;
        document.getElementById('ciudad').value = user.ciudad;
        document.getElementById('postal').value = user.postal;
        document.getElementById('direccion').value = user.direccion;
        document.getElementById('telefono').value = user.telefono;
        document.getElementById('dni').value = user.dni;
        document.getElementById('email').value = user.email;
      } else {
        console.error('Error al obtener el archivo JSON.');
      }
    };
    xhr.send();
}
