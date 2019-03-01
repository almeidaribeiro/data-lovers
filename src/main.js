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
  showProducts();
}

let pokemon = POKEMON["pokemon"];

function getProducts() {
  return pokemon;
}

function showProducts() {
  let pokeDiv = document.getElementById("display");
  pokeDiv.innerHTML = `${getProducts().map((pokemon) => `
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
