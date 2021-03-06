/**
 * Created by lucas lee on 2017/7/23.
 */
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../ActionTypes'

export function increment() {
    return {
        type: INCREMENT_COUNTER
    }
}

export function decrement() {
    return {
        type: DECREMENT_COUNTER
    }
}

export function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState()
        if (counter % 2 === 0) {
            return
        }
        dispatch(increment())
    }
}

export function incrementAsync(delay = 1000) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment())
        }, delay)
    }
}
