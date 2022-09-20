class UserCardElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    //fct appelee automatiquement par le nav
    connectedCallback(){
        const name = this.getAttribute('name');
        const height = this.getAttribute('height');
        const mass = this.getAttribute('mass');
        const birthYear = this.getAttribute('birthyear');
       //console.log(birthYear);
        this.shadowRoot.innerHTML = `
        <style>
                   
            h2 {
                color: #576060;
            }

            h4 {
                color: darkgray;
            }
        </style>

        <h2>${name}</h2>
        <h4> Taille: ${height}</h4>
        <h4>Poids: ${mass}</h4>
        <h4>Année de naissance: ${birthYear}</h4>
        `;
    }

}

window.customElements.define('user-card', UserCardElement);