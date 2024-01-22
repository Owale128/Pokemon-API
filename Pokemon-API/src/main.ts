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
        
        const response = await axios.get<{ data: PokemonInfo[] }>(`https://api.pokemontcg.io/v2/cards/xy1-1`, {
            params: {
                q: `name:${searchText}`,
                pagesize: 10,
            },
        });
        const pokemonList = response.data.data;
        console.log(pokemonList)

    } catch(error) {
        console.error('Could not find:', error)
    }
});
}

