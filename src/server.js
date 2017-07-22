/**
 * Created by lucas lee on 2017/7/22.
 */
import React from 'react'
import {renderToString} from 'react-dom/server'
import App from './App'

const appHTML = renderToString(<App />)
console.log(appHTML)

