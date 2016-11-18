// import 'babel-polyfill'
import React from 'react'
import './style/index.scss'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './routes'

const store = configureStore()
const root = document.createElement('div')

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  root
)

document.body.appendChild(root)
