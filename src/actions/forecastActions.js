import * as types from './actionTypes'
import { getForecast } from './fetchApi'

export function forecastLoaded(forecast) {
  return {type: types.FORECAST_LOADED, payload: forecast}
}

export function loadForecast(cityName) {
  return function(dispatch){
    return getForecast(cityName)
      .then(response => dispatch(forecastLoaded(response.data)))
      .catch(error => {
        throw(error);
      })
  }
}
