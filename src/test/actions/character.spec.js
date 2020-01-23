import { clearCharacter, searchCharacter } from '../../actions/character'
import { FETCH_CHARACTER, CLEAR_CHARACTER, SEARCH_CHARACTER } from '../../actions/types'

test('should clear character search', () => {
    const expectedResult = {
        type: CLEAR_CHARACTER,
        character: null
    }

    const action = clearCharacter()

    expect(action).toEqual(expectedResult)
})

test('should search for a character', () => {
    const characterName = 'Rick Babyyy'
    const expectedResult = {
        type: SEARCH_CHARACTER,
        searchCharacter: characterName
    }

    const action = searchCharacter(characterName)

    expect(action).toEqual(expectedResult)
})