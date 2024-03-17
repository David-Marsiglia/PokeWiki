class DetailController {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    cargarYRenderizarDetail(url) {      
        this.modelo.cargarDatos(url).then(data => this.vista.addPokemonDetail(data));    
        
    }
   
}