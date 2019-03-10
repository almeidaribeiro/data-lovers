let LAST = null;

let data = POKEMON["pokemon"];

window.onload = function () {
  showPokemons(data);
}
document.getElementById("btn-all").addEventListener("click", () => getFilteredPokemons("All"));
document.getElementById("btn-fire").addEventListener("click", () => getFilteredPokemons("Fire"));
document.getElementById("btn-grass").addEventListener("click", () => getFilteredPokemons("Grass"));
document.getElementById("btn-poison").addEventListener("click", () => getFilteredPokemons("Poison"));
document.getElementById("btn-ice").addEventListener("click", () => getFilteredPokemons("Ice"));
document.getElementById("btn-flying").addEventListener("click", () => getFilteredPokemons("Flying"));
document.getElementById("btn-psychic").addEventListener("click", () => getFilteredPokemons("Psychic"));
document.getElementById("btn-water").addEventListener("click", () => getFilteredPokemons("Water"));
document.getElementById("btn-rock").addEventListener("click", () => getFilteredPokemons("Rock"));
document.getElementById("btn-ground").addEventListener("click", () => getFilteredPokemons("Ground"));
document.getElementById("btn-electric").addEventListener("click", () => getFilteredPokemons("Electric"));
document.getElementById("btn-bug").addEventListener("click", () => getFilteredPokemons("Bug"));
document.getElementById("btn-normal").addEventListener("click", () => getFilteredPokemons("Normal"));
document.getElementById("btn-fighting").addEventListener("click", () => getFilteredPokemons("Fighting"));
document.getElementById("btn-dragon").addEventListener("click", () => getFilteredPokemons("Dragon"));
document.getElementById("btn-ghost").addEventListener("click", () => getFilteredPokemons("Ghost"));
document.querySelector("#sort").addEventListener("change", () => getFilteredPokemons(null));

function getFilteredPokemons(pkmType) {
  const filterBy = pkmType || LAST || "All";
  LAST = filterBy;

  let pokeTypes = data;
  
  if (filterBy != "All"){
     pokeTypes = data.filter((pkm) => pkm.type.includes(filterBy));
  }
  
  sortPokemons(pokeTypes);
}

function sortPokemons(content) {
  const select = document.getElementById("sort");
  const selectedValue = select.options[select.selectedIndex].value;

  if (selectedValue === "A-Z") {
    pokemons = content.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
  } else {
    pokemons = content.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    })
  }
  showPokemons(pokemons);
}

function showPokemons(data) {
  let pokemonList = document.getElementById("pokemon-list");
  pokemonList.innerHTML = `${data.map((pokemon) => `
      <li class="pokemon">  
        <img src="${pokemon["img"]}" class="poke-img" />  
        <h3 class="poke-name">${pokemon["name"]}</h3>      
        <h3 class="poke-type">${pokemon["type"].join(" | ")}</h3>
      </li>
      `).join("")}`
}

// //let media = document.getElementById("media")
// //media.addEventListener("click", showAverage)

// function showAverage() {
//   const select = document.getElementById("media");
//   const selectedValue = select.options[select.selectedIndex].value;

//   if(selectedValue === "altura"){
//   let sum = pokemon.reduce(
//     (total, altura) => total = (total + parseFloat(altura.height)),
//     0);
//   } 
//   let average = sum / 151
//   let totalAverage = document.getElementById("averageHeight")
//   totalAverage.innerHTML = "Média de " + parseFloat(average.toFixed(2)) + " metros"
  
// }