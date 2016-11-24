import {
  weekdayNumToWord,
  dayWithSuffix,
  uppercaseFirst,
  kelvinToCelsius,
  hourFormattedForWeather,
  dateStrToObject } from './selectors.js'

export function weatherFormattedForOverview(weather) {
  const overview = {
    icon: `http://openweathermap.org/img/w/${weather.icon}.png`,
    description: uppercaseFirst(weather.description),
    temp: {
      current: kelvinToCelsius(weather.temp),
      high: kelvinToCelsius(weather.max_temp),
      low: kelvinToCelsius(weather.min_temp)
    }
  }
  return overview
}
export function forecastFormattedForDailyWeather(weeklyForecast) {
  const fiveDayForecast = weeklyForecast.slice(1, 4)

  return fiveDayForecast.map((forecast) => {
    const weekDay = dateStrToObject(forecast[0].dt_txt)
    const forecastForIcons = forecast.slice(2, 7)

    return {
      date: weekdayNumToWord(weekDay.getDay()) + " " + dayWithSuffix(weekDay.getDate()),
      icons: forecastForIcons.map(icon => {
        const weather = icon.weather[0]
        const time = dateStrToObject(icon.dt_txt)

        return {
          src: `http://openweathermap.org/img/w/${weather.icon}.png`,
          alt: weather.icon,
          time: hourFormattedForWeather(time.getHours())
        }
      })
    }
  })
}
