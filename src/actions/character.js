import { FETCH_CHARACTER, CLEAR_CHARACTER } from './types'
import axios from 'axios'

export const fetchCharacter = (name) => dispatch => {
    return axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(response => dispatch({
        type: FETCH_CHARACTER,
        character: response.data
    }))
    .catch(err => console.log(err))
}

export const clearCharacter = () => dispatch =>{
    dispatch({
        type: CLEAR_CHARACTER,
        character: null
    })
}