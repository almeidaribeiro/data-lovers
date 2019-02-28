// function getPokemon() {
//   // for(let i in POKEMON["pokemon"]){
//     while(POKEMON["pokemon"].length < 151){
//       console.log("foi")
//       let pokeGet = POKEMON["pokemon"];
//       let pokeImg = pokeGet.img;
//       let pokeName = pokeGet.name;
//       let pokeType = pokeGet.type;
//       let pokeTotal = pokeImg + pokeName + pokeType;
//       document.getElementById("exibir").innerHTML = pokeTotal
//       console.log(pokeTotal)
//     }      
// }

// getPokemon()

window.onload = function(){
  showProducts();
}

let pokemon = POKEMON["pokemon"];

function getProducts() {
  return pokemon;
}

function showProducts() {
  let productDiv = document.getElementById("exibir");
  productDiv.innerHTML = `${getProducts().map((pokemon) => `
      <div class="product-item">  
        <img src="${pokemon["img"]}" class="product-img" />      
          <div class="text-name">
            <h3 class="product-name">${pokemon["type"]}</h3>
          </div>
      `).join("")}  
  `
}