function getPokemon() {
    for(let i in POKEMON["pokemon"]){
        let pokeGet = POKEMON["pokemon"][i];
        let pokeImg = pokeGet.img;
        let pokeName = pokeGet.name;
        let pokeType = pokeGet.type;
      
        console.log(pokeImg, pokeName, pokeType)
    }
}

 getPokemon()