import * as types from './actionTypes'
import axios from 'axios'

const apiEntrypoint = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
  timeout: 2000,
  params: {
    appid: "d5fa9909b8944d603b81a6a7dbec6b13"
  }
});

export function getWeather(cityName) {
  return apiEntrypoint.get("weather", {
    params: {q: cityName}
  })
}
export function getForecast(cityName) {
  return apiEntrypoint.get("forecast", {
    params: {q: cityName}
  })
}
// basic call
//axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d5fa9909b8944d603b81a6a7dbec6b13`)
