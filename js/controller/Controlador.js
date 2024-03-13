class Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    cargarYRenderizar(url) {
        for(let i = 1; i < 150; i++){
            this.modelo.cargarDatos(url + i).then(data => this.vista.addViewPokemonList(data));       
        }
        
    }
   
}