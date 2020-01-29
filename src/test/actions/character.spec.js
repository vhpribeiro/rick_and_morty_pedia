import { clearCharacter, searchCharacter, fetchCharacter } from '../../actions/character'
import { FETCH_CHARACTER, CLEAR_CHARACTER, SEARCH_CHARACTER } from '../../actions/types'

import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Character Action', () => {
    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    it('should clear character search', () => {
        const expectedResult = {
            type: CLEAR_CHARACTER,
            character: null
        }
    
        const action = clearCharacter()
    
        expect(action).toEqual(expectedResult)
    })
    
    it('should search for a character', () => {
        const characterName = 'Rick Babyyy'
        const expectedResult = {
            type: SEARCH_CHARACTER,
            searchCharacter: characterName
        }
    
        const action = searchCharacter(characterName)
    
        expect(action).toEqual(expectedResult)
    })

    it('should fetch a character', async () => {
        const characterId = 1
        const data = {
            id: characterId,
            name: 'Rick Sanchez'
        }
        moxios.stubRequest(`https://rickandmortyapi.com/api/character/${characterId}`, {
            status: 200,
            response: data
        })
        const expectedActions = [{
            type: FETCH_CHARACTER,
            character: data
        }]

        const store = mockStore({})

        await store.dispatch(fetchCharacter(characterId))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})
