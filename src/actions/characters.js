import { FETCH_CHARACTER } from './types'
import axios from 'axios'

export const fetchCharacter = () => dispatch => {
    return axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => dispatch({
        type: FETCH_CHARACTER,
        characters: response.data
    }))
    .catch(err => console.log(err))
}