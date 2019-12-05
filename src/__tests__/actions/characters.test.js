import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchCharacters } from '../../actions/characters';
import { FETCH_CHARACTERS } from '../../actions/types';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Characters actions', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should create the FETCH_CHARACTERS', () => {
        let responseExample = {
            info: {
                count: 489
            },
            result: {
                characterName: 'Rick'
            }
        };
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(responseExample);
        });
        const expectedAction = {type: FETCH_CHARACTERS, characters: responseExample};

        const store = mockStore({characters: null})

        return store.dispatch(fetchCharacters()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        })
    })
})