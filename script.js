
const search = document.getElementById("search");
const result = document.querySelector('.result');


const pokemonData = async (api, text) => {
    try {
        
        const response = await fetch(api);
        
        if(!response.ok || !text || text <= 0 || text >= 152) {
            throw new Error('Pokemon not found')
        }

        const data = await response.json();
        console.log(data)
        const {id, name, sprites: {other: {dream_world: {front_default}}}, height, weight, types, sprites}= data;

        const typeName = types[0].type.name;   
        const iconImg = sprites.front_default;     

         

        setTimeout(() => {
            result.innerHTML = `
            <div id="pokemon-card" class="container mt-5">
            
            <div class="row text-center">
            <h1 id="pokemon-name">${name}</h1>
            <h3>#${id}</h3>
            </div>

            <div class="row mx-auto p-2">
            <img src="${front_default}" id="card-img" alt="${name}"> 
            </div>

            <div class="row">
            <div class="column col-6">
            <h4 id="pokemon-type">Type: ${typeName}</h4>
            <h5>Height: ${height}"</h5>
            <h5>Weight: ${weight}lbs</h5>
            </div>
            <div class="column col-6">
            <img src="${iconImg}" class="border border-secondary-subtle rounded-circle" alt="${name}">
            </div>
            </div>
            </div>
            
            `;
        }, 1500)

    } catch (error) {
        console.log(error)

       

        setTimeout(() => {
            result.innerHTML = `
            
            <div id="pokemon-card" class="container mt-5">
            
            <div class="row text-center">
            <h1>Pokemon not found</h1>
            </div>

            <div class="row mx-auto p-2">
            <img src="assets/psyduck-deliciousdaywithpokemon.png" id="card-img" alt="Image not found"> 
            </div>

            <div class="row">
            <h4 id="pokemon-type">Make sure to spell the name correctly, or search by typing 1 through 150*.</h4>
            <h6>*Pokemon after the orginal 150 don't matter.</h6>
            </div>
            </div>
            
            `;
        }, 1500)


    }
    
}



async function fetchPokemon() {
    try {
        let text = search.value;
        //const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`);
        const api = `https://pokeapi.co/api/v2/pokemon/${text}`;
        pokemonData(api, text)
    } catch (error) {
        console.error('Error:', error);
    }
}






















