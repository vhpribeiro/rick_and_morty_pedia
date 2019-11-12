import { FETCH_CHARACTERS } from './types'
import axios from 'axios'

export const fetchCharacters = () => dispatch => {
    return axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => dispatch({
        type: FETCH_CHARACTERS,
        characters: response.data
    }))
    .catch(err => console.log(err))
}