import * as types from '../actions/actionTypes'
import initial from './initialState'
import { seperateUniqueDays } from '../selectors/selectors'

export default function overviewReducer(state = initial.forecast, action) {
  if(action.type === types.FORECAST_LOADED) {
    const city = action.payload.city.name.toLowerCase()
    const forecast = Object.assign({}, state)

    forecast[city] = seperateUniqueDays(action.payload.list)

    return forecast
  }
  return state
}
