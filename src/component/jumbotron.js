class Jumbotron extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="slider">
            <ul class="slides">
                <li>
                    <img src="asset/jumbotron.jpg"> <!-- random image -->
                    <div class="row caption left-align">
                    <div class="col s12 m6">
                    <h3>Tetap Produktif<br>Stop Covid-19</h3>
                        <h5 class="light grey-text text-lighten-3">Tetap produktif dan aman dari covid-19 dengan tetap
                            mematuhi protokol kesehatan, #newnormal
                        </h5>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
        `;
    }
}

customElements.define('jumbotron-item', Jumbotron);