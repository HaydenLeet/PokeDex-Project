console.log('yo');

// Pokedex Project

const pokeContainer = document.querySelector('#container')
// Number of Pokemon (AKA objects) using the first 150 pokemon in the PokeAPI
const numbOfPokemon = 151

// The createPokeCard function creates a new card (AKA section element) and adds the new card to the Dom inside of the div with the id of "container"
function createPokeCard (pokemon) {
    const pokeCard = document.createElement('section')
    pokeCard.classList.add('pokemon')
    pokeContainer.append(pokeCard)
    // Setting the innerHTML for the new card using the data/object that is passed into the "pokemon" parameter. Also, using the toUpperCase method the pokemon name so it will in UPPERCASE text
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}"
        </div>
        <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `
}

// The getPokemonData function makes an Axios GET request to the PokeAPI using a specific pokemon ID/number then takes the returned data and passes it into the createpokeCard function
// NOTE: The argument/value passed into the "ID" parameter will be a number created in the loop in the next function (AKA the getPokemon function)

async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonData = await axios.get(url)
    console.log(pokemonData);
    console.log(pokemonData.data.sprites.front_shiny);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData)
}

// The getPokemon function loops through all the pokemon id's and runs/executes the pokemonData function for each ID
// NOTE: using async/await on this function because the code in the getPokemonData function is asynchronous (here is axios request in that function)
async function getPokemon(i){
    for(i=1; i < numbOfPokemon; i++){
        await getPokemonData(i)
    }
}
getPokemon()