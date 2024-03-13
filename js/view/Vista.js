class Vista {
  addViewPokemonList(data) {
    const pokemonsContainer = document.querySelector(".pokemon-container");
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
    document.querySelector(".pokemon").onclick = function () {
      window.location.href =
        "pokemonDetail.html?pokemon=" + encodeURIComponent(data.id);
    };
  }

  //const pokemonName = document.createElement("h4")
  //pokemonName.textContent = data.name
  //const pokemonCard = document.createElement("div")
  //pokemonCard.appendChild(pokemonName)
  //pokemonCard.className = "card"
  //pokemonsContainer.appendChild(pokemonCard)
}
