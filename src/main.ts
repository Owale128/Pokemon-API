import axios from "axios";
import { PokemonInfo } from "../src/interface/Interface";
import { displayPokemon } from "../src/functions/displayPokemon";
import { resultsContainer } from "../src/functions/displayPokemon";


const searchForm = document.getElementById('searchForm') as HTMLFormElement
if(searchForm && resultsContainer) {
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

        setTimeout(() => {
            resultsContainer.scrollIntoView({ behavior: 'smooth'});
          }, 135);

    } catch(error) {
        console.error('Could not find:', error)
    }
});
}

