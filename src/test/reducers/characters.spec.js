import charactersReducer  from '../../reducers/characters'
import { FETCH_CHARACTERS } from '../../actions/types'

describe('Characters Reducer', () => {
    
    it('should setup default value in characters reducer', () => {
        const characters = null
        const action = {
            type: '@INIT',
            characters
        }
        const expectedState = null

        const state = charactersReducer(undefined, action)

        expect(state).toEqual(expectedState)
    })
})