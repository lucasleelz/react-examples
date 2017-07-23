/**
 * Created by lucas lee on 2017/7/22.
 */
import { composeWithDevTools } from 'redux-devtools-extension'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import counter from './src/reducers'
import Connect1 from './src/containers/Connect1'
import Connect2 from './src/containers/Connect2'
import Connect3 from './src/containers/Connect3'
import Connect4 from './src/containers/Connect4'

const store = createStore(counter, composeWithDevTools(
    applyMiddleware(thunk),
))

const rootEl = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h2>使用react-redux连接</h2>
            <ul>
                <li>
                    connect()的前两个参数分别为函数和对象：
                    <Connect1 />
                </li>
                <li>
                    connect()的前两个参数均为函数：
                    <Connect2 />
                </li>
                <li>
                    connect()的前两个参数均为函数，但使用了bindActionCreators：
                    <Connect3 />
                </li>
                <li>
                    connect()的第二个参数为空：
                    <Connect4 />
                </li>
            </ul>
        </div>
    </Provider>, rootEl)
