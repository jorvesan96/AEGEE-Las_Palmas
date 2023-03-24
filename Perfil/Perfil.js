window.addEventListener('DOMContentLoaded', () => {
    const btnEditarPerfil = document.getElementById('editarPerfil');
    const inputs = document.querySelectorAll('input');
  
    btnEditarPerfil.addEventListener('click', () => {
      if (inputs[0].readOnly) {
        inputs.forEach(input => {
          input.readOnly = false;
        });
      } else {
        inputs.forEach(input => {
          input.readOnly = true;
        });
      }
    });
  });
  