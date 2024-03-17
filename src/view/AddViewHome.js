class AddViewHome {
  addViewPokemonList(data) {
    const pokemonsContainer = document.querySelector(".pokemon-container");
    let urlParams = new URLSearchParams(window.location.search);
    let user = urlParams.get('type');
    const userType = document.querySelector("#userType");
    const btnNav = document.querySelector("#btnNav");

    
    
    const div = document.createElement("div");
    div.classList.add("pokemon_" + data.id);
    div.id = "pokemon"
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
      btnNav.href = "/logout"
      btnNav.textContent = "Cerrar sesión";
      document.querySelector(".pokemon_" + data.id).onclick = function () {
        window.location.href = "poke-detail?pokemon=" + encodeURIComponent(data.id);
      };
      
    }else{
      userType.textContent = "Invitado";
      btnNav.href = "/login"
      btnNav.textContent = "Iniciar sesión";
      document.querySelector(".pokemon_" + data.id).onclick = function () {
        Swal.fire({
          icon: 'error',
          title: '¡Lo siento!',
          text: 'Los invitados no tienen acceso a los detalles ',
          showCancelButton: true,
          confirmButtonText: 'Iniciar sesión',
          cancelButtonText: 'Registrarme',
          allowOutsideClick: true,
       }).then((result) => {
          if (result.isConfirmed == true) {
              window.location.href = "/login";
          }else if (result.dismiss === Swal.DismissReason.cancel) {
            window.location.href = "/register";
        }
        });
      };
    }
    
  }
  
}
