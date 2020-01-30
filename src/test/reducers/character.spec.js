import character from '../../reducers/character'
import initialState from '../../reducers/initialState'
import { SEARCH_CHARACTER, FETCH_CHARACTER } from '../../actions/types'

describe('Character Reducer', () => {

    const currentCharacterState = {
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
            ...currentCharacterState,
            searchCharacter: searchedCharacter
        }

        const state = character(currentCharacterState, action)
        
        expect(state).toEqual(expectedState)
    })

    it('should fetch character value', () => {
        const expectedState = {
            id: 1,
            name: 'Sam Sanchez',
            status: 'Alive',
            species: 'Human'
        }
        const action = {
            type: FETCH_CHARACTER,
            character: expectedState
        }

        const state = character(currentCharacterState, action)

        expect(state).toEqual(expectedState)
    })
})