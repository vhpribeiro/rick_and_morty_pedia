import { FETCH_CHARACTER, CLEAR_CHARACTER, SEARCH_CHARACTER } from './types'
import axios from 'axios'

export const fetchCharacter = (id) => dispatch => {
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
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

export const searchCharacter = characterName => dispatch => {
    dispatch({
        type: SEARCH_CHARACTER,
        searchCharacter: characterName
    })
}