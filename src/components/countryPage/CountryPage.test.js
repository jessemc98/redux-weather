import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import DailyWeather from '../dailyWeather/DailyWeather'
import DailyOverview from '../dailyOverview/DailyOverview'

import CountryPage from './CountryPage'

const overview = {
  icon: 'assets/icons/icon.png',
  description: 'Clear skies',
  temp: {
    current: 10,
    high: 15,
    low: 9
  }
}
const forecast = [
  {
    date: 'Monday 16th',
    icons: [
      {src: 'assets/icons/clearsky.png', alt: 'clear sky', time: '5pm'},
      {src: 'assets/icons/rain.png', alt: 'strong rain', time: '7pm'},
      {src: 'assets/icons/cloudy.png', alt: 'cloudy', time: '9pm'}
    ]
  },
  {
    date: 'Tuesday 17th',
    icons: [
      {src: 'assets/icons/cloudy.png', alt: 'cloudy', time: '5pm'},
      {src: 'assets/icons/rain.png', alt: 'strong rain', time: '7pm'},
      {src: 'assets/icons/clearsky.png', alt: 'clear sky', time: '9pm'}
    ]
  }
]
function setup(overview, forecast){
  return shallow(<CountryPage overview={overview} forecast={forecast} />)
}

describe("CountryPage", function () {
  it("should render a DailyOverview with correct props", function () {
    const wrapper = setup(overview, forecast)
    const dailyOverview = wrapper.find(DailyOverview)
    const expected = {
      icon: overview.icon,
      weather: overview.description,
      currentTemp: overview.temp.current,
      high: overview.temp.high,
      low: overview.temp.low
    }
    expect(dailyOverview.props()).toEqual(expected)
  });
  describe("renders DailyWeather components", function () {
    it("amount equal to the length of forecast array", function () {
      const wrapper = setup(overview, forecast)
      const components = wrapper.find(DailyWeather)

      expect(components.length).toEqual(forecast.length)
    });
    it("with the correct props", function () {
      const wrapper = setup(overview, forecast)
      const components = wrapper.find(DailyWeather)

      expect(components.at(0).props()).toEqual(forecast[0])
      expect(components.at(1).props()).toEqual(forecast[1])
    });
  });
});
