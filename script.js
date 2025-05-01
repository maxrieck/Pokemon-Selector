
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

        //<img src="${iconImg}" alt="${name}"> 

        setTimeout(() => {
            result.innerHTML = `
            <div id="pokemon-card" class="container mt-5">
            
            <div class="row">
            <h1 id="pokemon-name">${name}</h1>
            <h3>#${id}</h3>
            </div>

            <div class="row">
            <img src="${front_default}" id="card-img" alt="${name}"> 
            </div>

            <h4 id="pokemon-type">Type: ${typeName}</h4>
            <h5>Height: ${height}"</h5>
            <h5>Weight: ${weight}lbs</h5>
            
            </div>
            
            `;
        }, 1500)

    } catch (error) {
        console.log(error)

        setTimeout(() => {
            result.innerHTML = `
            <h1>Pokemon not found</h1>
            
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






















