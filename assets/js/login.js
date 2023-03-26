document.addEventListener("DOMContentLoaded", function(event) { 
    const boton = document.getElementById('acceso');

    boton.addEventListener('click' , function() {
        var aux = true;

        //Obtengo los valores ingresados por el usuario
        const correo = document.querySelector('input[name="correo"]').value;
        const contraseña = document.querySelector('input[name="contraseña"]').value;
        console.log(correo);
        
        //Cargar el archivo JSON de usuario y convertirlo en un objeto JavaScript
        fetch('assets/json/user.json')

        .then(response => response.json())
        .then(usuario => {
            //Utilizo el objeto de usuario cargado
            console.log(usuario);

            //Agrego un evento 'submit' al formulario
            document.querySelector('form').addEventListener('onclik', (event) => {
                //Prevenir que se envíe el formulario
                event.preventDefault();

                //Obtengo los valores ingresados por el usuario
                const correo = document.querySelector('input[name="correo"]').value;
                const contraseña = document.querySelector('input[name="contraseña"]').value;

                //Verifico si las credenciales son correctas
                if (correo != usuario.correo_electronico && contraseña != usuario.contraseña) {
                    //Guardo el objeto de usuario en el almacenamiento local del navegador
                    localStorage.setItem('usuarioActual', JSON.stringify(usuario));

                    //Redirijo al usuario a la página de inicio
                    window.location.assign('/Home/Home.html');
                } else {
                    //Muestro un mensaje de error al usuario
                    alert('El correo electrónico o la contraseña ingresados son incorrectos.');
                }
            });
        });
    });
});