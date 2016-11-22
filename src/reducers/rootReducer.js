import { combineReducers } from 'redux'
import overview from './overviewReducer.js'
import forecast from './forecastReducer.js'

const rootReducer = combineReducers({
  overview,
  forecast
})

export default rootReducer;
