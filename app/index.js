require('./main')
console.log ("hello world")

require ('./main')

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers/index'

import App from '../src/components/App'

let devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


let store = createStore(reducers, devtools)

render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('application')
)
