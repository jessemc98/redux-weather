import * as types from './actionTypes'
import axios from 'axios'

const apiEntrypoint = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
  timeout: 2000,
  params: {
    appid: "d5fa9909b8944d603b81a6a7dbec6b13"
  }
});

export function getWeather(cityId) {
  return apiEntrypoint.get("weather", {
    params: {id: cityId}
  })
}
export function getForecast(cityId) {
  return apiEntrypoint.get("forecast", {
    params: {id: cityId}
  })
}
export function getMatchingCities(partialCityName) {
  return apiEntrypoint.get("find", {
    params: {q: partialCityName}
  })
}
// basic call
//axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d5fa9909b8944d603b81a6a7dbec6b13`)
