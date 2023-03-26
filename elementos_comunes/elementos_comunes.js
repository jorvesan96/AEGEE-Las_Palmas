class MyHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <header>
        <a class="icono_aegee" href="/Home/Home.html"> <img src="\\iconos\\logo-AEGEE.png" alt=""></a>
            <dl class="lista_header">
            <dt><a class="texto" href="/Actividades/actividades.html">Actividades</a></dt>
            <dt><a class="texto" href="/Buddy Program/Buddy program.html">Buddy program</a></dt>
            <dt><a class="boton_header" href="/Registro/Registro.html">Únete a aegee-las Palmas</a></dt>
            <dt><a class="boton_header" id="btn-acceder" href="/Log in/Login.html">Accede a tu cuenta</a></dt>
        </dl>
    </header>
        `;
    }

}

customElements.define('aegee-header', MyHeader)

class MyFooter extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `<footer>
        <div class="elementos_footer">
            <p class="texto_footer">Copyright © 2023 AEGEE-Las Palmas. </p>

            <dl class="lista_footer">

                <dt>
                    <a href="https://twitter.com/aegee_laspalmas?lang=es">
                        <img id="twitter" src="\\iconos\\Twitter_white.png" alt="Twitter">
                    </a>
                </dt>

                <dt>
                    <a href="https://www.instagram.com/aegee.laspalmas/?hl=es">
                        <img id="instagram" src="\\iconos\\Instagram_white.png" alt="Instagram">
                    </a>
                </dt>

                <dt>
                    <a href="https://linktr.ee/aegeelaspalmas">
                        <img id="linktree" src="\\iconos\\linktree_White.png" alt="linktree">
                    </a>
                </dt>
            </dl>
        </div>
    </footer>`;
    }

}

customElements.define('aegee-footer', MyFooter)