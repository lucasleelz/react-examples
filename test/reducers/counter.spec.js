/**
 * Created by lucas lee on 2017/7/23.
 */
import expect from 'expect'
import counter from '../../src/reducers/counter'
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../../src/ActionTypes'

describe('reducers', () => {
    describe('counter', () => {
        it('should handle initial state', () => {
            expect(counter(undefined, {})).toBe(0)
        })
        it('should handle INCREMENT_COUNTER', () => {
            expect(counter(1, { type: INCREMENT_COUNTER })).toBe(2)
        })
        it('should handle DECREMENT_COUNTER', () => {
            expect(counter(1, { type: DECREMENT_COUNTER })).toBe(0)
        })
        it('should handle unknown action type', () => {
            expect(counter(1, { type: 'unknown' })).toBe(1)
        })
    })
})
