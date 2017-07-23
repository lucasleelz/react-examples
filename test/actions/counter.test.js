/**
 * Created by lucas lee on 2017/7/23.
 */
import expect from 'expect'
import * as actions from '../../src/actions'
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../../src/ActionTypes'

describe('actions', () => {
    describe('counter', () => {
        it('increment should create increment action', () => {
            expect(actions.increment()).toEqual({ type: INCREMENT_COUNTER })
        })
        it('decrement should create decrement action', () => {
            expect(actions.decrement()).toEqual({ type: DECREMENT_COUNTER })
        })
    })
})
