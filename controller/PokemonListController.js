class PokemonListController {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }

  cargarYRenderizar(url, num) {
    this.vista.AddViewHome();
    if(num >= 20){
        this.viewPokemon(num-20, num, url)
    }else if(num == 1020){
        this.viewPokemon(num, 1026, url)
    }else{
        this.viewPokemon(0, 20, url) 
    }
  }
  viewPokemon(iterator, num, url){
    for (let i = iterator; i < num; i++) {
        this.modelo
          .cargarDatos(url + i)
          .then((data) => this.vista.addViewPokemonList(data, num));
      }
  }
}
