// fetch = function used for making http request tp fetch resources;
//         (JSON style data, images, files)


async function searchPokemon() {
  let pokemonName = document.getElementById("pokemonInput").value.toLowerCase();

  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );

  let data = await response.json();
  console.log(data)

// IMAGE data
   const image = data.sprites.front_default

   const imageElement = document.getElementById("pokemonSprite")
   imageElement.src =image
   imageElement.style.display ="block"


   const name = data.name;
   const height = data.height;
   const weight = data.weight;
   const type = data.types[0].type.name


// Data : type, name, height, weight
  document.getElementById("pokemonDetails").innerHTML =
    `<div class="pokemonInformation">
      <h2>Name : ${name}</h2>
      <P>Type : ${type}</p>
      <p>Height :${height}</p>
      <p>Weight : ${weight}</p>
   </div>`;


   

  document.getElementById("pokemonInput").value = "";
}
