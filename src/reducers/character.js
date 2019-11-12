import { FETCH_CHARACTER, CLEAR_CHARACTER } from '../actions/types'
import initialState from './initialState'

export default (state = initialState.character, action) => {
    switch(action.type) {
        case FETCH_CHARACTER:
        case CLEAR_CHARACTER:
            return {
                ...action.character
            }
        default:
            return state
    }
}