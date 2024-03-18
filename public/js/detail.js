const modelo = new GetApiData();
const vista = new AddViewDetail();
const controlador = new DetailController(modelo, vista);
const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('pokemon');

controlador.cargarYRenderizarDetail("https://pokeapi.co/api/v2/pokemon/" + id, id);