class AddViewDetail {
    addPokemonDetail(data) {
        const pokemonName = document.querySelector("#name");
        const pokemonImage = document.getElementById("image");
        const pokemonAbilities = document.querySelector("#abilities");
        const pokemonStats = document.querySelector("#stats");
        
        

        pokemonName.textContent = data.name;
        pokemonImage.src = data.sprites.other["official-artwork"].front_default;
        console.log(data.stats[0]["base_stat"])
        for(let i = 0; i < data.abilities.length; i++){
            const liAbilities = document.createElement("li");
            liAbilities.textContent = data.abilities[i]["ability"].name;
            pokemonAbilities.appendChild(liAbilities);
        }
        for(let i = 0; i < data.stats.length; i++){
            const liStats = document.createElement("li");
            liStats.textContent = data.stats[i]["stat"].name + " : " + data.stats[i]["base_stat"];
            pokemonStats.appendChild(liStats);
        }
        
    
    }
    
}