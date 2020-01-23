import { FETCH_CHARACTER, CLEAR_CHARACTER, SEARCH_CHARACTER } from './types'
import axios from 'axios'

export const fetchCharacter = (id) => async dispatch => {
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => dispatch({
        type: FETCH_CHARACTER,
        character: response.data
    }))
    .catch(err => console.log(err))
}

export const clearCharacter = () =>({
    type: CLEAR_CHARACTER,
    character: null
})

export const searchCharacter = characterName => {
    return {
        type: SEARCH_CHARACTER,
        searchCharacter: characterName
    }
}