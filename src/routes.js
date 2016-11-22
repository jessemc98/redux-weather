import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import CountryPageManager from './components/countryPage/CountryPageManager'

export default (
  <Route path="/" component={Layout} >
    <IndexRoute component={CountryPageManager} />
    <Route path="(:country)" component={CountryPageManager} />
  </Route>
)
