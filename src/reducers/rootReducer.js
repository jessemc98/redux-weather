import { combineReducers } from 'redux'
import overview from './overviewReducer'
import forecast from './forecastReducer'
import citySearch from './citySeachReducer'

const rootReducer = combineReducers({
  overview,
  forecast,
  citySearch
})

export default rootReducer;
