
const search = document.getElementById("search");
const result = document.querySelector('.result');

const pokemonData = async (api, text) => {
    try {
        
        const response = await fetch(api);
        
        if(!response.ok) {
            throw new Error('Pokemon not found')
        }

        const data = await response.json();
        console.log(data)
        const {id, name, sprites: {other: {dream_world: {front_default}}}, height, weight, types, sprites}= data;

        const typeName = types[0].type.name;   
        const iconImg = sprites.front_default;     

        setTimeout(() => {
            result.innerHTML = `
            <h1>${name}</h1>
            <img src="${iconImg}" alt="${name}"> 
            <h3>${id}</h3>
            <h3>${typeName}</h3>
            <h5>Height: ${height}"</h5>
            <h5>Weight: ${weight}lbs</h5>
            <img src="${front_default}" alt="${name}"> 
            
            `;
        }, 1000)

    } catch (error) {
        console.log(error)

        setTimeout(() => {
            result.innerHTML = `
            <h1>Pokemon not found</h1>
            
            `;
        }, 1000)


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






















