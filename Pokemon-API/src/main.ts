import axios from "axios";


interface PokemonInfo {
images:{
    small: string;
    };
}


const searchForm = document.getElementById('searchForm') as HTMLFormElement
if(searchForm) {
searchForm.addEventListener('submit', async (event) => {

    event.preventDefault()
    const searchText = (document.getElementById('searchText') as HTMLInputElement).value

    try {
        
        const response = await axios.get<{ data: PokemonInfo[] }>(`https://api.pokemontcg.io/v2/cards`, {
            params: {
                q: `name:${searchText}`,
                pageSize: 10,
            },
        });
        const pokemonList = response.data.data;
        console.log(pokemonList)

        displayPokemon(pokemonList)


    } catch(error) {
        console.error('Could not find:', error)
    }
});
}

const displayPokemon = (pokemonList: PokemonInfo[]) => {
const resultsContainer = document.getElementById('searchResults') as HTMLDivElement;

if(resultsContainer){
    resultsContainer.innerHTML = '';
    pokemonList.forEach((pokemon) => {
        const pokemonImage = document.createElement('img');
        pokemonImage.className = 'pokemonImg';
        pokemonImage.src = pokemon.images.small;
        pokemonImage.alt = 'Picture of Pokemon';

        pokemonImage.addEventListener('click', () => {
            pokemonImage.classList.add('holoEffect');
            setTimeout(() => {
                pokemonImage.classList.remove('holoEffect');
            }, 1000);
        });
        
        resultsContainer.appendChild(pokemonImage);
    });
}
};