import { FETCH_CHARACTERS } from '../actions/types'
import initialState from './initialState'

export default (state = initialState.characters, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS:
            return {
                ...action.characters
            }
        default:
            return state
    }
}