/**
 * Created by lucas lee on 2017/7/23.
 */
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk),
        )
    )
    // if (module.hot) {
    //     module.hot.accept('../reducers', () => {
    //         store.replaceReducer(rootReducer)
    //     })
    // }
    return store
}
