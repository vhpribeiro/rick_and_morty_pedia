import character from '../../reducers/character'
import initialState from '../../reducers/initialState'
import { SEARCH_CHARACTER } from '../../actions/types'

describe('Character Reducer', () => {

    const currentState = {
        characters: [{
            id: 1,
            name: 'Rick Sanchez'
        }],
        character: {
            id: 3,
            name: 'Morty Sanchez'
        }
    }

    it('should setup default character value', () => {
        const action = {
            type: '@INIT'
        }

        const state = character(undefined, action)

        expect(state).toEqual(initialState.character)
    })

    it('should set searchCharacter value', () => {
        const searchedCharacter = 'Morty'
        const action = {
            type: SEARCH_CHARACTER,
            searchCharacter: searchedCharacter
        }
        const expectedState = {
            ...currentState,
            searchCharacter: searchedCharacter
        }

        const state = character(currentState, action)
        
        expect(state).toEqual(expectedState)
    })

    it('should clear character value', () => {
        
    })
})