class DetailController {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    cargarYRenderizarDetail(url, id) {     
        if(!id){
            window.location.href = "/home?type=0&num=20";
        }else{
            this.modelo.cargarDatos(url).then(data => this.vista.addPokemonDetail(data));  
        }            
    }
   
}