var users = '';

fetch('/assets/json/user.json')
    .then(results => results.json())
    .then(data => {
        users = data;
    });

const correo = document.getElementById("email");

var err = '';

const email_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

correo.addEventListener("blur", (e) => {
    if (correo.value === '' || correo.value === null || (!email_reg.test(correo.value))) {
        correo.style.backgroundColor = "#ffb3b3";
        err = 1;
    } else {
        err = 0;
        correo.style.backgroundColor = "white";
    }
});

function canSubmit() {

    for (let i = 0; i < users.usuarios.length; i++) {
        if (users.usuarios[i].email === correo.value && err !== 1) {
            return true;
        }
    }
    return false;
}
