import axios from "axios";


interface PokemonInfo {
name: string;
hp: number;
types: string;
}

const getPokemonInfo = async () => {
    try {
        
        const response = await axios.get<PokemonInfo>(`https://api.pokemontcg.io/v2/cards/xy1-1`);
        console.log(response.data)

    } catch(error) {
        console.error('Couldnt find:', error)
    }
}

getPokemonInfo()