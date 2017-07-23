/**
 * Created by lucas lee on 2017/7/22.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './src/containers/App'
import configureStore from './src/store/configureStore'
// const store = createStore(counter, composeWithDevTools(
//     applyMiddleware(thunk),
// ))

const store = configureStore()

const rootContainer = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootContainer)
