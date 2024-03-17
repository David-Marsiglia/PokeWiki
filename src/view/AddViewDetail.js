class AddViewDetail {
    addPokemonDetail(data) {
        const pokemonName = document.querySelector("#name");
        const pokemonImage = document.getElementById("image");
        const pokemonAbilities = document.querySelector("#abilities");
        const pokemonStats = document.querySelector("#stats");
        const pokemonHeight = document.querySelector("#height");
        const pokemonweight = document.querySelector("#weight");
        const pokemonId = document.querySelector("#id");
        const pokemonType = document.querySelector("#type");
        
        pokemonName.textContent = data.name;
        pokemonImage.src = data.sprites.other["official-artwork"].front_default;
        pokemonId.textContent = "Id: " + data.id;
        pokemonHeight.textContent = "Altura: " + data.height; 
        pokemonweight.textContent = "Peso: " + data.weight;
        if(data.types.length != 0){
            pokemonType.textContent = "Tipo: " + data.types[0]["type"].name; 
        } else{
            pokemonType.textContent = "Tipo: No";
        }
          

        for(let i = 0; i < data.abilities.length; i++){
            const liAbilities = document.createElement("li");
            liAbilities.textContent = data.abilities[i]["ability"].name;
            pokemonAbilities.appendChild(liAbilities);
        }

        for(let i = 0; i < data.stats.length; i++){
            const liStats = document.createElement("li");
            liStats.textContent = data.stats[i]["stat"].name + ": " + data.stats[i]["base_stat"];
            pokemonStats.appendChild(liStats);
        }
        
    
    }
    
}