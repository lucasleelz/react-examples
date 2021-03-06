/**
 * Created by lucas lee on 2017/7/23.
 */
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../ActionTypes'

export default function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1
        case DECREMENT_COUNTER:
            return state - 1
        default:
            return state
    }
}
