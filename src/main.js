//function getPokemon() {
//  for(let i in POKEMON["pokemon"]){
//    let pokeGet = POKEMON["pokemon"][i];
//  let pokeImg = pokeGet.img;
//  let pokeName = pokeGet.name;
//  let pokeType = pokeGet.type;

// console.log(pokeImg, pokeName, pokeType)
// }
//}

//getPokemon()

window.onload = function(){
  showPokemons();
}

let pokemon = POKEMON["pokemon"];

function getPokemons(){
  return pokemon;
}

function showPokemons(){
  let pokeDiv = document.getElementById("display");
  pokeDiv.innerHTML = `${getPokemons().map((pokemon) => `
      <div class="poke-list">  
        <img src="${pokemon["img"]}" class="poke-img" />  
          <div class="text-name">
          <h3 class="poke-name">${pokemon["name"]}</h3>    
          <div class="text-type">
            <h3 class="poke-type">${pokemon["type"]}</h3>
          </div>
      `).join("")}  
  `
}

//document.getElementById("types").addEventListener("click", getFilteredPokemons);

//function getFilteredPokemons() {
  
  //let firePokemons = []
  //let type = "Fire"
  //for(let i in POKEMON["pokemon"]){
    //let poke = POKEMON["pokemon"][i];
    //let pokeType = poke.type;
      //if(pokeType.includes(type)){
        //firePokemons.push(poke)
      //}
  //}
  //console.log(firePokemons)
 //return firePokemons;
//}

document.getElementById("btn-fire").addEventListener("click", function(event){
  showFilteredPokemons("Fire")  
});
document.getElementById("btn-grass").addEventListener("click", function(event){
  showFilteredPokemons("Grass")  
});
document.getElementById("btn-poison").addEventListener("click", function(event){
  showFilteredPokemons("Poison")  
});
document.getElementById("btn-ice").addEventListener("click", function(event){
  showFilteredPokemons("Ice")  
});
document.getElementById("btn-flying").addEventListener("click", function(event){
  showFilteredPokemons("Flying")  
});
document.getElementById("btn-psychic").addEventListener("click", function(event){
  showFilteredPokemons("Psychic")  
});
document.getElementById("btn-water").addEventListener("click", function(event){
  showFilteredPokemons("Water")  
});
document.getElementById("btn-rock").addEventListener("click", function(event){
  showFilteredPokemons("Rock")  
});
document.getElementById("btn-ground").addEventListener("click", function(event){
  showFilteredPokemons("Ground")  
});
document.getElementById("btn-electric").addEventListener("click", function(event){
  showFilteredPokemons("Electric")  
});
document.getElementById("btn-bug").addEventListener("click", function(event){
  showFilteredPokemons("Bug")  
});
document.getElementById("btn-normal").addEventListener("click", function(event){
  showFilteredPokemons("Normal")  
});
document.getElementById("btn-fighting").addEventListener("click", function(event){
  showFilteredPokemons("Fighting")  
});
document.getElementById("btn-dragon").addEventListener("click", function(event){
  showFilteredPokemons("Dragon")  
});
document.getElementById("btn-ghost").addEventListener("click", function(event){
  showFilteredPokemons("Ghost")  
});

function getFilteredPokemons(pkmType){
  pokeTypes = pokemon.filter(function(pkm){
    if(pkm.type.includes(pkmType)){
      return true
    }else{
      return false
    }
  })
  return pokeTypes
}

function showFilteredPokemons(pkmType) {
  let pokeDiv = document.getElementById("types");
  pokeDiv.innerHTML = `${getFilteredPokemons(pkmType).map((pokemon) => `
      <div class="poke-list">  
        <img src="${pokemon["img"]}" class="poke-img" />  
          <div class="text-name">
          <h3 class="poke-name">${pokemon["name"]}</h3>    
          <div class="text-type">
            <h3 class="poke-type">${pokemon["type"]}</h3>
          </div>
      `).join("")}  
  `
}

//let poke = pokemon.sort(function(a,b){return a.name - b.name});
//console.log(poke);

//function orderPkm(){
//let pokemonOrder = pokemon.sort((a.b)=> {
  //if(a.name > b.name){
    //return 1;
  //}
    //return -1;
//)
//}

//criar um evento
document.getElementById("sort").addEventListener("change", function(event){
  showOderPokemons(event)
});

function sortPokemons(event){
  const selectedValue = event.target.value;
  
  if(selectedValue === "A-Z"){
    pokemons = POKEMON["pokemon"].sort(function(a,b){
      return a.name.localeCompare(b.name);
    })
  }else {
    pokemons = POKEMON["pokemon"].sort(function(a,b){
      return b.name.localeCompare(a.name);
    })
  }
  return pokemons
}

function showOderPokemons(event) {
  let pokeDiv = document.getElementById("order");
  pokeDiv.innerHTML = `${sortPokemons(event).map((pokemon) => `
      <div class="poke-list">  
        <img src="${pokemon["img"]}" class="poke-img" />  
          <div class="text-name">
          <h3 class="poke-name">${pokemon["name"]}</h3>    
          <div class="text-type">
            <h3 class="poke-type">${pokemon["type"]}</h3>
          </div>
      `).join("")}  
  `
}