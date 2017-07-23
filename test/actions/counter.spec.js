/**
 * Created by lucas lee on 2017/7/23.
 */
import expect from 'expect'
import reduxMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions'
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../../src/ActionTypes'

const middleWares = [thunk]
const mockStore = reduxMockStore(middleWares)

describe('actions', () => {
    describe('counter', () => {
        it('increment should create increment action', () => {
            expect(actions.increment()).toEqual({ type: INCREMENT_COUNTER })
        })
        it('decrement should create decrement action', () => {
            expect(actions.decrement()).toEqual({ type: DECREMENT_COUNTER })
        })
        it('incrementIfOdd should create increment action', () => {
            const expectedActions = [{ type: INCREMENT_COUNTER }]
            const store = mockStore({ counter: 1 })
            store.dispatch(actions.incrementIfOdd())
            expect(store.getActions()).toEqual(expectedActions)
        })
        it('incrementIfOdd should not create increment action', () => {
            const expectedActions = []
            const store = mockStore({ counter: 0 })
            store.dispatch(actions.incrementIfOdd())
            expect(store.getActions()).toEqual(expectedActions)
        })
        it('incrementAsnc should create increment action', (done) => {
            const expectedActions = [{ type: INCREMENT_COUNTER }]
            const store = mockStore({ counter: 2 })
            const delay = 100
            store.dispatch(actions.incrementAsync(delay))
            setTimeout(() => {
                expect(store.getActions()).toEqual(expectedActions)
                done()
            }, delay)
        })
    })
})
