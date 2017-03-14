import * as types from '../actions/actionTypes'
import initial from './initialState'
import { seperateUniqueDays } from '../selectors/selectors'

export default function overviewReducer(state = initial.forecast, action) {
  if(action.type === types.FORECAST_LOADED) {
    const cityId = action.payload.city.id
    const forecast = Object.assign({}, state)

    forecast[cityId] = seperateUniqueDays(action.payload.list)

    return forecast
  }
  return state
}
