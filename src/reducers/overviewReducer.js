import * as types from '../actions/actionTypes'
import initial from './initialState'

export default function overviewReducer(state = initial.overview, action) {
  if(action.type === types.OVERVIEW_LOADED) {
    const copy = Object.assign({}, state)
    let weather = {
      city: action.payload.name,
      country: action.payload.sys.country,
      dt: action.payload.dt,
      max_temp: action.payload.main.temp_max,
      min_temp: action.payload.main.temp_min,
      temp: action.payload.main.temp,
      humidity: action.payload.main.humidity,
      description: action.payload.weather[0].description,
      icon: action.payload.weather[0].icon
    }
    copy[weather.city.toLowerCase()] = weather

    return copy
  }
  return state
}
