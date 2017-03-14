import { CITIES_FOUND } from './actionTypes'
import { getMatchingCities } from './fetchApi'

export function foundCities(payload) {
  return { type: CITIES_FOUND, payload }
}

export function findCities(partialCityName) {
  return function(dispatch){
    return getMatchingCities(partialCityName)
      .then(response => {
        dispatch(foundCities(response.data))
      })
      .catch((error, p) => {
        dispatch(foundCities({list: []}))
      })
  }
}
