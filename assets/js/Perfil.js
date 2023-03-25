window.addEventListener('DOMContentLoaded', () => {
  const btnEditarPerfil = document.getElementById('editarPerfil');
  const inputs = document.querySelectorAll('input');
  // Variable que indica si se están editando los campos o no
  let editando = false; 

  btnEditarPerfil.addEventListener('click', () => {
    // Cambia el valor de la variable cada vez que se hace clic en el botón
    editando = !editando; 
    
    if (editando) {
      // Cambia el texto del botón a "Guardar cambios"
      btnEditarPerfil.textContent = 'Guardar cambios'; 
      inputs.forEach(input => {
        input.readOnly = false;
      });
    } else {
      // Cambia el texto del botón a "Editar perfil"
      btnEditarPerfil.textContent = 'Editar perfil'; 
      inputs.forEach(input => {
        input.readOnly = true;
      });
    }
  });
});
