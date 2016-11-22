import * as types from './actionTypes'
import { getWeather } from './fetchApi'

export function weatherLoaded(weather) {
  return {type: types.OVERVIEW_LOADED, payload: weather}
}

export function loadOverview(cityName) {
  return function(dispatch){
    return getWeather(cityName)
      .then(response => dispatch(weatherLoaded(response.data)))
      .catch(error => {
        throw(error);
      })
  }
}
