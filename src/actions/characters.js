import { FETCH_CHARACTERS } from './types'
import axios from 'axios'

export const fetchCharacters = (page = 1, name = '') => async dispatch =>{
    return axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
    .then(response => { dispatch({
            type: FETCH_CHARACTERS,
            characters: response.data
        })
    })
    .catch(err => console.log(err))
}