class PokemonListController {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }

  cargarYRenderizar(url, num, user) {
		this.vista.AddViewHome(user, num)
		const startNum = num >= 20 ? num - 20 : 0
		const endNum = Math.min(num + 20, 1026)
		this.viewPokemon(startNum, user, url)
	}

	viewPokemon(start, user, url) {
		for (let i = start; i < end; i++) {
			this.modelo
				.cargarDatos(url + i)
				.then(data => this.vista.addViewPokemonList(data, user))
		}
	}
}
