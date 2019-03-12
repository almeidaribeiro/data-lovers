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
document.querySelector('#sort').addEventListener('change', () => getFilteredPokemons(null));

function getFilteredPokemons(pkmType) {
  const filterBy = pkmType || LAST || "All";
  LAST = filterBy;

  let pokeTypes = data;

  if (filterBy != "All") {
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
        <h3 class="poke-name">${pokemon["name"]}</h3> 
        <img src="${pokemon["img"]}" class="poke-img" />  
        <h3 class="poke-height">${"Altura: " + pokemon["height"]}</h3>  
        <h3 class="poke-weight">${"Peso: " + pokemon["weight"]}</h3>  
        <h3 class="poke-type">${"Tipo: " + pokemon["type"].join(" | ")}</h3> <br>
      </li>
      `).join("")}`

  document.getElementById("calculation").hidden = true;
  document.getElementById("pokemons").hidden = false;
}

document.getElementById("calculo").addEventListener("change", showCalcHeight)
document.getElementById("calculoPeso").addEventListener("change", showCalcPeso)

function showCalcHeight() {
  let showCalc = document.getElementById("calculation")
  let calculo = data.sort((a, b) => (a.height < b.height ? -1 : 1));
  const select = document.getElementById("calculo");
  const selectedValue = select.options[select.selectedIndex].value;
  if (selectedValue === "selecione") {
    showCalc.innerHTML = "";
  } if (selectedValue === "mediaAltura") {
      let sum = data.reduce(
      (total, altura) => total = (total + parseFloat(altura.height)), 0);
      let average = sum / 151
      showCalc.innerHTML = "Média de altura entre todos os pokemons é de" + parseFloat(average.toFixed(2)) + " metros" 
  } if (selectedValue === "menor") {
      let calcMenor = calculo[0].height
      let calcName = calculo[0].name
      displayCalc(calcName, calcMenor)
      //showCalc.innerHTML = "Menor altura é do " + calcName + " de " + calcMenor
  } if (selectedValue === "maior") {
      let calcMaior = calculo[calculo.length - 1].height
      let calcName = calculo[calculo.length - 1].name
      showCalc.innerHTML = "Maior altura é do " + calcName + " de " + calcMaior 
  }
  document.getElementById("calculation").hidden = false;
  document.getElementById("pokemons").hidden = true;
}

function displayCalc(name, calc){
  let showCalc = document.getElementById("calculation");
  showCalc.innerHTML = "Menor altura é do " + name + " de " + calc;
  for(let i in POKEMON["pokemon"]){
    let pokeGet = POKEMON["pokemon"][i];
    let pokeName = pokeGet.name;

    if(pokeName === name){
      
    }
  }
}

//criar uma função de flitro que filtre a menor altura e exiba a imagem junto com o calculo ????


function showCalcPeso() {
  let showCalc = document.getElementById("calculation")
  let calculo = data.sort((a, b) => (a.weight < b.weight ? -1 : 1));
  const select = document.getElementById("calculoPeso");
  const selectedValue = select.options[select.selectedIndex].value;
  if (selectedValue === "selecione") {
    showCalc.innerHTML = "";
  } if (selectedValue === "mediaPeso") {
      let sum = data.reduce(
      (total, peso) => total = (total + parseFloat(peso.weight)), 0);
      let average = sum / 151
      showCalc.innerHTML = "Média de peso entre todos os pokemons é de " + parseFloat(average.toFixed(2)) + " kg"
  } if (selectedValue === "menorPeso") {
      let calcMenor = calculo[0].weight
      let calcName = calculo[0].name
      showCalc.innerHTML = "Menor peso é do " + calcName + " de " + calcMenor
  } if (selectedValue === "maiorPeso") {
      let calcMaior = calculo[calculo.length - 1].weight
      let calcName = calculo[calculo.length - 1].name
      showCalc.innerHTML = "Maior peso é do " + calcName + " de " + calcMaior
  }
  document.getElementById("calculation").hidden = false;
  document.getElementById("pokemons").hidden = true;
}

