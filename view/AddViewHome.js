class AddViewHome {
	addViewPokemonList(data, user) {
		const pokemonsContainer = document.querySelector('.pokemon-container')

		const div = document.createElement('div')
		div.classList.add('pokemon_' + data.id)
		div.id = 'pokemon'
		div.innerHTML = `
        <div class="pokemon-imagen">
            <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <h2 class="pokemon-nombre">${data.name}</h2>
            </div>
        </div>
    `
		pokemonsContainer.append(div)

		if (user == '0') {
			document.querySelector('.pokemon_' + data.id).onclick = function () {
				window.location.href =
					'poke-detail?pokemon=' + encodeURIComponent(data.id)
			}
		} else if (user == '1') {
			document.querySelector('.pokemon_' + data.id).onclick = function () {
				Swal.fire({
					icon: 'error',
					title: '¡Lo siento!',
					text: 'Los invitados no tienen acceso a los detalles ',
					showCancelButton: true,
					confirmButtonText: 'Iniciar sesión',
					cancelButtonText: 'Registrarme',
					allowOutsideClick: true
				}).then(result => {
					if (result.isConfirmed == true) {
						window.location.href = '/login'
					} else if (result.dismiss === Swal.DismissReason.cancel) {
						window.location.href = '/register'
					}
				})
			}
		} else {
			window.location.href = '/'
		}
	}

	AddViewHome(user, num) {
		const btnNav = document.querySelector('#btnNav')
		const userType = document.querySelector('#userType')
		
		if (user == '0') {
			userType.textContent = 'Maestro Pokémon'
			btnNav.href = '/logout'
			btnNav.textContent = 'Cerrar sesión'
			this.updateBtnMore(user, num)
		} else if (user == '1') {
			userType.textContent = 'Invitado'
			btnNav.href = '/login'
			btnNav.textContent = 'Iniciar sesión'
			this.updateBtnMore(user, num)
		} else {
			window.location.href = '/'
		}
	}
  updateBtnMore(user, num) {
    const btnMore = document.querySelector('#btnMore')
		if (num < 1026) {
			btnMore.href = `/${
				user === '1' ? 'home-guest' : 'home'
			}?type=${user}&num=${Number(num) + 20}`
		}
	}
}