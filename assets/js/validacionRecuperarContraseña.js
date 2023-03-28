
const nuevaContraseña = document.getElementById("contraseña");
const repetirContraseña = document.getElementById("contraseñaRepetida");
var err = []


nuevaContraseña.addEventListener("blur", (e) => {
    if (nuevaContraseña.value === '' || nuevaContraseña.value === null) {
        nuevaContraseña.style.backgroundColor = "#ffb3b3";
        err[0] = 1;
    }else{
        err[0] = 0;
        nuevaContraseña.style.backgroundColor = "white";
    }
});

repetirContraseña.addEventListener("blur", (e) => {
    if (repetirContraseña.value === '' || repetirContraseña.value === null || nuevaContraseña.value != repetirContraseña.value) {
        repetirContraseña.style.backgroundColor = "#ffb3b3";
        err[1] = 1;
    }else{
        err[1] = 0;
        repetirContraseña.style.backgroundColor = "white";
    }
});

function canSubmit() {

    if(nuevaContraseña.value === repetirContraseña.value && !err.includes(1)){
        return true;
    }else{
        return false;
    }
}
