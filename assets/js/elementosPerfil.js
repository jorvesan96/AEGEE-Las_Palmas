window.onload = function() {
  //Solicitud HTTP asíncronas desde el navegador web.
    var xhr = new XMLHttpRequest();
  //Configura la solicitud HTTP que se va a enviar al servidor web
    xhr.open('GET', '/assets/json/user.json', true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        var users = xhr.response.usuarios;
        var user = users[0]; //Seleccionamos el primer usuario de la matriz de usuarios.
        
        document.getElementById('pais').value = user.pais;
        document.getElementById('ciudad').value = user.ciudad;
        document.getElementById('postal').value = user.postal;
        document.getElementById('direccion').value = user.direccion;
        document.getElementById('telefono').value = user.telefono;
        document.getElementById('dni').value = user.dni;
        document.getElementById('email').value = user.email;

        const nombre = user.nombre;
        const apellidos = user.apellidos;
        document.getElementById('nombre').textContent = `${nombre}, ${apellidos}`;
          
      } else {
        console.error('Error al obtener el archivo JSON.');
      }
    };
    xhr.send();
}
