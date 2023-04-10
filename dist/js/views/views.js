export class View {
    constructor(seletor, escape) {
        this.escape = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`Elemento ${seletor} não está no DOM. Verifique!`);
        }
        if (escape) {
            this.escape = escape;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
