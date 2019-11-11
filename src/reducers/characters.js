import { FETCH_CHARACTER } from '../actions/types'
import initialState from './initialState'

export default (state = initialState.characters, action) => {
    switch(action.type) {
        case FETCH_CHARACTER:
            return {
                ...action.characters
            }
        default:
            return state
    }
}