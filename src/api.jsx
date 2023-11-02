import axios from 'axios'

const api = async (term) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`)
    console.log(res.data)
    return res.data;
}

export default api