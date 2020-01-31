import charactersReducer  from '../../reducers/characters'
import { FETCH_CHARACTERS } from '../../actions/types'

describe('Characters Reducer', () => {
    
    it('should setup default value in characters reducer', () => {
        const expectedState = null
        const action = {
            type: '@INIT',
            expectedState
        }

        const state = charactersReducer(undefined, action)

        expect(state).toEqual(expectedState)
    })

    it('should setup characters value in characters reducer', () => {
        const characterOne = {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive'
        }
        const characterTwo = {
            id: 2,
            name: 'Morty Sanchez',
            status: 'Alive'
        }
        const characterThree = {
            id: 3,
            name: 'Pickle Rick',
            status: 'Dead'
        }
        const currentState = [characterOne, characterThree]
        const expectedState = { 
            0: characterThree,
            1: characterTwo
        }
        const action = {
            type: FETCH_CHARACTERS,
            characters: expectedState
        }

        const state = charactersReducer(currentState, action)

        expect(state).toEqual(expectedState)
    })
})