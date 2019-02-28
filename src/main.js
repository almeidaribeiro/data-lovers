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
//function getPokemon() {
  //  for(let i in POKEMON["pokemon"]){
       // let pokeGet = POKEMON["pokemon"][i];
       // let pokeImg = pokeGet.img;
       // let pokeName = pokeGet.name;
        //let pokeType = pokeGet.type;
      
     //   console.log(pokeImg, pokeName, pokeType)
   // }
//}

 getPokemon()

