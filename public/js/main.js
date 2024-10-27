const modelo = new GetApiData();
const vista = new AddViewHome();
const controlador = new PokemonListController(modelo, vista);
let urlParams = new URLSearchParams(window.location.search);
const num = urlParams.get('num');
const user = urlParams.get('type');

controlador.cargarYRenderizar("https://pokeapi.co/api/v2/pokemon/", Number(num), user);
