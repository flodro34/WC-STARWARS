class PlanetCardElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    //connexion
    connectedCallback(){
        const name = this.getAttribute('name');
        const rotationPeriod = this.getAttribute('rotationperiod');
        const orbitalPeriod = this.getAttribute('orbitalperiod');
        const diameter = this.getAttribute('diameter');

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
        <h4>Rotation: ${rotationPeriod} mois</h4>
        <h4>Période orbitale: ${orbitalPeriod} jours</h4>
        <h4>Diamètre: ${diameter}</h4>
        `;
    }
}
window.customElements.define('planet-card', PlanetCardElement);
