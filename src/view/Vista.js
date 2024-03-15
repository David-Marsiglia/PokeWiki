class Vista {
  addViewPokemonList(data) {
    const pokemonsContainer = document.querySelector(".pokemon-container");
    let urlParams = new URLSearchParams(window.location.search);
    let user = urlParams.get('type');
    const userType = document.querySelector("#userType");
    
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <div class="pokemon-imagen">
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <h2 class="pokemon-nombre">${data.name}</h2>
            </div>
        </div>
    `;
    pokemonsContainer.append(div);
    if(user == "0"){
      userType.textContent = "Maestro Pokemon";
      document.querySelector(".pokemon").onclick = function () {
        window.location.href = "poke-detail?pokemon=" + encodeURIComponent(data.id);
      };
    }else{
      userType.textContent = "Invitado";
      document.querySelector(".pokemon").onclick = function () {
        window.location.href = "login";
      };
    }
    
  }
  
}
