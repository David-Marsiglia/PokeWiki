const modelo = new GetApiData();
const vista = new Vista();
const controlador = new Controlador(modelo, vista);

controlador.cargarYRenderizar("https://pokeapi.co/api/v2/pokemon/");
